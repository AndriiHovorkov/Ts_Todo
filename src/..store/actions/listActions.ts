import { ADD_LIST, GET_LIST, GET_LIST_BY_ID, List,  ListsAction } from "../types";

export const addList = (list: List): ListsAction => {
    return {
        type: ADD_LIST,
        payload: list
    }
}

export const getList = ():ListsAction => {
    return {
        type: GET_LIST
    }
}
// export const getListById =(id:string): ListsAction => {
//     return{
//         type: typeof GET_LIST_BY_ID;
    
//     }
// }