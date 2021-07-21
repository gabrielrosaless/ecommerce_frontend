export const initialState = {
    basket:[] // carrito
}


export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM'
}

export const getBasketTotal = (basket) => {
    
    let acu = 0;
    basket?.forEach(function(elemento, indice, array) {
        acu += elemento.precio
    })
    return acu;
    // console.log(basket?.reduce((amount,item) => item.precio + amount, 0))
}

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                basket: state.basket.filter((x) => x.id !== action.id)
            }
        default: return state;
        
    }

    
}

export default reducer