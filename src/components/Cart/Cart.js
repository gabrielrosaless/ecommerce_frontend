import React, {useState, useEffect} from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles';
import ItemCartContainer from './ItemCartContainer';
import Total from './Total';
import {useStateValue} from '../../StateProvider';
import { getBasketTotal, getBasketCant } from '../../reducer';
import { BallotSharp } from '@material-ui/icons';

const Cart = () => {

    const classes = useStyles();


    const [{basket}, dispatch] = useStateValue();


    function FormRow(){
        if (basket?.length === 0){
            return(
                <React.Fragment> 
                    <Typography align='center' variant='h5'>Aun no hay productos en el carrito.</Typography>
                </React.Fragment>
            )
        }
        return(
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <ItemCartContainer key={item.Id} item={item}/>
                    </Grid>))
                }
            </React.Fragment>
        );
    }

    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart
