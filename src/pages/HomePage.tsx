import MessageBlock from "../components/messages/MessageBlock.tsx";
import {User} from "../types/main.ts";
import CharactersList from "../components/CharactersList.tsx";

export default function HomePage() {
    const user = JSON.parse(localStorage.getItem("user") as string) as User
    return (
        <div className={"container mt-3"}>
            <MessageBlock/>
            <h1>Welcome back, {user.name}</h1>
            <CharactersList/>
        </div>
    )
}