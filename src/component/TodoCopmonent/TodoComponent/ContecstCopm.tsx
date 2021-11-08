import { FC, useEffect, useState } from 'react'
import { getItem, addItem, updateItem } from '../../../Helper/api';
import ConsumerComponent from '../ConsumerList/ConsumerComponent';
import {Formik, Form, Field} from 'formik'
import axios from 'axios';
import ContextStore, { ItemState } from './contextStore';
import { IForm, ITitle } from '../../../Helper/interface';
import { URL_POSTS } from '../../../Helper/url';
// import { TextField } from '@mui/material';



export const TodoComponent: FC = () => {
    const [items, setItems] = useState<ItemState>([
        {
            userId: 1,
            title:'string',
            id: 1,
            body: 'string'
        }
    ])

    const [thisInput] = useState<IForm>({
        title:'',
        body: '',
    })

    const getState = async () => {
        const arrImage = await getItem(URL_POSTS)
        setItems(arrImage)
    }

    useEffect(() => {
        getState()
    },[])
    
    const update = async (id:number, thisTitle:ITitle ,URL:any) => {
        const PUT ="PUT"
        const newTodo = await updateItem(id, thisTitle ,URL, PUT)
        const newItems:any = items.map(item => item.id === id ? newTodo : item);
        setItems(newItems)
    }

    
    const onSubmit = async (values:any) => {
        console.log(values)
        const newTodo = await addItem(values, URL_POSTS, setItems, items);
        setItems([...items,newTodo])
    }

    const deleteTodoItem = async (id:number) => {
        await axios(`${URL_POSTS}/${id}`, {
            method: 'DELETE',
        });
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    return(
        <ContextStore.Provider value={items}>
            <ConsumerComponent
                onDelete={deleteTodoItem}  
                updateItem={update}
            />
            <div className='formBlock'>
                <Formik 
                    initialValues={thisInput} 
                    onSubmit={(values, actions) => {
                        onSubmit(values)
                        actions.resetForm();
                    }}
                >
                    <Form className='form' >
                        <Field type="text" name='title' placeholder='title'/> 
                        <Field type="text" name='body' placeholder='body'/>
                        {/* <TextField 
                            label="title" 
                            type='text' 
                            placeholder='title' 
                            name='title'    
                        />
                        <TextField 
                            label="body" 
                            type='text' 
                            placeholder='body' 
                            name='body'    
                        /> */}
                        <button type ="submit">Save</button>
                    </Form>
                </Formik>
            </div>
        </ContextStore.Provider>
    )
}

export default TodoComponent;
