import React, { useState } from 'react'
import axios from 'axios';

export default function Register(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [contactNo, setContactNo] = useState();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = { firstName: firstName, lastName: lastName, userName: username, email: email, age: age, contactNumber: contactNo, password: password };
            await axios.post("/api/register", user, { headers: { "Content-Type": "application/json" } });
            console.log(user)
            // alert("Registration successful!");
            props.onFormSwitch("login");
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }
    };

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>

                <div className="row">
                    <div className="column">
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="column">
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" id="firstname" name="firstname" />
                    </div>
                    <div className="column">
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" id="lastname" name="lastname" />
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="column">
                        <label htmlFor="username">Username</label>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                    </div><div className="column">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name="username" />
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="column">
                        <label htmlFor="contactno">Contact Number</label>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" id="age" name="age" />
                    </div>
                    <div className="column">
                        <input value={contactNo} onChange={(e) => setContactNo(e.target.value)} type="tel" placeholder="Contact Number" id="contactno" name="contactno" pattern="[0-9]{10}" title="Must be a ten digit code" />
                    </div>
                </div>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" pattern=".{8,}"
                    title="Must contain at least 8 or more characters" />
                {error && <div className="error">{error}</div>}
                <button type="submit" disabled={!firstName || !lastName || !email || !username || !age || !contactNo || !password}>Register</button>
            </form>

            <div> Already have an account?
                <button className='link-btn' onClick={() => props.onFormSwitch("login")}>
                    Login
                </button>
            </div>
        </div>
    )
}
