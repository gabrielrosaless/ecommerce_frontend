import React , {useState} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import accounting from 'accounting';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import useStyles from './styles';


export default function Item({item}) {
  const classes = useStyles();


  const history = useHistory();
  
  const viewItemDetail = () => {
    let path = `item/${item.Id}`; 
    history.push(path);
  }
  
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
        subheader="En stock (provisorio)"
      />
      <CardMedia
        className={classes.media}
        image="https://showsport.vteximg.com.br/arquivos/ids/693220-1000-1000/NIK-BQ7197008-20-1-.jpg?v=637200652669270000"
        title="Nike air1"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            Descripcion: {item.descripcion}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="Ver mas información" onClick={viewItemDetail}>
          <VisibilityIcon></VisibilityIcon>
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
