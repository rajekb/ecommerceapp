import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import { ADD_TO_CART, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants/ActionTypes'

export const getCartProducts = () =>{}
export const getTotal = () =>{}

export default combineReducers({
  cart,
  products
})