import {User} from "../types/main.ts";
import {collection, doc, getDoc} from "@firebase/firestore";
import {db} from "../firebase/app.ts";

export function UpdateUser(afterUpdate?: () => void) {
    const user = JSON.parse(localStorage.getItem("user") as string) as User
    getDoc(doc(collection(db, "users"), user.id)).then((res) => {
        const user: User = {
            id: res.id,
            name: res.get("name"),
            characters: res.get("characters").map((el: any) => {
                return el.path
            }),
            type: res.get("type")
        }
        localStorage.setItem("user", JSON.stringify(user))
        afterUpdate?.()
    })
}