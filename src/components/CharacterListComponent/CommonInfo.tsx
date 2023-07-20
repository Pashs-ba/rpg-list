import {Character} from "../../types/main.ts";
import BaseDebuffBlock from "./BaseDebuffBlock.tsx";
import ListedValues from "./ListedValues.tsx";

export default function CommonInfo({character}:{character: Character}) {
    return (
        <div className="row mt-3 align-items-center">
            <div className="col-lg-2">
                <BaseDebuffBlock value={character.health} name={"Здоровье"}/>
                <BaseDebuffBlock value={character.fatigue} name={"Усталость"}/>
            </div>
            <div className="col-lg-10">
                <h4>пОпыт:</h4>
                <div className="progress" role="progressbar">
                    <div className="progress-bar"
                         style={{width: `${character.freeExperience / 10 * 100}%`}}>{character.freeExperience}/10
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <ListedValues values={character.effects} title={"Эффекты:"}/>
                    </div>
                    <div className="col-lg-6 mt-3 mt-lg-0">
                        <ListedValues values={character.injuries} title={"Увечья:"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}