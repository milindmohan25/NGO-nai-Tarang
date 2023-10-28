import React from 'react'
import Login from '../../components/Login/Login'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const token = localStorage.getItem( "token" )
  if ( token ){
    return <Navigate to = {"/"} />
  }
  return (
    <>
    <Login/>
    </>
  )
}

export default LoginPage