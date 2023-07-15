import App from "../App.tsx";
import {Route, Routes} from "react-router";
import Tester from "./Tester.tsx";
import {lazy, Suspense} from "react";
import LoadingPage from "../pages/LoadingPage.tsx";

function authCheck() {
    return !!localStorage.getItem("user")
}

function alreadyAuthenticated() {
    return !localStorage.getItem("user")
}

export default function AppRoutes() {
    const HomePage = lazy(() => import("../pages/HomePage.tsx"));
    const Login = lazy(() => import("../pages/Login.tsx"));
    const Filler = lazy(() => import("../pages/tests/Filler.tsx"));
    const MessageBLockTestPage = lazy(() => import("../pages/tests/MessageBlockTestPage.tsx"));
    const NotFound = lazy(() => import("../pages/NotFound.tsx"));
    const CharacterPage = lazy(() => import("../pages/CharacterPage.tsx"));
    return (
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route
                        element={
                            <Tester navigate_in_fail={"/login"}
                                    test_function={authCheck}
                            />
                        }>
                        <Route index element={<HomePage/>}/>
                        <Route path={"character/:CharacterId"} element={<CharacterPage/>}/>
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
                    <Route path={"*"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}