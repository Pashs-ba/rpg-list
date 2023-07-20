export default function BaseDebuffBlock({value, name}: { value: number, name: string }) {
    return (
        <h3>
            {name}:
            {
                value === 0 ?
                    <span className={"text-success"}> OK</span> :
                    <span className={"text-danger"}> {value}</span>
            }
        </h3>
    )
}