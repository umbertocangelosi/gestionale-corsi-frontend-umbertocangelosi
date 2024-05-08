import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useContext, useEffect } from "react";

//  componente che permette di accedere a una route solo se l'utente è autorizzato, quindi se il suo ruolo é admin
export function ProtectedRouteByRole({children}){
    const {user} = useContext(AuthContext);
    const navigateTo= useNavigate();

    useEffect(()=>{
        if(!user.isAuthorized){ 
            navigateTo("/")
        }
    },[]);


    return(
    <>{children}</> 
    )

        
    

}