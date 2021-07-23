import React, {useContext} from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { getBasketTotal } from '../../reducer';
import {useStateValue} from '../../StateProvider';


const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alingItem:'center',
        height:'20vh'
    },
    button:{
        marginTop:'2rem'
    }
}))



function Total() {

    const classes = useStyles();

    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>
            <Button className={classes.button} variant='contained' color='secondary' disabled>Realizar compra</Button>
        </div>
    )
}

export default Total
