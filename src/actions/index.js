/*
  action creators are simple function which return state
*/
export function selectBook(book) {
  // selectBook is an action creator and return object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
