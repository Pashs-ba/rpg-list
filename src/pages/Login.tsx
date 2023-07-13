import Card from "../components/UI/Card.tsx";
import {Form} from "../components/UI/Form.tsx";
import {ElementType} from "../components/UI/types.ts";
import {db} from "../firebase/app.ts";
import {collection, doc, getDoc} from "@firebase/firestore";
import {useNavigate} from "react-router";
import MessageBlock from "../components/messages/MessageBlock.tsx";
import {MessagesType, User} from "../types/main.ts";
import {useDispatch} from "react-redux";
import {addMessage} from "../components/messages/messageSlice.ts";

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function auth(pass_key: string) {
        getDoc(doc(collection(db, "pass_keys"), pass_key)).then(
            r => {
                const user = r.get("user")
                if (user) {
                    getDoc(user).then(v => {
                        const user: User = {
                            id: v.id,
                            name: v.get("name"),
                            characters: v.get("characters").map(el=>{return el.path}),
                            type: v.get("type")
                        }
                        localStorage.setItem("user", JSON.stringify(user))
                        navigate("/")
                    })
                } else {
                    dispatch(addMessage({text: "Неверный ключ", type: MessagesType.DANGER}))
                }
            }
        )
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
                                auth(el.code)
                            }}
                            buttonText={"Войти"}/>
                        {/*TODO Translation?*/}
                    </Card>
                </div>
            </div>
        </div>
    )
}