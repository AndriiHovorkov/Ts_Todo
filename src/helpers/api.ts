import axios from 'axios';
import {
  IAdd, IUpdate,
} from './interface';

export const getItems = async<T>(URL: string): Promise<T | null> => {
  const { data } = await axios(URL);
  return data;
};

export const addItem = async ({ values, URL }: IAdd): Promise<void> => {
  const newTodo = { ...values };

  const { data } = await axios(URL, {
    method: 'POST',
    data: JSON.stringify(newTodo),
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};

export const updateItem = async ({
  id, newTitle, URL, method,
}: IUpdate): Promise<void> => {
  const { title } = newTitle;
  const newTodo = {
    title,
    id,
    body: 'new body',
    userId: Date.now(),
  };

  const { data } = await axios(`${URL}/${id}`, {
    method,
    data: JSON.stringify(newTodo),
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};
