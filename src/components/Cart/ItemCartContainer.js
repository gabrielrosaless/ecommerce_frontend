import React , {useState} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import {ItemCount} from '../index';
import {actionTypes} from '../../reducer';
import {useStateValue} from '../../StateProvider';


export default function ItemCartContainer({item:{id,nombre,imagen,precio,stock,descripcion}}) {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue();


  const removeFromBasket = () => dispatch({
      type:actionTypes.REMOVE_ITEM,
      id: id, //controlar esto
  })
  
  return (

    <Card className={classes.root2}>
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
        title={nombre}
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image="https://i.pinimg.com/564x/dc/9e/aa/dc9eaa1d749ee415124fa05840fce6dd.jpg"
        title="Campera phoenix"
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <ItemCount stockItem={stock}></ItemCount>
        <IconButton>
            <DeleteIcon onClick={removeFromBasket} />
        </IconButton>    
      </CardActions>
    </Card>
  );
}
