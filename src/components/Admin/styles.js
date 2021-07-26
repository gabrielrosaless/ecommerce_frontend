import { makeStyles, alpha } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        marginTop: '10rem',
      },
    datagrid:{
        height: 400, width: '80%', paddingLeft: '10rem' 
    },
    titulo:{
        paddingLeft: '10rem' 
    },
    paginacion:{
        
        paddingLeft: '10rem',
        width:'50%'
    },
    vacio:{
        paddingTop:'2rem'
    },
    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));