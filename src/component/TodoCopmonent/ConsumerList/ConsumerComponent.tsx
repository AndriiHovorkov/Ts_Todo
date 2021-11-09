import { FC, useContext } from "react"
import { Consum } from "../../../Helper/interface"
import ContextStore,{ ItemState } from "../TodoComponent/contextStore"
import './ConsumerComponent.css'
import { ListItem } from "./ListItem"

export const ConsumerComponent: FC<Consum> = ({onDelete,updateItem}) => {

    const items = useContext<ItemState>(ContextStore)

    return (
        <div>
            <div className='container'>
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
    )
}