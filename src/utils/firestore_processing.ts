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
    const dexterity_example: BaseSpec = {
        level: 1,
        max_level: 5,
        secondary_spec: [
            {
                name: "Маскировка",
                level: 4
            },
            {
                name: "Вождение транспорта",
                level: 0
            },
            {
                name: "Навигация",
                level: 0
            },
            {
                name: "Стрельба",
                level: 3
            },
            {
                name: "Взлом",
                level: 0
            }
        ]
    }
    const strength_example: BaseSpec = {
        level: 0,
        max_level: 5,
        secondary_spec: [
            {
                name: "Борьба",
                level: 0
            },
            {
                name: "Метание",
                level: 0
            },
            {
                name: "Лазанье",
                level: 0
            },
            {
                name: "Верховая езда",
                level: 0
            }
        ]
    }
    const endurance_example: BaseSpec = {
        level: 1,
        max_level: 5,
        secondary_spec: [
            {
                name: "Выслеживание",
                level: 0
            },
            {
                name: "Болевой порог",
                level: 1
            },
            {
                name: "Дыхание",
                level: 0
            },
            {
                name: "Первая помошь",
                level: 0
            }
        ]
    }
    const intelligence_example: BaseSpec = {
        level: 6,
        additional_buff: 1,
        secondary_spec:[
            {
                name: "Внимание",
                level: 0
            },
            {
                name: "Мана",
                level: 5
            },
            {
                name: "Алхимия",
                level: 2,
                additional_buff: 1
            },
            {
                name: "Создание",
                level: 1
            },
            {
                name: "Ремонт",
                level: 0
            }
        ]
    }
    const temperament_example: BaseSpec = {
        level: 0,
        secondary_spec:[
            {
                name: "Решительность",
                level: 1
            },
            {
                name: "Сила воли",
                level: 0
            },
            {
                name: "Запугивание",
                level: 0
            },
            {
                name: "Провокация",
                level: 0
            }
        ]
    }
    const charisma_example: BaseSpec = {
        level: 5,
        secondary_spec:[
            {
                name: "Убеждение",
                level: 2
            },
            {
                name: "Эрудиция",
                level: 1
            },
            {
                name: "Игры",
                level: 0
            },
            {
                name: "Соблазнение",
                level: 0
            }
        ]
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
            dexterity: dexterity_example,
            strength: strength_example,
            endurance: endurance_example,
            intelligence: intelligence_example,
            temperament: temperament_example,
            charisma: charisma_example
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