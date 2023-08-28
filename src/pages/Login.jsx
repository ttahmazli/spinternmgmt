import React, {useEffect} from 'react';
import LoginStyle from './Login.module.css';
import LoginCard from '../components/LoginCard/LoginCard';
import { useNavigate } from 'react-router'


const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("isLogged")){
            navigate("/")
        }
    },[])

    const LoginContent =  <div className={LoginStyle.loginBody}>
                                <LoginCard />
                                <div className={LoginStyle.overlayDiv}>
                                </div>
                            </div>


    return (
        <>
         {!localStorage.getItem("isLogged") ? LoginContent : null}
        </>
        
    )
}

export default Login