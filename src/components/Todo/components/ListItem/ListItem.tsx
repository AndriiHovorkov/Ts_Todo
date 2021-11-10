import { FC } from 'react';
import Button from '@mui/material/Button';
import { IProps } from '../../../../helpers/interface';
import { KeepMountedModal } from '../../../Card/components/Modal/Modal';
import { listStyles } from './listStyles';

export const  ListItem:FC<IProps> =({onDelete,item,updateItem,index}) => {
    const classes = listStyles();

    function deleteBtn() {
        onDelete(item.id);
    };

    return (
        <li className={classes.items}>
            {index + 1} - {item.title}
            <span className={classes.deleteBtn}>
                <Button onClick={deleteBtn} variant="contained" size="small">Delete</Button>
                <KeepMountedModal updateItem ={updateItem} itemID={item.id} item={item}/>
            </span>
        </li>
    );
};
