import {Shape} from "react-konva";

export default function Rhombus({width, height, x, y, rotation, fill, stroke}: {
    width: number,
    height: number,
    x: number,
    y: number,
    rotation: number,
    fill: string,
    stroke: string
}) {
    function CreateRhombus(context: any, shape: any){
        context.beginPath()
        context.moveTo(0, shape.height()/2)
        context.lineTo(shape.width()/2, 0)
        context.lineTo(shape.width(), shape.height()/2)
        context.lineTo(shape.width()/2, shape.height())
        context.lineTo(0, shape.height()/2)
        context.closePath()
        context.fillStrokeShape(shape);
    }
    return (
        <Shape x={x}
               y={y}
               width={width}
               height={height}
               fill={fill}
               stroke={stroke}
               offsetX={width/2}
               offsetY={height/2}
               rotation={rotation}
               sceneFunc={(context, shape) => {
                   CreateRhombus(context, shape)
               }}
        />
    )
}