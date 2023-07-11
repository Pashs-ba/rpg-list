import {ReactNode} from "react";

export default function Card({children}: { children?: ReactNode }) {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}