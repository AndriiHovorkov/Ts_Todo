import axios from "axios";
import { ItemState } from "../component/TodoCopmonent/TodoComponent/contextStore";
import { IForm, ITitle } from "./interface";

export const getItem = async (URL:string) : Promise<any> => {
    const { data } = await axios(URL)
    console.log(data)
    return data
}

export const addItem = async(newTodo:IForm, URL:string) => {
    newTodo = { ...newTodo};
    
    const { data } = await axios(URL, {
        method: 'POST',
        data: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    })
    return data
}

export const updateItem = async (id:number, thisTitle:ITitle ,URL:string, method:any) => {
    console.log(id,thisTitle,URL,method)
    const {title} = thisTitle
    let newTodo={
        title: title,
        id:id,
        body: 'new body',
        userId: Date.now()
    }
    
    const { data } = await axios(`${URL}/${id}`, {
        method: method,
        data: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    })
    return data
}