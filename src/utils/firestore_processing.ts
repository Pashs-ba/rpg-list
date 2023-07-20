import {BaseSpec, Character, Errors, User} from "../types/main.ts";
import {collection, doc, getDoc, setDoc} from "@firebase/firestore";
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

export function SetTestCharacter() {
    const character_id = "LsLt7u8qjtQUOSxXED0R"
    const base_spec_example: BaseSpec = {
        level: 1,
        max_level: 5
    }
    const base_spec_example2: BaseSpec = {
        level: 4,
        additional_buff: 1
    }
    const character = {
        name: "Lucky Guy",
        freeExperience: 239,
        race: "Вида'аль",
        characterSpec: {
            speed: 1,
            quirkiness: 1,
            resilience: 1,
            compliance: 1,
            receptivity: 1,
        },
        effects: [
            "Жажда золота"
        ],
        injuries: [],
        courage: 0,
        health: -1,
        fatigue: 0,
        mainAbilities: {
            dexterity: base_spec_example,
            strength: base_spec_example,
            endurance: base_spec_example,
            intelligence: base_spec_example2,
            temperament: base_spec_example,
            charisma: base_spec_example2
        }
    }
    return new Promise<Character>((resolve) => {
        setDoc(doc(collection(db, "characters"), character_id), {
            ...character
        }).then(() => {
            resolve({...character, id: character_id} as Character)
        })
    })
}