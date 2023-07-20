export default function ListedValues({values, title}: { values: string[], title: string }) {
    return (
        <>
            <h3>{title}</h3>
            {
                values.length > 0 ?
                    (
                        <ul className="list-group">
                            {values.map((effect) => {
                                return <li key={effect} className={"list-group-item"}>{effect}</li>
                            })}
                        </ul>
                    ) : <p className={"text-secondary"}>Нет...</p>
            }
        </>
    )
}