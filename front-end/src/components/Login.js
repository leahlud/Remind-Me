import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import Axios from 'axios';

export default function Login () {
    const [popupStyle, showPopup] = useState("hide")
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const displayPopup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 2000)
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: name,
            password: pass,
        }).then((response) => {
            if (response.data.message) {
                displayPopup();
            } else {
                navigate("/planner", {
                    state: {
                        user_id: name,
                    }
                });
                console.log(response.data[0]);
            }
        })
    }

    return (
        <div>
            <div className="login-page" >
                <div className="login-frame" >
                    <h1 className="login-title-text" >Welcome back!</h1>

                    {/* input text boxes for username and password */}
                    <div className="input-frame" >
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}placeholder="Password" />
                    </div>

                    <div className="login-button" onClick={login} >Login</div>
                    <p className="login-link-text">Don't have an account? <Link to="/register">Register here</Link></p>
                </div>

                <div className={popupStyle} >
                    <h3 className="title-login-popup">Login Failed</h3>
                    <h3 className="message-login-popup">Username or password is incorrect</h3>
                </div>
                
            </div>
        </div>
    )
}