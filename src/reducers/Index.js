import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  loginReducer,
  cardReducer
})