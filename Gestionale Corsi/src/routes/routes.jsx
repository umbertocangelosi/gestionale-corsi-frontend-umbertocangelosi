import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout/MainLayout";
import { Home } from "../pages/Home";
import { Didattica } from "../pages/Didattica";
import { AuthContextProvider } from "../contexts/AuthContext/AuthContextProvider";
import { Registrazione } from "../pages/Registrazione";
import { Login } from "../pages/Login";
import { ProfiloUtente } from "../pages/ProfiloUtente";
import { Admin } from "../pages/Admin";
import { NewCorso } from "../pages/NewCorso";
import { ProtectedRouteByLogin } from "../components/ProtectedRouteByLogin";
import { ProtectedRouteByRole } from "../components/ProtectedRouteByRole";

export const router = createBrowserRouter([
    {   

        element: (
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
        ),
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: <Home/>
                    },
                    {
                        path: "didattica/",
                        element: <Didattica/>
                    },
                    {
                        path: "registrazione/",
                        element: <Registrazione/>
                    },
                    {
                        path: "login/",
                        element: <Login/>
                    },
                    {
                        path: "profiloUtente/",
                        element: <ProtectedRouteByLogin><ProfiloUtente/></ProtectedRouteByLogin>
                    },
                    {
                        path: "admin/",
                        element: <ProtectedRouteByRole><Admin/></ProtectedRouteByRole>
                    },
                    {
                        path: "newCorso",
                        element: <ProtectedRouteByRole><NewCorso/></ProtectedRouteByRole>
                    },
                    {
                        path: "*",
                        element: <Navigate to="/" />
                    }
                ]
            }
        ]    

    }
]);