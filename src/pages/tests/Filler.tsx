import MessageBlock from "../../components/messages/MessageBlock.tsx";
import {Link} from "react-router-dom";

export default function Filler() {
    return (
        <div>
            <MessageBlock/>
            <h1>Filler</h1>
            <div className="mb-3">
                <Link to={"/test/message_block"}>Test messages</Link>
            </div>
        </div>
    )
}