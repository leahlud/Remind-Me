import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import Axios from 'axios';

export default function Register () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [popupStyle, showPopup] = useState("hide");
    const navigate = useNavigate();

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 2000)
    }

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: name,
            email: email,
            password: pass
        }).then((response) => {
            if (response.data.message) {
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
        <div className="register-page">
            <div className="register-frame">
                <h1 className="register-title-text">Create an Account</h1>
                    <div className="input-frame" >
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="username" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <div className="register-button" onClick={register}>Register</div>
                    <div className={popupStyle} >
                        <h3>Thank you for registering! </h3>
                    </div>
                    <p className="register-bottom-text">Already have an account? <Link to="/">Login here</Link></p>
            </div>
        </div>
    )
}