import React from "react";
import { Navigate,Outlet } from "react-router-dom";
//Outlet checks that if user is logged in if not take it to sign-up pages

const PrivateComponent =()=>{
    const auth = localStorage.getItem('user') //In this user i am paasing because the user is stored in the Signup Page while storing in th elocalstorage
    return auth?<Outlet/>:<Navigate to ="signup"/>
}

export default PrivateComponent;