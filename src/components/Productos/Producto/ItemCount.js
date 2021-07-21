import React, {useState} from 'react'
import { Input , Button, ButtonGroup} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


function ItemCount({stockItem}) {

    const [cantidad, setCantidad] = useState(1)

    const increaseCant = () => {
        const count = cantidad

        if (count >= stockItem) return;

        setCantidad(count+1);
    }
    
    const decreaseCant = () => {
        const count = cantidad

        if (count <= 1) return;

        setCantidad(count-1);    
    }

    return (
        <div className="sotckCounter d-inline">
            
            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                <Button onClick={decreaseCant}>-</Button>
                <Button aria-readonly disabled={true}>{cantidad}</Button>
                <Button onClick={increaseCant}>+</Button>
            </ButtonGroup>
        </div>
        
    )
}

export default ItemCount
