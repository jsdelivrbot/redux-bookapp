import { combineReducers } from 'redux'
// import reducers
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
})

export default rootReducer
