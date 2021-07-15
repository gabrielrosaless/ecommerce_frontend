import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';


const useStyles = makeStyles((theme) => ({
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

export default function ItemDetail({id}) {
  const classes = useStyles();
  
  const [item, setItems] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/api/productos/item/" + id)
        .then(res => res.json())
        .then(data => setItems(data)); 
    })
  
  const precio = item.precio
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography 
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(precio,'$')}
          </Typography>
        }
        title={item.nombre}
        subheader="en Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://showsport.vteximg.com.br/arquivos/ids/693220-1000-1000/NIK-BQ7197008-20-1-.jpg?v=637200652669270000"
        title="Nike air1"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Descripcion: {item.descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>        
      </CardActions>
    </Card>
  );
}
