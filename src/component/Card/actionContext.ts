import {createContext} from "react";

export interface ICards {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}
const cardState = [
    {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/...",
        download_url: "https://picsum.photos/..."
    }
]

export type CardState = typeof cardState;

const context = createContext<typeof cardState>(cardState)

export default context