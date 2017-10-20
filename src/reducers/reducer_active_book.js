/*
  if the state argument is undefined the make is as null
  because redux does not allow to return undefined
*/
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
