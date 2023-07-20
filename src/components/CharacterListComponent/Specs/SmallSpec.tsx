import {Layer, RegularPolygon, Stage} from "react-konva";
import Rhombus from "./Rhombus.tsx";


export default function BigSpecProgress() {

    return (
        <Stage width={150} height={55}>
            <Layer>
                <RegularPolygon sides={5} radius={20} x={120} y={18.5} rotation={30} fill={"white"} stroke={"black"}/>
                <Rhombus width={50} height={35.5} x={90} y={25} rotation={-40} fill={"white"} stroke={"black"}/>
                <Rhombus width={47} height={35.5} x={67} y={17.5} rotation={-40} fill={"white"} stroke={"black"}/>
                <RegularPolygon sides={4} radius={20} x={45} y={27.5} rotation={42} fill={"white"}
                                stroke={"black"}/>
                <RegularPolygon sides={3} radius={20} x={20} y={27.5} rotation={5} fill={"white"} stroke={"black"}/>
            </Layer>
        </Stage>
    )
}