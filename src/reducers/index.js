import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  loginReducer,
  peopleReducer
})