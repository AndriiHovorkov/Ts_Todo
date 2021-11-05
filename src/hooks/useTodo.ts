import axios, { AxiosResponse } from "axios";
import { ItemState } from "../ContextComponent/UseContext/contextStore";
    
export const getItem = (setState:any, URL:string) => {
    axios.get(URL)
        .then((response:AxiosResponse<any>) => {
            setState(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
}

export interface IProps {
    onDelete:any,
    item:any
    updateItem:any
}
export interface ITitle {
    title: string
}

export interface IForm {
    title:string
    body: string
}

export function Fetch(newTodo:IForm,id:number | null,URL:string,method:string) {
    return (
        fetch(`${URL}/${id}`, {
            method: method,
            body: JSON.stringify(newTodo),
            headers: { 'Content-Type': 'application/json' },
        })
    )
}

export function addItem(newTodo:IForm, URL:string, setState:any,item:ItemState) {
    newTodo = { ...newTodo};

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((resp) => resp.json())
        .then((data) => setState([...item, data]));
}





