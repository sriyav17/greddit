import axios from 'axios';
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = { userName: username, password: password };
            const res = await axios.post("/api/login", user);
            if(res.data.success)
            {
                localStorage.setItem("token", res.data);
                navigate("/profile")
            }
        }
        catch (error) {
            document.getElementById("text").style.backgroundColor = "red";
            document.getElementById("text").innerHTML = "Try again!";
            formRef.current.reset();
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit" disabled={!username || !password}>Login</button>
            </form>

            <div> Don't have an account?
                <button className='link-btn' onClick={() => props.onFormSwitch("register")} >
                    Register
                </button>
            </div>
        </div>
    )
}
