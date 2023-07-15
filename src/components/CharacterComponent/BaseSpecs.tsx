import {BaseSpec} from "../../types/main.ts";
import BaseSpecElement from "./BaseSpecElement.tsx";

export default function BaseSpecs({base_specs}: { base_specs: BaseSpec }) {
    return (
        <div className={"row row-cols-lg-5"}>
            <BaseSpecElement value={base_specs.speed} name={"Скорость"}/>
            <BaseSpecElement value={base_specs.quirkiness} name={"Изворотливость"}/>
            <BaseSpecElement value={base_specs.resilience} name={"Устойчивость"} />
            <BaseSpecElement value={base_specs.compliance} name={"Сговорчивость"} />
            <BaseSpecElement value={base_specs.receptivity} name={"Воспримчивость"}/>
        </div>
    )
}