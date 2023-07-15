import {Outlet} from "react-router";
import NavBar from "./components/UI/NavBar.tsx";

export default function App() {
    return (
        <>
            <NavBar title={"RPG List"} bootstrap_icon_name={"bi-magic"}/>
            <div className={"full-height"}>
                <Outlet/>
            </div>

        </>
    )
}
