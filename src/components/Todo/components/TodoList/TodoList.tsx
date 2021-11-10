import { FC } from "react";
import { ListItem } from "../ListItem/ListItem";
import {itemProps } from "../../../../helpers/interface";
import { todoListStyle } from "./todoListStyle";

export const TodoList: FC<itemProps> = ({onDelete, updateItem, items}) => {
    const classes = todoListStyle();
    return (
        <div>
            <div className={classes.container}>
                {items.map((item,index) => (
                    <ListItem
                        key={item.id}
                        onDelete={onDelete}
                        item={item}
                        updateItem={updateItem}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};