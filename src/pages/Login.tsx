import Card from "../components/UI/Card.tsx";
import {Form} from "../components/UI/Form.tsx";
import {ElementType} from "../components/UI/types.ts";
import {useNavigate} from "react-router";
import MessageBlock from "../components/messages/MessageBlock.tsx";
import {Errors, MessagesType} from "../types/main.ts";
import {useDispatch} from "react-redux";
import {addMessage} from "../components/messages/messageSlice.ts";
import {Auth} from "../utils/firestore_processing.ts";

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function auth_processing(pass_key: string) {
        Auth(pass_key).then((user) => {
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/")
        }).catch(reason => {
            if (reason == Errors.BAD_AUTH) {
                dispatch(addMessage({text: "Неверный ключ", type: MessagesType.DANGER}))
            }
        })
    }

    return (
        <div className={"full-height container"}>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-4">
                    <Card>
                        <h3>Авторизация</h3>
                        <MessageBlock/>
                        <Form
                            elements={[
                                {
                                    label: "Код",
                                    name: "code",
                                    type: ElementType.INPUT,
                                    settings: {}
                                }
                            ]}
                            onSubmit={(el) => {
                                auth_processing(el.code)
                            }}
                            buttonText={"Войти"}/>
                        {/*TODO Translation?*/}
                    </Card>
                </div>
            </div>
        </div>
    )
}