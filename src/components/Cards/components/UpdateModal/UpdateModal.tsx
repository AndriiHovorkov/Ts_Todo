import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { IModal, ITitle } from '../../../../helpers/interface';
import { URL_POSTS } from '../../../../helpers/constants';
import { modalStyles } from './modalStyles';

export const UpdateModal:FC<IModal> = ({ updateItem, itemID, items }) => {
  const classes = modalStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const [thisTitle, setTitle] = React.useState<ITitle>({
    title: 'test',
    body: 'test',
  });

  const changeHendler = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setTitle({
      ...thisTitle,
      [e.target.name]: e.target.value,
    });
  };
  const saveChange = (): void => {
    updateItem(itemID, thisTitle, URL_POSTS);
    setTitle({ title: '', body: '' });
    setOpen(false);
  };

  useEffect(() => {
    setTitle({
      title: items.title,
      body: 'test',
    });
  }, [items]);
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
        <Box className={classes.box}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Update title
          </Typography>
          <Typography component="span" id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="standard-multiline-flexible"
              label="Title"
              maxRows={4}
              name="title"
              value={thisTitle.title}
              onChange={changeHendler}
              variant="standard"
            />
            <span className={classes.button}>
              <Button onClick={saveChange} variant="contained" size="small">Save</Button>
            </span>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
};
