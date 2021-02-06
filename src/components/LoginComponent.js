import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


import '../css/Login.css';

const axios = require('axios').default;


const LoginComponent = () => {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.status, response.data);
            console.log(response.token);
            if(response.status === 200)
                history.push('/productlist');

        }).catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="email"
                        name="email"
                        onChange={handleEmail} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"
                        name="password"
                        onChange={handlePassword} />
                </label>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>

        
    )
}

export default LoginComponent;
