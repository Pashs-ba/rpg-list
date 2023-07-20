import BigSpecProgress from "./BigSpecProgress.tsx";
import {BaseSpec} from "../../../types/main.ts";

export default function SpecColumn({base_specs, label}: { base_specs: BaseSpec, label: string }) {
    return (
        <div className="col-lg-2 text-center">
            <h4>{label}</h4>
            <div className="d-flex align-items-center justify-content-center">
                <h4 className={"fw-light"}>
                    {base_specs.additional_buff?(<i className="bi bi-arrow-down"></i>):null}
                    {base_specs.additional_buff && base_specs.additional_buff > 0 ? `+${base_specs.additional_buff}` : base_specs.additional_buff}
                </h4>
                <BigSpecProgress base_specs={base_specs}/>
            </div>

        </div>
    )
}