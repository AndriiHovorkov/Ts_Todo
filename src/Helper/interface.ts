export interface IModal {
    updateItem:any
    itemID: number
    item:any
}

export interface IProps {
    onDelete:any,
    item:any
    updateItem:any
    index:number
}

export interface ITitle {
    title: string
}

export interface IForm {
    title:string
    body: string
}

export interface ICards {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}

export interface ITodo {
    userId: number | null,
    title:string
    id: number | null
    body: string
}

export interface Consum {
    onDelete:any
    updateItem:any
}