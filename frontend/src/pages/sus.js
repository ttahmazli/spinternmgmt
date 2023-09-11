import React, { Fragment, useState } from "react";
import axios from "axios";

function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

  


    const handleLogin = () => {
        const data = {
            Name: name,
            Password: password
        };

        const url = 'https://localhost:44358/api/Test/Login';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert(error);
        })

    }

    return(
        <Fragment><label>Name</label>
        <input
        type="text"
        id="txtName"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        />
        <label>Username</label>
        <input
        type = "text"
        id = "txtPassword"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin()}>Save</button></Fragment>
    )
}

export default Login;