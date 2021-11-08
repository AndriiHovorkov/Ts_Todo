import React,{FC} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { IModal, ITitle } from '../../../Helper/interface';
import { URL_POSTS } from '../../../Helper/url';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
};

export const KeepMountedModal:FC<IModal> = ({updateItem, itemID, item}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [thisTitle, setTitle] = React.useState<ITitle>({
        title:'',
    })
    function changeHendler(e:any) {
        setTitle({
            ...thisTitle,
            [e.target.name]: e.target.value,
        });
    }
    function update() {
        updateItem(itemID,thisTitle,URL_POSTS)
        setTitle({title:''})
        setOpen(false);

    }
    return (
        <span>
            <Button onClick={handleOpen}>Change text</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    Old Title:{item.title}
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    <div>
                        <TextField 
                            id="standard-basic" 
                            label="New Title" 
                            variant="standard" 
                            type='text' 
                            placeholder='Update title' 
                            name='title'    
                            onChange={changeHendler}
                            value={thisTitle.title}
                        />
                        <span className="button">
                            <Button onClick={update} variant="contained" size="small">Save</Button>
                        </span>
                        
                    </div>
                    
                </Typography>
                </Box>
            </Modal>
        </span>
    );
}
