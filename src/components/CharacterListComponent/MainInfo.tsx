import CharacterSpecs from "./CharacterSpecs.tsx";
import {Character, User} from "../../types/main.ts";

export default function MainInfo({character, user}: { character: Character, user: User }) {
    return (
        <div className="row align-items-center">
            <div className="col-lg-4">
                <h1>Герой {character.name}</h1>
                <div className={"text-secondary"}>Игрок: {user.name}</div>
                <div className={"text-secondary"}>Раса: {character.race}</div>
            </div>
            <div className="col-lg-8">
                <CharacterSpecs base_specs={character.characterSpec}/>
            </div>

        </div>
    )
}