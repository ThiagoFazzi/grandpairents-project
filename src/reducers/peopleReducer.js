import { GET_PEOPLE } from '../actions/peopleAction';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE:
    console.log('GET_PEOPLE')
      state = {
        //...state,
        login: state.login,
        people: action.payload.people
      }
  }
  return state
}

export default peopleReducer