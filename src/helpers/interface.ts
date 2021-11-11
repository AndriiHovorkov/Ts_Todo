import { Method } from 'axios';

export interface ITodo {
  userId: number ;
  title:string;
  id: number ;
  body: string;
}
export interface IModal {
    updateItem: (
      id: number,
      thisTitle: IForm,
      URL: string
    ) => void;
    itemID: number;
    items: ITodo;
}

export interface IProps {
    onDelete: (id:number) => void;
    items: ITodo;
    updateItem: (
      id: number,
      thisTitle: IForm,
      URL: string
    ) => void;
    index: number;
}

export interface ITitle {
    title: string;
    body: string;
}

export interface IForm {
    title:string;
    body: string;
}

export interface ICards {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface IConsum {
    onDelete:(id:number) => void ;
    updateItem:(
      id: number,
      thisTitle: IForm,
      URL: string
    ) => void;
}

export interface Iadd {
    values:IForm;
    URL:string;
}

export interface Iupdate {
    id:number;
    thisTitle:ITitle;
    URL:string;
    method:Method;
}

export interface IcardsProps {
    cards: ICards[];
}

export interface IitemProps {
    items: ITodo[];
    onDelete:(id:number) => void ;
    updateItem:(
      id: number,
      thisTitle: IForm,
      URL: string
    ) => void;
}

export interface IformState{
    thisInput:IForm;
    onSubmitTitle:(values:IForm) => void ;
}
