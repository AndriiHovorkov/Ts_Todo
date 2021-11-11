import React, { FC } from 'react';
import { ListItems } from '../ListItems/ListItems';
import { IitemProps } from '../../../../helpers/interface';
import { todoListStyle } from './todosListStyle';

export const TodosList: FC<IitemProps> = ({ onDelete, updateItem, items }) => {
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
