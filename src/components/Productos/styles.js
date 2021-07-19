import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  root: {
    paddingTop: '5rem',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));