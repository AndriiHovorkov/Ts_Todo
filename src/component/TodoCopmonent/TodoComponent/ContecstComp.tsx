import { FC, useEffect, useState } from 'react'
import { getItem, addItem, updateItem } from '../../../helper/api';
import {useFormik} from 'formik'
import axios from 'axios';
import ContextStore, { ItemState } from './contextStore';
import { IForm, ITitle } from '../../../helper/interface';
import { URL_POSTS } from '../../../helper/url';
import { ConsumerComponent } from '../ConsumerList/ConsumerComponent';
import { Button, TextField } from '@mui/material';
import './ContecstComp.css'
import { todoStyles } from './TodoStyles';

export const TodoComponent: FC = () => {
    const classes = todoStyles()

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
    
    const onSubmitTitle = async (values:any) => {
        const newTodo = await addItem(values, URL_POSTS);
        setItems([...items,newTodo])
    }

    const deleteTodoItem = async (id:number) => {
        await axios(`${URL_POSTS}/${id}`, {
            method: 'DELETE',
        });
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    const FormikMU = () => {
        const formik = useFormik({
            initialValues:thisInput ,
            onSubmit: (values, actions) => {
                onSubmitTitle(values)
                actions.resetForm();
            },
        });

        return (
            <div className={classes.formBlock}>
                <form className={classes.form} onSubmit={formik.handleSubmit} >
                    <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Add new title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        rows={4}
                        
                    />
                    <Button type ="submit" variant="contained" size="large" className="Add_Button">Save</Button>
                </form>
            </div>
        )
    }

    return(
        <ContextStore.Provider value={items}>
            <ConsumerComponent
                onDelete={deleteTodoItem}  
                updateItem={update}
            />
            <FormikMU/>
        </ContextStore.Provider>
    )
}