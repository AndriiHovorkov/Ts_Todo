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

export interface IAdd {
    values:IForm;
    URL:string;
}

export interface IUpdate {
    id:number;
    newTitle:ITitle;
    URL:string;
    method:Method;
}

export interface ICardsProps {
    cards: ICards[];
}

export interface IItemProps {
    items: ITodo[];
    onDelete:(id:number) => void ;
    updateItem:(
      id: number,
      thisTitle: IForm,
      URL: string
    ) => void;
}

export interface IFormState{
    input:IForm;
    onSubmitTitle:(values:IForm) => void ;
}
