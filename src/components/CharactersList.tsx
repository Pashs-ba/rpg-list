import {Character, User} from "../types/main.ts";
import {useEffect, useState} from "react";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../firebase/app.ts";
import Card from "./UI/Card.tsx";

export default function CharactersList() {
    const user = JSON.parse(localStorage.getItem("user")) as User
    const [characters, setCharacters] = useState([] as Character[])
    //TODO tests

    useEffect(() => {
        const new_characters = []
        user.characters.map((character_path) => {
            getDoc(doc(db, character_path)).then((character) => {
                new_characters.push({
                    id: character.id,
                    name: character.get("name"),
                    freeExperience: character.get("freeExperience")
                })
                if (new_characters.length == user.characters.length) {
                    setCharacters(new_characters)
                }
            })
        })

    }, [])

    function RenderCharacters() {
        return characters.map((character) => {
            return (
                <Card additionalClasses={"mb-3"} key={character.id}>
                    {character.name}
                </Card>
            )
        })
    }

    return (
        <div>
            {RenderCharacters()}
        </div>
    )
}