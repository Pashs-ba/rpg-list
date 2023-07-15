import MessageBlock from "../components/messages/MessageBlock.tsx";
import {User} from "../types/main.ts";
import CharactersList from "../components/CharactersList.tsx";

export default function HomePage() {
    const user = JSON.parse(localStorage.getItem("user") as string) as User
    return (
        <div className={"container h-100"}>

            <h1 className={"pt-3 mb-3"}>Welcome back, {user.name}</h1>
            <MessageBlock/>
            <CharactersList/>
        </div>
    )
}