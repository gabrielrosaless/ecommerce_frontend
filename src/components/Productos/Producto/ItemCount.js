import React from 'react'
import {Button, ButtonGroup} from '@material-ui/core';


function ItemCount({stockItem, setCantidad, cantidad}) {

    //const [cantidad, setCantidad] = useState(1)
    
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
                <Button aria-readonly disabled={true}><strong>{cantidad}</strong></Button>
                <Button onClick={increaseCant}>+</Button>
              
            </ButtonGroup>
        </div>
        
    )
}

export default ItemCount
