import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native';
import { useLocation, useNavigate } from "react-router-dom";
import './Planner.css';
import Axios from 'axios';

export default function Planner ({route}) {
    const [popupStyle, showPopup] = useState("hide")
    const [list, setList] = useState([]);
    const [taskInput, setTaskInput]= useState("");
    const [deadline, setDeadline]= useState("");
    const {state} = useLocation();
    const navigate = useNavigate();
    const {user_id} = state;

    useEffect(() => {
        console.log('useEffect ran');
        populateTasks();
      }, []);

    const addTask = (Task, Deadline) =>{
        Axios.post('http://localhost:3001/task', {
            user_id: user_id,
            task: taskInput,
            deadline: deadline,
            status: 0,
        }).then(() => {
            console.log("Tasks row successfully added")
        })
        const newTask = {
            id: Math.random(),
            todo : Task,
            deadline: Deadline,
            status: 0,
        };
        list.push(newTask)
        list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        setList([...list]);
        setTimeout(() => showPopup("hide"), 0);
        setTaskInput("");
        setDeadline("");
    }

    const deleteTask = (Item) => {
        Axios.delete('http://localhost:3001/task/delete/' + user_id + '/' + Item.todo)
        .then(() => {
            console.log("Task row successfully deleted")
            const newList = list.filter((Task) => Task.id !== Item.id);
            setList(newList);
        })
    };

    const populateTasks = () => {
        Axios.post("http://localhost:3001/task/populate", {
            user_id: user_id,
        }).then((response) => {
            if (response.data.message) {
                console.log(response.data.message);
            } else {
                console.log(response.data);
                setList([])
                for (const data of response.data) {
                    const newTask = {
                        id: Math.random(),
                        todo : data.task,
                        deadline: new Date(data.deadline),
                        status: data.status,
                    };
                    list.push(newTask)
                }
                list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
                setList([...list]);
            }
        })
    };

    const displayPopup = () => {
        showPopup("new-task-popup")
        console.log(user_id)
    }

    const closePopup = () => {
        setTimeout(() => showPopup("hide"), 0);
        setTaskInput("");
        setDeadline("");
    };

    const logout = () => {
        setList([]);
        navigate("/");
    };

    const updateListChecked = (task_id, todo, deadline, status) => {
        Axios.put('http://localhost:3001/task/update/', {
            user_id: user_id,
            task: todo,
            status: status,
        }).then(() => {
            console.log("Task row successfully updated")
            const newList = list.map((item) => {
                if (item.id == task_id) {
                    const updatedItem = {
                        id: item.id,
                        todo: item.todo,
                        deadline: item.deadline,
                        status: status,
                    };
                    return updatedItem;
                }
                return item;
            })
            setList(newList)
        })
    };

    return (
        <div className="planner-parent">
            {/* top bar that displays title of page and contains the button to add a new task */}
            <div className="planner-top-bar" >  
                <div className="logout-button" onClick={logout}>Sign out</div>
                <h1 className="todo-title-text" >{user_id}'s To-Do List</h1>
                <div className="new-task-button" onClick={displayPopup}>+ New Task</div>
            </div>

            {/* main section of page where the tasks will be displayed */}
            <div className="planner-task-page">

                {/* Frame for where tasks will populate in a scrollable list-view */}
                <div className="tasks-frame" >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ul class="sub-menu" type="none" >
                            {list.map((Task) => (
                                <li key={Task.id}>
                                    <div className="task-item-frame"> 
                                        <div className="flex-frame"> 
                                            <input className="checkbox-item" type="checkbox" checked={Task.status} onChange={() => updateListChecked(Task.id, Task.todo, Task.deadline, !Task.status)}/>
                                            <div className="task-description-frame"> 
                                                <div className="task-description-text">{Task.todo}</div>
                                                <div className="deadline-description-text">&nbsp;
                                                {" "}{new Date(Task.deadline).toLocaleDateString()}
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="delete-task-button" onClick={() => deleteTask(Task)}>
                                        &nbsp;delete &times;
                                        </div>   
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollView>
                </div>

                {/* Pop-up for creating adding a new task */}
                <div className={popupStyle} >
                    <div className="close-task-button" onClick={closePopup}>close</div>
                    <h3 className="task-popup-title">New Task</h3>
                    <input type="text" placeholder="Description of task" value={taskInput} 
                        onChange={(e) => setTaskInput(e.target.value)} /> 
                    <input type="text" placeholder="mm/dd/yyyy" value={deadline} 
                        onChange={(e) => setDeadline(e.target.value)} /> 
                    <div className="add-task-button" onClick={() => {addTask(taskInput, deadline)}}>Add</div>
                </div>  
            </div>
        </div>
    )
}
