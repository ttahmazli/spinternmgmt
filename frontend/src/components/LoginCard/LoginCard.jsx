import React, { useContext } from 'react';
import LoginCardStyle from './LoginCardStyle.module.css';
import { useState, useEffect } from 'react';
import db from "../../db/data.json"
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';


const LoginCard = () => {


  const [username, setUsername] = useState("");
  const [password, setPassw] = useState("");
  //usersData sifirlanir her defe

  const { login, isLogged, logout, users, setUsersData } = useContext(AuthContext);

  const navigate = useNavigate()




  const handleSubmit = (e) => {
    e.preventDefault()


    const url = 'https://localhost:44319/api/Test/Login';
    const data = { username: username, password: password, name: result.name, surname: result.surname, sapID: result.sapID };
    const user;
    
    axios.get(url)
    .then((result) => {
      user = result.find(user => user.username === username && user.password === password);
    }).catch((error) => {
      alert(error);
    })

    setUsersData([data]);


    if (user) {
      login()
      console.log(data)
    } else {
      logout()
    }
  }


  return (
    <div className={LoginCardStyle.cardDiv}>
      <h2>Login SP Services</h2>
      <form onSubmit={handleSubmit}>

        <div className={LoginCardStyle.usernameInput}>
          <label>
            Username:
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>

        <button type="submit" id={LoginCardStyle.submitBtn}>Login</button>

      </form>

    </div>
  )
}

export default LoginCard