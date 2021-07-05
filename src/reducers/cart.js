import * as types from '../constants/ActionTypes'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  // Reducers for corresponding Actions
 const cart = (state = initialState, action) => {
  // write Reducers to handle the actions.    
 switch (action.type) {
  case types.ADD_TO_CART:     
    let quatity = 1;
    let productId = action.productId+"";
    if(!state.addedIds.includes(action.productId)) 
    {
      state.addedIds.push(action.productId);
    }
    else  
    {
      quatity = state.quantityById[productId] +  1;      
    }

    state.quantityById[productId] = quatity;
    
    return {
        addedIds: [...state.addedIds],
        quantityById: {...state.quantityById}     
    };
    
  case types.CHECKOUT_REQUEST:
    return initialState;
  case types.CHECKOUT_FAILURE:        
    return action.cart; 
}
return state;
}
  
export default cart