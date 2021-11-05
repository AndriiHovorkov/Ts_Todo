import React,{FC}from "react";

// interface NoteInputProps {
//     addNote(note: string): void;
// }

export const NoteInput: FC = () => {
    // const [note, setNode] = useState('')
    
    // const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
    //     setNode(event.target.value)
    // }

    // const onAddNote = () => {
    //     addNote(note)
    //     setNode('')
    // }

    return(
        <div>
            <input   type='text' name='note' placeholder='Note'/>
            <button >Add</button>

        </div>
    )
}