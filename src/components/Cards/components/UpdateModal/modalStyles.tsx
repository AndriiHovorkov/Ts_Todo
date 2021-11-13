import { makeStyles } from '@mui/styles';

export const modalStyles = makeStyles(() => ({
  button: {
    display: 'inline-block',
    marginTop: 18,
    marginLeft: 20,
  },
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid blue',
    padding: 4,
  },
}));
