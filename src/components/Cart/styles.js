import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root:{
    flexGrow:1,
    padding:'10rem',
  },
  root2: {
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
    display:'flex',
    justifyContent:'space-between',
    textAlign:'center'
  },
  cardContent:{
      display:'flex',
      justifyContent:'space-between'
  }
}));



// {
//   toolbar: theme.mixins.toolbar,
//   title: {
//     marginTop: '5%',
//   },
//   emptyButton: {
//     minWidth: '150px',
//     [theme.breakpoints.down('xs')]: {
//       marginBottom: '5px',
//     },
//     [theme.breakpoints.up('xs')]: {
//       marginRight: '20px',
//     },
//   },
//   checkoutButton: {
//     minWidth: '150px',
//   },
//   link: {
//     textDecoration: 'none',
//   },
//   cardDetails: {
//     display: 'flex',
//     marginTop: '10%',
//     width: '100%',
//     justifyContent: 'space-between',
//   },
// }