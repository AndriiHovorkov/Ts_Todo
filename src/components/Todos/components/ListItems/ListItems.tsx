import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { IProps } from '../../../../helpers/interface';
import { UpdateModal } from '../../../Cards/components/UpdateModal/UpdateModal';
import { listStyles } from './listStyles';

export const ListItems:FC<IProps> = ({
  onDelete, items, updateItem, index,
}) => {
  const classes = listStyles();

  const deleteBtn = (): void => {
    onDelete(items.id);
  };

  return (
    <li className={classes.items}>
      {index + 1}
      {' '}
      -
      {' '}
      {items.title}
      <span className={classes.deleteBtn}>
        <Button onClick={deleteBtn} variant="contained" size="small">Delete</Button>
        <UpdateModal updateItem={updateItem} itemID={items.id} items={items} />
      </span>
    </li>
  );
};
