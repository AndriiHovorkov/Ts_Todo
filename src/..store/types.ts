export const GET_LIST ='GET_LIST'
export const ADD_LIST ='ADD_LIST'
export const DELETE_LIST ='DELETE_LIST'
export const UPDATE_LIST ='UPDATE_LIST'
export const GET_LIST_BY_ID = 'GET_LIST_BY_ID';

export const ADD_TASK ='ADD_TASK'
export const DELETE_TASK ='DELETE_TASK'
export const UPDATE_TASK ='UPDATE_TASK'

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

/////
export interface NoteState {
    notes: string[]
}
export type Action = {
    type: 'ADD_NOTE',
    payload: string
}

/////

interface Task {
        userId: number | null,
        title:string
        id: number | null
        body: string
}

export interface List {
    name: string;
    id: string;
    tasks: Task[]
}


export interface Lists {
    [id: string]: List
}

interface AddListAction {
    type: typeof ADD_LIST;
    payload: List;
} 

interface GetListAction {
    type: typeof GET_LIST;
}

interface DeleteListAction {
    type: typeof DELETE_LIST;
    payload: string;
}

interface UpdateListAction {
    type: typeof UPDATE_LIST;
    payload: {
        id: string
    };
}
interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: {
        task: Task;
        list: List
    };
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: {
        task: Task;
        list: List
    };
}
interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    payload: {
        taskId:string;
        taskName:string
        taskState:boolean
        list:List
    };
}

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: {
        msg: string;
        type: string;
    }
}


export type ListsAction = AddListAction | DeleteListAction | UpdateListAction | AddTaskAction | DeleteTaskAction | UpdateTaskAction | GetListAction;

export type NotificationAction = SetNotificationAction;

export interface ListState {
    lists: Lists;
    listIdToDelete: string;
    listToEdit: List | null;
    listById: List | null;
    selectedList: List | null;
    taskToDelete: {
        task: Task;
        list: List;
    } | null;
    taskToEdit: {
        task: Task;
        list: List;
    } | null;
}

export interface NotificationState {
    message: string;
    type: string;
}