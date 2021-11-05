import React, { FC, useState } from 'react'
import { IProps, ITitle } from '../../hooks/useTodo';

// export interface IProps {
//     onDelete:any,
//     item:any
//     updateItem:any
// }
// export interface ITitle {
//     title: string
// }

export const  ListItem:FC<IProps> =({onDelete,item,updateItem}) => {
    const [thisTitle, setTitle] = useState<ITitle>({
        title:'',
    })


    function deleteBtn() {
        onDelete(item.id);
    }
    function changeHendler(e:any) {
        setTitle({
            ...thisTitle,
            [e.target.name]: e.target.value,
        });
    }
    function update() {
        updateItem(item.id,thisTitle)
        console.log(thisTitle)
        setTitle({title:''})
    }
    return (
        <li className='items'>
            {item.title}
            <span className='deleteBtn'>
                <button  onClick={deleteBtn}>Delete</button>
                <button  onClick={update}>Update</button>:
            </span>
            <div >
                <input
                    type='text' 
                    placeholder='Update title' 
                    name='title' 
                    onChange={changeHendler}
                    value={thisTitle.title}
                />
            </div>
        </li>
    )
}
