import {createContext} from "react";

export interface ITodo {
    userId: number | null,
    title:string
    id: number | null
    body: string
}

const initState = [{
    userId: 0,
    title:'string',
    id: 0,
    body: 'string'
}]

export type ItemState = typeof initState;

const context = createContext<typeof initState>(initState)

export default context

