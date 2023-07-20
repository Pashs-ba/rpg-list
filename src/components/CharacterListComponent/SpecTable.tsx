import SpecColumn from "./Specs/SpecColumn.tsx";
import {Character} from "../../types/main.ts";

export default function SpecTable({character}: { character: Character }) {
    return (
        <div className="row mt-3 justify-content-center">
            <SpecColumn base_specs={character.mainAbilities.dexterity} label={"Ловкость"}/>
            <SpecColumn base_specs={character.mainAbilities.strength} label={"Сила"}/>
            <SpecColumn base_specs={character.mainAbilities.endurance} label={"Выносливость"}/>
            <SpecColumn base_specs={character.mainAbilities.intelligence} label={"Интеллект"}/>
            <SpecColumn base_specs={character.mainAbilities.temperament} label={"Характер"}/>
            <SpecColumn base_specs={character.mainAbilities.charisma} label={"Харизма"}/>
        </div>
    )
}