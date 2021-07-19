import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      paddingTop: '5rem'
    },
    action:{
        marginTop: '1rem',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));