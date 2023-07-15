export default function BaseSpecElement({value, name}: { value: number, name: string }) {
    return (
        <div className={`col`}>
            <h1 className={"text-center"}>{value}</h1>
            <p className={"text-center"}>{name}</p>
        </div>
    )
}