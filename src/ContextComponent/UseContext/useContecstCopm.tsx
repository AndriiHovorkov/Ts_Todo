// import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import   { getItem, IForm, ITitle,addItem, Fetch } from '../../hooks/useTodo';
import ConsumerComponent from '../ConsumerList/ConsumerComponent';
import ContextStore,{ItemState} from './contextStore'
import {Formik, Form, Field} from 'formik'

export const URL_POSTS ='https://jsonplaceholder.typicode.com/posts'

function UseContecstCopm() {
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
        const PATCH ="PATCH"

        Fetch(newTodo,id,URL_POSTS, PATCH)
            .then((resp) => resp.json())
            .then((data) => setItem(newItems));
    }

    
    const onSubmit = (values:any) => {
        console.log(values)
        addItem(values, URL_POSTS, setItem,item);
    }

    function deleteTodoItem(id:number) {
        fetch(URL_POSTS+id, {
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

export default UseContecstCopm;
