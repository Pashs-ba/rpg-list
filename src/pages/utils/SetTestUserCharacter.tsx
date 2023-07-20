import {SetTestCharacter} from "../../utils/firestore_processing.ts";

export default function SetTestUserCharacter() {
    function Set() {
        SetTestCharacter().then(() => console.log("Yep"))
    }

    return (
        <div>
            <button className={"btn btn-primary"} onClick={Set}>Set Test User Character</button>
        </div>
    );
}