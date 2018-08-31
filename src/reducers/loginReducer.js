import { SET_LOGIN_SUCCESS } from "../actions/loginAction";

const initialState = {
  isLogged: false,
  user: {}
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      state = {
        ...state,
        isLogged: action.payload.isLogged,
        user: action.payload.user
      }
  }
  return state
}

export default loginReducer