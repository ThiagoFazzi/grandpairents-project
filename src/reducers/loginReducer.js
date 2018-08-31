import { SET_LOGIN_SUCCESS } from "../actions/loginAction";

const initialState = {
  isLogged: false,
  user: {}
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      state = {
        isLogged: action.payload.isLogged,
        user: action.payload.user
      }

    //case SET_LOGIN_SUCCESS:
    //  return Object.assign({}, state, {
    //    isLoginSuccess: action.isLoginSuccess
    //  });

  //  case SET_LOGIN_ERROR:
  //    return Object.assign({}, state, {
  //      loginError: action.loginError
  //    });

  //  default:
  //    return state;
  }
  return state
}

export default loginReducer