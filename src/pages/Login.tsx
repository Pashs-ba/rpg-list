import Card from "../components/Card.tsx";
import {Form} from "../components/Form.tsx";
import {ElementType} from "../components/types.ts";

export default function Login() {
    return (
        <div className={"full-height container"}>
            <div className="row h-100 justify-content-center align-items-center">
                <Card>
                    <h3>Авторизация</h3>
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
                            console.log(el)
                        }}
                        buttonText={"Войти"}/>
                    {/*TODO Translation?*/}
                </Card>
            </div>
        </div>
    )
}