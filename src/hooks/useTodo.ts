import axios, { AxiosResponse } from "axios";
import { ItemState } from "../component/TodoCopmonent/TodoCopmonent/contextStore";
// import { ItemState } from "../Component/TodoCopmonent/TodoContecst/contextStore";
    
export const getItem = (setState:any, URL:string) => {
    axios.get(URL)
        .then((response:AxiosResponse<any>) => {
            setState(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
}

export interface IModal {
    updateItem:any
    itemID: number
}

export interface IProps {
    onDelete:any,
    item:any
    updateItem:any
    index:number
}
export interface ITitle {
    title: string
}

export interface IForm {
    title:string
    body: string
}

export function Fetch(newTodo:IForm,id:number | null,URL:string,method:string | any) {
    return (
        axios(`${URL}/${id}`, {
            method: method,
            data: JSON.stringify(newTodo),
            headers: { 'Content-Type': 'application/json' },
        })
    )
}

export function addItem(newTodo:IForm, URL:string, setState:any,item:ItemState) {
    newTodo = { ...newTodo};
    
    axios(URL, {
        method: 'POST',
        data: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((resp) => {setState([...item, resp.data])})
        .catch(function (error) {
            console.log(error);
        })
}





