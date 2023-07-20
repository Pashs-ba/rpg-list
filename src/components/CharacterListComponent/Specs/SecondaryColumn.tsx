import SmallSpec from "./SmallSpec.tsx";
import {BaseSpec} from "../../../types/main.ts";

export default function SecondaryColumn({base_specs}: { base_specs: BaseSpec }) {
    return (
        <div className={"d-fex flex-column"}>
            {
                base_specs.secondary_spec ? (
                    base_specs.secondary_spec.map((spec, index) => {
                        return (
                            <div key={index} className={"d-flex"}>
                                <p className={"me-auto text-start"}>
                                    {spec.name}
                                    {
                                        spec.additional_buff ?
                                            <b>
                                                {spec.additional_buff > 0 ? ` +${spec.additional_buff}` : spec.additional_buff}
                                            </b>
                                            : null
                                    }
                                </p>
                                <SmallSpec secondary_specs={spec}/>
                            </div>)
                    })
                ) : null
            }
        </div>
    )
}