import {Layer, RegularPolygon, Stage} from "react-konva";
import Rhombus from "./Rhombus.tsx";
import {SecondarySpec} from "../../../types/main.ts";


export default function SmallSpec({secondary_specs}: { secondary_specs: SecondarySpec }) {
    function SetFillByLevel(element_level: number) {
        if (secondary_specs.max_level && element_level >= secondary_specs.max_level) {
            return "#adb5bd"
        } else if (secondary_specs.level >= element_level) {
            return "#0d6efd"
        } else {
            return "#fff"
        }
    }

    return (
        <Stage width={150/2} height={55/2} scale={{x: 0.5, y: 0.5}}>
            <Layer>
                <RegularPolygon sides={5} radius={20} x={120} y={18.5} rotation={30} fill={SetFillByLevel(5)}
                                stroke={"black"}/>
                <Rhombus width={50} height={35.5} x={90} y={25} rotation={-40} fill={SetFillByLevel(4)}
                         stroke={"black"}/>
                <Rhombus width={47} height={35.5} x={67} y={17.5} rotation={-40} fill={SetFillByLevel(3)}
                         stroke={"black"}/>
                <RegularPolygon sides={4} radius={20} x={45} y={27.5} rotation={42} fill={SetFillByLevel(2)}
                                stroke={"black"}/>
                <RegularPolygon sides={3} radius={20} x={20} y={27.5} rotation={5} fill={SetFillByLevel(1)}
                                stroke={"black"}/>
            </Layer>
        </Stage>
    )
}