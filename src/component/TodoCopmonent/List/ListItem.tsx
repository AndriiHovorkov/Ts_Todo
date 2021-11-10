import React, { FC } from 'react'
import Button from '@mui/material/Button';
import { IProps } from '../../../helper/interface';
import { ListStyles } from './ListStyle';
import { KeepMountedModal } from '../Modal/Modal';

export const  ListItem:FC<IProps> =({onDelete,item,updateItem,index}) => {
    const classes = ListStyles()

    function deleteBtn() {
        onDelete(item.id);
    }

    return (
        <li className={classes.items}>
            {index + 1} - {item.title}
            <span className={classes.deleteBtn}>
                <Button onClick={deleteBtn} variant="contained" size="small">Delete</Button>
                <KeepMountedModal updateItem ={updateItem} itemID={item.id} item={item}/>
            </span>
        </li>
    )
}