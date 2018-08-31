//export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
//export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

/*function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  }
}*/

export default function setLoginSuccess(isLogged, user){
  return {
    type: SET_LOGIN_SUCCESS,
    payload: {
        isLogged,
        user
    }
  }
}

/*function setLoginError(loginError){
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}*/
