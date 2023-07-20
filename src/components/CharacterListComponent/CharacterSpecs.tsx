import {CharacterSpec} from "../../types/main.ts";
import CharacterSpecElement from "./CharacterSpecElement.tsx";

export default function CharacterSpecs({base_specs}: { base_specs: CharacterSpec }) {
    return (
        <div className={"row row-cols-lg-5"}>
            <CharacterSpecElement value={base_specs.speed} name={"Скорость"}/>
            <CharacterSpecElement value={base_specs.quirkiness} name={"Изворотливость"}/>
            <CharacterSpecElement value={base_specs.resilience} name={"Устойчивость"} />
            <CharacterSpecElement value={base_specs.compliance} name={"Сговорчивость"} />
            <CharacterSpecElement value={base_specs.receptivity} name={"Воспримчивость"}/>
        </div>
    )
}