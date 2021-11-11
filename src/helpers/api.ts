import axios from 'axios';
import {
  Iadd, ICards, ITodo, Iupdate,
} from './interface';

export const getItems = async (URL:string): Promise<ICards[] | ITodo[]> => {
  const { data } = await axios(URL);
  return data;
};

export const addItem = async ({ values, URL }:Iadd): Promise<void> => {
  const thisTodo = { ...values };

  const { data } = await axios(URL, {
    method: 'POST',
    data: JSON.stringify(thisTodo),
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};

export const updateItem = async ({
  id, thisTitle, URL, method,
}:Iupdate): Promise<void> => {
  const { title } = thisTitle;
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
