import React, { Fragment, useState, useContext } from "react";
import axios from "axios";
import LoginCardStyle from './LoginCardStyle.module.css';
import { AuthContext } from '../AuthContext';

function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const { login, isLogged, logout, users, setUsersData } = useContext(AuthContext);

    const handleLogin = (e) => {

        e.preventDefault()

        const data = {
            username: name,
            password: password,

        };

        let  db={};
        async function doGetRequest() {
          let res = await axios
          .post('https://localhost:44319/api/Test/Login', data);
                
          db = res.data;
          if (db===null){
            alert("wrong login credentials")
          }
          else{
            setUsersData([db]);
           login(); 
          }
          
        }
                
        doGetRequest();
      }

    return (
        <div className={LoginCardStyle.cardDiv}>
            <h2>Login SP Services</h2>
            <form onSubmit={handleLogin}>

                <div className={LoginCardStyle.usernameInput}>
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className={LoginCardStyle.passwInput}>
                    <label htmlFor="passw">Password</label>
                    <input
                        type="password"
                        name="passw"
                        id="passw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" id={LoginCardStyle.submitBtn}>Login</button>

            </form>

        </div>
    )
}

export default Login;
