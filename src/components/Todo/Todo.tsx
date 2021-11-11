import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { getItems, addItem, updateItem } from '../../helpers/api';
import {
  IForm, ITitle, ITodo,
} from '../../helpers/interface';
import { URL_POSTS } from '../../helpers/constants';
import { TodosList } from './components/TodosList/TodosList';
import './todo.css';
import { FormikMaterial } from './components/FormikMaterial/FormikMaterial';

export const Todo: FC = () => {
  const [items, setItems] = useState<ITodo[]>([
    {
      userId: 0,
      title: '',
      id: 0,
      body: '',
    },
  ]);

  const [thisInput] = useState<IForm>({
    title: '',
    body: '',
  });

  useEffect(() => {
    const getState = async (): Promise<void> => {
      const arrImage = await getItems(URL_POSTS);
      setItems(arrImage as ITodo[]);
    };
    getState();
  }, []);

  const update = async (id:number, thisTitle:ITitle, URL:string): Promise<void> => {
    const method = 'PUT';
    const newTodo = await updateItem({
      id, thisTitle, URL, method,
    });
    const newItems = items.map((item) => (item.id === id ? newTodo : item));
    setItems(newItems as ITodo[]);
  };

  const onSubmitTitle = async (values:IForm): Promise<void> => {
    const URL = URL_POSTS;
    const newTodo = await addItem({ values, URL });
    setItems([...items, newTodo] as ITodo[]);
  };

  const deleteTodoItem = async (id:number): Promise<void> => {
    await axios(`${URL_POSTS}/${id}`, {
      method: 'DELETE',
    });
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <TodosList
        items={items}
        onDelete={deleteTodoItem}
        updateItem={update}
      />
      <FormikMaterial
        thisInput={thisInput}
        onSubmitTitle={onSubmitTitle}
      />
    </div>
  );
};
