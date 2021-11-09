import {createContext} from "react";

const initState = [{
    userId: 0,
    title:'string',
    id: 0,
    body: 'string'
}]

export type ItemState = typeof initState;
const context = createContext<typeof initState>(initState)
export default context