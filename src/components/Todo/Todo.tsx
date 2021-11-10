import { FC, useEffect, useState } from 'react';
import { getItem, addItem, updateItem } from '../../helpers/api';
import axios from 'axios';
import { IForm, IitemState, ITitle } from '../../helpers/interface';
import { URL_POSTS } from '../../helpers/constants';
import { TodoList } from './components/TodoList/TodoList';
import './todo.css';
import { FormikMU } from './components/FormikMU/FormikMU';

export const TodoComponent: FC = () => {
    const URL = URL_POSTS;

    const [items, setItems] = useState<IitemState[]>([]);

    const [thisInput] = useState<IForm>({
        title:'',
        body: '',
    });

    useEffect(() => {
        const getState = async () => {
            const arrImage = await getItem(URL);
            setItems(arrImage);
        }
        getState();
    },[URL]);
    
    const update = async (id:number, thisTitle:ITitle ,URL:any) => {
        const method ="PUT";
        const newTodo = await updateItem({id, thisTitle ,URL, method});
        const newItems:any = items.map(item => item.id === id ? newTodo : item);
        setItems(newItems);
    };
    
    const onSubmitTitle = async (values:IForm) =>  {
        const newTodo = await addItem({values, URL});
        setItems([...items,newTodo]);
    };

    const deleteTodoItem = async (id:number) => {
        await axios(`${URL}/${id}`, {
            method: 'DELETE',
        });
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    return(
        <div>
            <TodoList
                items={items}
                onDelete={deleteTodoItem}  
                updateItem={update}
            />
            <FormikMU 
                thisInput={thisInput}
                onSubmitTitle={onSubmitTitle}
            />
        </div>
    );
};