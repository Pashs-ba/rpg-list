import {useNavigate, useParams} from "react-router";
import {Character, MessagesType, User} from "../types/main.ts";
import {useEffect, useState} from "react";
import {GetSingleCharacterById} from "../utils/firestore_processing.ts";
import LoadingComponent from "../components/UI/LoadingComponent.tsx";
import {useDispatch} from "react-redux";
import {addMessageWithRedirection} from "../components/messages/messageSlice.ts";
import BaseSpecs from "../components/CharacterComponent/BaseSpecs.tsx";
import ListedValues from "../components/CharacterComponent/ListedValues.tsx";
import BaseDebuffBlock from "../components/CharacterComponent/BaseDebuffBlock.tsx";

export default function CharacterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const character_id = param.CharacterId as string
    const [character, setCharacter] = useState({id: character_id} as Character);
    const user = JSON.parse(localStorage.getItem("user") || "") as User;

    function CheckCharacter(character_id: string) {
        if (!user.characters.includes(`characters/${character_id}`)) {
            dispatch(addMessageWithRedirection({text: "У вас нет такого персонажа!", type: MessagesType.DANGER}));
            navigate("/");
        }
    }

    useEffect(() => {
        //TODO add undefined check
        CheckCharacter(character_id)
        GetSingleCharacterById(character_id).then((character) => {
            setCharacter(character)
        })
    }, [])
    return (
        <>
            {
                character.name ? (
                    <div className={"container pt-3"}>
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <h1>Герой {character.name}</h1>
                                <div className={"text-secondary"}>Игрок: {user.name}</div>
                                <div className={"text-secondary"}>Раса: {character.race}</div>
                            </div>
                            <div className="col-lg-8">
                                <BaseSpecs base_specs={character.baseSpec}/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                <BaseDebuffBlock value={character.health} name={"Здоровье"}/>
                                <BaseDebuffBlock value={character.fatigue} name={"Усталость"}/>
                            </div>
                            <div className="col-lg-5">
                                <ListedValues values={character.effects} title={"Эффекты"}/>
                            </div>
                            <div className="col-lg-5 mt-3 mt-lg-0">
                                <ListedValues values={character.injuries} title={"Увечья"}/>
                            </div>
                        </div>

                    </div>
                ) : <LoadingComponent/>
            }
        </>
    )
}