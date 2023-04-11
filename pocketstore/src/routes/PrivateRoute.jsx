import React from 'react'
import { Navigate,useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location = useLocation();
    if(!localStorage.getItem("item")){
        return <Navigate to='/login' state={{data:location.pathname}} />
    }
    return children
}

export default PrivateRoute
