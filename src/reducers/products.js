import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

  // Reducers for corresponding Actions
  export const product = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:     
      return state;      
    case RECEIVE_PRODUCTS:
      return state;     
  }
  return state;
  }

  export const getProduct = (state, productId) => 
  {
    return state;
  }
  export const getVisibleProducts = (state) => {}

  export default product