import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import login from './reducers/loginReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(
    devTools
  )
const store = createStore(
  combineReducers({
    login: login
  }), enhancer)

export default store