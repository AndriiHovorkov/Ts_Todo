import { useEffect, useState } from 'react'
import   { getItem, IForm, ITitle,addItem, Fetch } from '../../../hooks/useTodo';
import ConsumerComponent from '../ConsumerList/ConsumerComponent';
import {Formik, Form, Field} from 'formik'
import axios from 'axios';
import ContextStore, { ItemState } from './contextStore';

export const URL_POSTS ='https://jsonplaceholder.typicode.com/posts'

function TodoCopmonent() {
    const [item, setItem] = useState<ItemState>([
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

    useEffect(() => {
        getItem(setItem, URL_POSTS)
    },[])
    

    function updateItem(id:number, thisTitle:ITitle) {
        const {title} = thisTitle
        let newTodo={
            title: title,
            id:id,
            body: 'new body',
            userId: Date.now()
        }
        const newItems = item.map(item => item.id === id ? newTodo : item);
        const PUT ="PUT"

        Fetch(newTodo,id,URL_POSTS, PUT)
            .then((resp) => {setItem(newItems)})
            .catch(function (error) {
                console.log(error);
            })
    }

    
    const onSubmit = (values:any) => {
        console.log(values)
        addItem(values, URL_POSTS, setItem,item);
    }

    function deleteTodoItem(id:number) {
        axios(`${URL_POSTS}/${id}`, {
            method: 'DELETE',
        });

        const newItems = item.filter((item) => item.id !== id);

        setItem(newItems);
    }


    return(
        <ContextStore.Provider value={item}>
            <ConsumerComponent
                onDelete={deleteTodoItem}  
                updateItem={updateItem}
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
                        <button type ="submit">Save</button>
                    </Form>
                </Formik>
            </div>
        </ContextStore.Provider>
    )
}

export default TodoCopmonent;
