export type User = {
    id: string,
    name:string,
    characters: string[]
    type: string
}

export type BaseSpec = {
    speed: number
    quirkiness: number
    resilience: number
    compliance: number
    receptivity: number
}

export type Character = {
    id: string,
    name: string,
    freeExperience: number
    race: string
    baseSpec: BaseSpec
    effects: string[]
    injuries: string[]
    courage: number
    health: number
    fatigue: number
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