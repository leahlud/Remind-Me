const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'usersystem',
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
        [username, email, password], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("User Inserted");
            }
        }
    );
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', 
        [username, password], (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination"})
            }
        }
    );
});

app.post('/task', (req, res) => {
    console.log(req.body);
    const user_id = req.body.user_id;
    const task = req.body.task;
    const deadline = req.body.deadline;
    const status = req.body.status;
    
    db.query('INSERT INTO tasks (user_id, task, deadline, status) VALUES (?, ?, ?, ?)', 
        [user_id, task, deadline, status], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Task Inserted");
            }
        }
    );
});

app.put('/task/update', (req, res) => {
    console.log(req.body);
    const user_id = req.body.user_id;
    const task = req.body.task;
    const status = req.body.status;
    
    db.query('UPDATE tasks SET status = ? WHERE user_id = ? AND task = ?', 
        [status, user_id, task], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Task Inserted");
            }
        }
    );
});

app.post('/task/populate', (req, res) => {
    console.log(req.body);
    const user_id = req.body.user_id;
    
    db.query('SELECT * FROM tasks WHERE user_id = ?', [user_id], (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Invalid user_id"})
            }
        }
    );
});

app.delete('/task/delete/:user_id/:task', (req, res) => {
    console.log(req.params);
    const user_id = req.params.user_id;
    const task = req.params.task;
    
    db.query('DELETE FROM tasks WHERE user_id = ? AND task = ?', [user_id, task], (err, result) => {
            if (err) {
                res.send({err: err});
            } else {
                res.send(result);
            } 
        }
    );
});

app.listen(3001, ()=> {
    console.log("Serving is running on port 3001");
});

