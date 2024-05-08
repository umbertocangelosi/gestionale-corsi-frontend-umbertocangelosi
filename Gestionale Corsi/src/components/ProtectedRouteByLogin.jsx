import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useContext, useEffect } from "react";

export function ProtectedRouteByLogin({children}){
    const {user} = useContext(AuthContext);
    const navigateTo= useNavigate();

    useEffect(()=>{
        if(!user.isLogged){  //if(!user?.isAutorized){  in questo caso usa optional chaining per risolere un problema
            navigateTo("/")
        }
    },[]);


    return(
    <>
    {children}
    </> 
    )

        
    

}