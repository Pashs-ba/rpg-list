export type User = {
    id: string,
    name:string,
    characters: string[]
    type: string
}

export type CharacterSpec = {
    speed: number
    quirkiness: number
    resilience: number
    compliance: number
    receptivity: number
}

export type SecondarySpec = {
    name: string
    level: number
    courage_buff?: number
    max_level?: number
    additional_buff?: number
}

export type BaseSpec = {
    level: number
    courage_buff?: number
    max_level?: number
    additional_buff?: number
    secondary_spec?: SecondarySpec[]
}



export type MainAbilities = {
    dexterity: BaseSpec
    strength: BaseSpec
    endurance: BaseSpec
    intelligence: BaseSpec
    temperament: BaseSpec
    charisma: BaseSpec
}
export enum MainAbilitiesType {
    DEXTERITY = "DEXTERITY",
    STRENGTH = "STRENGTH",
    ENDURANCE = "ENDURANCE",
    INTELLIGENCE = "INTELLIGENCE",
    TEMPERAMENT = "TEMPERAMENT",
    CHARISMA = "CHARISMA"
}

export type Character = {
    id: string,
    name: string,
    freeExperience: number
    race: string
    characterSpec: CharacterSpec
    effects: string[]
    injuries: string[]
    courage: number
    health: number
    fatigue: number
    mainAbilities: MainAbilities
}



export enum MessagesType {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
    DANGER = "danger"
}
export type Message = {
    text: string
    constant?: boolean
    type?: MessagesType
    need_to_delete?: boolean
    debug_fix?: boolean // https://bit.ly/3pDRHjv
}

export enum Errors{
    BAD_AUTH
}