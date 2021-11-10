import axios from "axios";
import {Iadd, Iupdate } from "./interface";

export const getItem = async (URL:string)=> {
    const { data } = await axios(URL);
    return data;
};

export const addItem = async({values, URL}:Iadd) => {
    const thisTodo = { ...values};
    
    const { data } = await axios(URL, {
        method: 'POST',
        data: JSON.stringify(thisTodo),
        headers: { 'Content-Type': 'application/json' },
    });
    return data;
};

export const updateItem = async ({id, thisTitle,URL, method}:Iupdate) => {
    const {title} = thisTitle;
    const newTodo={
        title: title,
        id:id,
        body: 'new body',
        userId: Date.now()
    };
    
    const { data } = await axios(`${URL}/${id}`, {
        method: method,
        data: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    });
    return data;
};