import { createContext, useState, useEffect, useReducer } from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [users, setUsersData] = useState([]);


    const navigate = useNavigate()

    useEffect(() => {
        if (isLogged) {
          localStorage.setItem("isLogged", isLogged)
          localStorage.setItem("users", JSON.stringify(users))
          navigate("/")
        }
      },[isLogged, users])

    // useEffect(() => {
    //     if (localStorage.getItem("isLogged")) {
    //         setIsLogged(true);
    //     }

    // }, []);


    const login = () => {
        setIsLogged(true);
        localStorage.setItem("users", JSON.stringify(users))
        navigate("/")
    };

    const logout = () => {
        setIsLogged(false);
        localStorage.removeItem("isLogged")
        localStorage.removeItem("users")
        navigate("/login")

    };


    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, login, logout, users, setUsersData }}>
            {children}
        </AuthContext.Provider>
    );
};