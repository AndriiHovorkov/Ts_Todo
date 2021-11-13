import React, { FC } from 'react';
import { ListItems } from '../ListItems/ListItems';
import { IItemProps } from '../../../../helpers/interface';
import { todoListStyle } from './todosListStyle';

export const TodosList: FC<IItemProps> = ({ onDelete, updateItem, items }) => {
  const classes = todoListStyle();
  return (
    <div className={classes.container}>
      {items.map((item, index) => (
        <ListItems
          key={item.id}
          onDelete={onDelete}
          items={item}
          updateItem={updateItem}
          index={index}
        />
      ))}
    </div>
  );
};
