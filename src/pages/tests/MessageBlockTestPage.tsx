import MessageBlock from "../../components/messages/MessageBlock.tsx";
import {Form} from "../../components/UI/Form.tsx";
import {ElementType} from "../../components/UI/types.ts";
import {addMessage} from "../../components/messages/messageSlice.ts";
import {MessagesType} from "../../types/main.ts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function MessageBLockTestPage() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <MessageBlock/>
                <Form
                    elements={[
                        {
                            name: "add_message",
                            label: "Add Message",
                            type: ElementType.INPUT,
                            settings: {}
                        },
                        {
                            name: "constant",
                            label: "Constant",
                            type: ElementType.CHECKBOX,
                            settings: {}
                        }
                    ]}
                    onSubmit={(el) => {
                        dispatch(addMessage({
                            text: el["add_message"],
                            type: MessagesType.DANGER,
                            constant: el["constant"]
                        }))
                    }}
                />
                <div className="mb-3">
                    <Link to={"/test/filler"}>Filler</Link>
                </div>
            </div>
        </>
    )
}