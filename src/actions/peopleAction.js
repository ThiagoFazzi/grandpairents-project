export const GET_PEOPLE = 'GET_PEOPLE'

export default function getPeople(people){
  //console.log('I am there')
  return {
    type: GET_PEOPLE,
    payload: {
        people
    }
  }
}