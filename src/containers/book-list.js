import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map(book =>
      <li
        onClick = {() => this.props.selectBook(book)}
        key={book.title}
        className='list-group-item'>
          {book.title}
      </li>
    )
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  /*
    whatever is returned from here will become the props inside the component we will atach
     this function using connect and this component will always return an object with the
     state we want to attach as a prop in the component so we can access it using this.props.
     (anything). and the property is is key value where value is a reducer hwich return new state
  */
  return {
    books: state.books
  }
}

// anything retuned from this function will become the props in the element
function mapDispatchToProps(dispatch) {
  /*
    whenever selectBook is clicked the returned action should pass through all the reducers
    to dispatch the action so that we are using bindActionCreators and then calling the
    functions dispatch.
  */
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
