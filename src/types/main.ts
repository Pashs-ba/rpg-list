export type User = {
    id: string,
    name:string,
    characters: string[]
    type: string
}

export type Character = {
    id: string,
    name: string,
    freeExperience: number
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