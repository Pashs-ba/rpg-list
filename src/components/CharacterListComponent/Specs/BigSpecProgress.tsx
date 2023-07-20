import {BaseSpec} from "../../../types/main.ts";
import {Group, Layer, RegularPolygon, Stage, Text} from "react-konva";
import Rhombus from "./Rhombus.tsx";


export default function BigSpecProgress({base_specs}: { base_specs: BaseSpec }) {
    function SetFillByLevel(element_level:number){
        if (base_specs.max_level && element_level>=base_specs.max_level){
            return "#adb5bd"
        }else if (base_specs.level>=element_level){
            return "#0d6efd"
        }else {
            return "#fff"
        }
    }
    return (
        <Stage width={140} height={55} className={"d-flex justify-content-center"} >
            <Layer>
                <Group>
                <RegularPolygon sides={5} radius={20} x={120} y={18.5} rotation={30} fill={SetFillByLevel(5)} stroke={"black"}/>
                    <Text text={"12"} fontSize={20} x={110} y={10.5}/>
                </Group>
                <Group>
                    <Rhombus width={50} height={35.5} x={90} y={25} rotation={-40} fill={SetFillByLevel(4)} stroke={"black"}/>
                    <Text text={"10"} fontSize={20} x={80} y={16.5}/>
                </Group>
                <Group>
                    <Rhombus width={47} height={35.5} x={67} y={17.5} rotation={-40} fill={SetFillByLevel(3)} stroke={"black"}/>
                    <Text text={"8"} fontSize={20} x={63} y={8.5}/>
                </Group>
                <Group>
                    <RegularPolygon sides={4} radius={20} x={45} y={27.5} rotation={42} fill={SetFillByLevel(2)}
                                    stroke={"black"}/>
                    <Text text={"6"} fontSize={20} x={38.5} y={18}/>
                </Group>
                <Group>
                    <RegularPolygon sides={3} radius={20} x={20} y={27.5} rotation={5} fill={SetFillByLevel(1)} stroke={"black"}/>
                    <Text text={"4"} fontSize={20} x={13.5} y={15}/>
                </Group>
            </Layer>
        </Stage>
    )
}