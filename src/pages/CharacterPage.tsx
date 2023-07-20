import {useNavigate, useParams} from "react-router";
import {Character, MessagesType, User} from "../types/main.ts";
import {useEffect, useState} from "react";
import {GetSingleCharacterById} from "../utils/firestore_processing.ts";
import LoadingComponent from "../components/UI/LoadingComponent.tsx";
import {useDispatch} from "react-redux";
import {addMessageWithRedirection} from "../components/messages/messageSlice.ts";
import MainInfo from "../components/CharacterListComponent/MainInfo.tsx";
import CommonInfo from "../components/CharacterListComponent/CommonInfo.tsx";
import SpecTable from "../components/CharacterListComponent/SpecTable.tsx";

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
                        <MainInfo character={character} user={user}/>
                        <CommonInfo character={character}/>
                        <SpecTable character={character}/>

                    </div>
                ) : <LoadingComponent/>
            }
        </>
    )
}