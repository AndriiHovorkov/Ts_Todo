import  { makeStyles } from '@mui/styles';

export const listStyles = makeStyles(theme => ({
    items: {
        border: '1px black solid',
        marginBottom: 10,
        listStyleType: 'none',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    deleteBtn: {
        marginLeft: 'auto'
    }
}));