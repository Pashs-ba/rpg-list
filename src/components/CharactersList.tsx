import {Character, User} from "../types/main.ts";
import {useEffect, useState} from "react";
import Card from "./UI/Card.tsx";
import LoadingComponent from "./UI/LoadingComponent.tsx";
import {GetSingleCharacterByPath, UpdateUser} from "../utils/firestore_processing.ts";
import {Link} from "react-router-dom";

export default function CharactersList() {
    let user = JSON.parse(localStorage.getItem("user") as string) as User
    const [characters, setCharacters] = useState([] as Character[])
    //TODO tests?

    useEffect(() => {
        UpdateUser().then((new_user) => {
            user = new_user
            localStorage.setItem("user", JSON.stringify(user))
            const new_characters: Character[] = []
            user.characters.map((character_path) => {
                GetSingleCharacterByPath(character_path).then((character) => {
                    new_characters.push(character)
                    if (new_characters.length == user.characters.length) {
                        setCharacters(new_characters)
                    }
                })
            })
        })
    }, [])

    function RenderCharacters() {
        return characters.map((character) => {
            return (
                <div key={character.id} className={"col-lg-3"}>
                    <Card additionalClasses={"mb-3 h-100"}>

                        <h5 className={"card-title"}>
                            {character.name}
                        </h5>
                        <p className={"card-text"}>
                            Свободный пОпыт: {character.freeExperience}
                        </p>
                        <Link to={`/character/${character.id}`}
                              className="btn btn-primary">
                            Открыть
                        </Link>
                    </Card>
                </div>
            )
        })
    }

    return (
        <div className={"row justify-content-center align-items-center"}>
            {
                characters.length === user.characters.length ? RenderCharacters() : <LoadingComponent/>
            }
        </div>
    )
}