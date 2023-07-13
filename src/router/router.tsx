import App from "../App.tsx";
import Login from "../pages/Login.tsx";
import {Route, Routes} from "react-router";
import Tester from "./Tester.tsx";
import HomePage from "../pages/HomePage.tsx";
import Filler from "../pages/tests/Filler.tsx";
import MessageBLockTestPage from "../pages/tests/MessageBlockTestPage.tsx";

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
                        <Tester navigate_in_fail={"/login"}
                                test_function={authCheck}
                        />
                    }>
                    <Route index element={<HomePage/>}/>
                    <Route path={"test/"}>
                        <Route path={"message_block"} element={<MessageBLockTestPage/>}/>
                        <Route path={"filler"} element={<Filler/>}/>
                    </Route>
                </Route>
                <Route element={
                    <Tester navigate_in_fail={"/"}
                            test_function={alreadyAuthenticated}/>
                }>
                    <Route path={"login"} element={<Login/>}/>
                </Route>
            </Route>


        </Routes>
    )
}