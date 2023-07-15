import {Character, Errors, User} from "../types/main.ts";
import {collection, doc, getDoc} from "@firebase/firestore";
import {db} from "../firebase/app.ts";


export function UpdateUser() {
    return new Promise<User>((resolve) => {
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
            resolve(user)
        })
    })

}

export function GetSingleCharacterById(character_id: string) {
    return new Promise<Character>((resolve) => {
        getDoc(doc(collection(db, "characters"), character_id)).then((res) => {
            const character = {
                id: res.id,
                ...res.data()
            }
            resolve(character as Character)
        })
    })
}

export function GetSingleCharacterByPath(character_path: string) {
    return new Promise<Character>((resolve,) => {
        getDoc(doc(db, character_path)).then((res) => {
            const character = {
                id: res.id,
                ...res.data()
            }
            resolve(character as Character)
        })
    })
}

export function Auth(pass_key: string) {
    return new Promise<User>((resolve, reject) => {
        getDoc(doc(collection(db, "pass_keys"), pass_key)).then(
            r => {
                const user = r.get("user")
                if (user) {
                    getDoc(user).then(v => {
                        const user: User = {
                            id: v.id,
                            name: v.get("name"),
                            characters: v.get("characters").map((el: any) => {
                                return el.path
                            }),
                            type: v.get("type")
                        }
                        resolve(user)
                    })
                } else {
                    reject(Errors.BAD_AUTH)
                }
            }
        )
    })

}