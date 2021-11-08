import React, { FC } from 'react'
import { KeepMountedModal } from './Modal';
import Button from '@mui/material/Button';
import { IProps } from '../../../Helper/interface';

export const  ListItem:FC<IProps> =({onDelete,item,updateItem,index}) => {

    function deleteBtn() {
        onDelete(item.id);
    }

    return (
        <li className='items'>
            {index + 1} - {item.title}
            <span className='deleteBtn'>
                <Button onClick={deleteBtn} variant="contained" size="small">Delete</Button>
                <KeepMountedModal updateItem ={updateItem} itemID={item.id} item={item}/>
            </span>
        </li>
    )
}