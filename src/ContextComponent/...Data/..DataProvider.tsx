import React, {useState, useEffect, createContext, FC} from "react";


export interface ITodo {
    userId: number | null,
    title:string
    id: number | null
    body: string
}



// const TodoContext = createContext<ITodo>({
    
// })

// type ContextType = {
//     todos: ITodo[]
//     saveTodo: (todo: ITodo) => void
//     updateTodo: (id: number) => void
// }


// export const DataContext = createContext<ILis | null>(null);
// export const DataContext = React.createContext(null);


// const DataProvider:React.FC = ({children}) => {

//     const [items, setItems]= useState<ITodo[]>([
//         {
//             userId: 1,
//             title:'qqq',
//             id: 1,
//             body: 'qqqqqbody'
//         },
//         {
//             userId: 2,
//             title:'wwww',
//             id: 2,
//             body: 'wwwwbody'
//         }
//     ])
//     const saveItem = (item:ITodo) => {
//         const newItem:ITodo ={
//             userId: Math.random(),
//             title: item.title,
//             id: Date.now(),
//             body: item.body
//         }
//         setItems([...items,newItem])
//     }

//     // const updateTodo =(id: number) => {
//     //     items.filter((item:ITodo) => {
//     //         if(item.id === id) {
//     //             item.
//     //         }
//     //     })
//     // }

    
//     return (
//         {children}
//     )
// }

// export default DataProvider