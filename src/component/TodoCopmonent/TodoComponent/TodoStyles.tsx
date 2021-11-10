import  {makeStyles} from '@mui/styles';


export const todoStyles = makeStyles(theme => ({
    formBlock: {
        width: 900,
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
}));