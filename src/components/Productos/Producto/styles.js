import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    action:{
        marginTop: '1rem',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions:{
      marginLeft: '16rem',
      display:'flex',
      justifyContent:'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    }
  }));