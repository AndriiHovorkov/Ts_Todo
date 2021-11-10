import { FC, useContext } from "react"
import ContextStore,{ ItemState } from "../TodoComponent/contextStore"
import { ListItem } from "../List/ListItem"
import { Consum } from "../../../helper/interface"
import { consStyles } from "./ConsumStypel"

export const ConsumerComponent: FC<Consum> = ({onDelete,updateItem}) => {
    const classes = consStyles();

    const items = useContext<ItemState>(ContextStore)

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
    )
}