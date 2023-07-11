import App from "../App.tsx";
import Login from "../pages/Login.tsx";
import {Route, Routes} from "react-router";
import Guard from "./Guard.tsx";
import HomePage from "../pages/HomePage.tsx";

function authCheck() {
    return !!localStorage.getItem("user")
}

function alreadyAuthenticated() {
    return !localStorage.getItem("user")
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route
                    element={
                        <Guard navigate_in_fail={"/login"}
                               test_function={authCheck}
                        />
                    }>
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route element={
                    <Guard navigate_in_fail={"/"}
                           test_function={alreadyAuthenticated}/>
                }>
                    <Route path={"login"} element={<Login/>}/>
                </Route>
            </Route>


        </Routes>
    )
}