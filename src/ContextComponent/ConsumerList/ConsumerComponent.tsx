import { useContext } from "react"
import ContextStore,{ ItemState } from "../UseContext/contextStore"
import './ConsumerComponent.css'
import { ListItem } from "./ListItem"

function ConsumerComponent({onDelete,updateItem}:any) {

    const items = useContext<ItemState>(ContextStore)

    return (
        <div>
            <div className='container'>
                {items.map(item => (
                    <ListItem
                        key={item.id}
                        onDelete={onDelete}
                        item={item}
                        updateItem={updateItem}
                    />
                ))}
            </div>
        </div>
    )
}

export default ConsumerComponent






// function ConsumerComponent(props: ListChildComponentProps) {
//     const { index, style } = props;

//     const items = useContext<ItemState>(ContextStore)

//     return (
            
//         <ListItem style={style} key={index} component="div" disablePadding>
//         <ListItemButton>
//             {items.map(item => (
//                 <ListItemText key={item.id} primary={`-${item.title}`} />
//             ))}
//         </ListItemButton>
//         </ListItem>
//     )}

//     export default function VirtualizedList() {
//     return (
//         <Box
//         sx={{ width: '100%', height: 400, minWidth: 360, bgcolor: 'gray' }}
//         >
//         <FixedSizeList
//             height={400}
//             width={500}
//             itemSize={95}
//             itemCount={200}
//             overscanCount={5}
//         >
//             {ConsumerComponent}
//         </FixedSizeList>
//         </Box>
//     );
// }