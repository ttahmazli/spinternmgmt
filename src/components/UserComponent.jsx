import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

const UserComponent = ({children}) => {
    const navigate = useNavigate()


    useEffect(() => {
      if (!localStorage.getItem("isLogged")) {
        navigate("/login")
      }
    }, [])
  return (
    <>
        {children}
    </>
  )
}

export default UserComponent