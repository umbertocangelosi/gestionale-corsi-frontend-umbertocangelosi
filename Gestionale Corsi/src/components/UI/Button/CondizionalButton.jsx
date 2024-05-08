import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";


export function CondizionalButton({ }) {
    const { user } = useContext(AuthContext);
    return(
    user.isLogged ? <LogoutButton /> : <LoginButton />
    )
}