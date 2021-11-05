import {createContext} from "react";

export interface ICards {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
const cardState = [
    {
        albumId: 0,
        id: 0,
        title: 'title',
        url: '',
        thumbnailUrl: '',
    }
]

export type CardState = typeof cardState;

const context = createContext<typeof cardState>(cardState)

export default context