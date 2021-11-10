import { Method } from "axios";

type onDelete = (id:number) => void;
type onSubmit = (values:IForm) => void;
type updateItem =(
        id:number, 
        thisTitle:IForm,
        URL:string
    ) => void;

export interface IModal {
    updateItem:updateItem;
    itemID: number;
    item:IitemState;
};

export interface IProps {
    onDelete:onDelete;
    item:IitemState;
    updateItem:updateItem;
    index:number;
};

export interface ITitle {
    title: string;
    body: string;
};

export interface IForm {
    title:string;
    body: string;
};

export interface ICards {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

export interface ITodo {
    userId: number | null;
    title:string;
    id: number | null;
    body: string;
};

export interface Consum {
    onDelete:onDelete;
    updateItem:updateItem;
};

export interface Iadd {
    values:IForm;
    URL:string;
};

export interface Iupdate {
    id:number;
    thisTitle:ITitle;
    URL:string; 
    method:Method;
};

export interface IcardState {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

export interface cardsProps {
    cards: IcardState[];
};

export interface IitemState{
    userId: number;
    title: string;
    id: number;
    body: string;
};

export interface itemProps {
    items: IitemState[];
    onDelete:onDelete;
    updateItem:updateItem;
};

export interface formState{
    thisInput:IForm;
    onSubmitTitle:onSubmit;
};