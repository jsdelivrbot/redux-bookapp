import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select one book to get it's detail:</div>
    }
    return (
      <div>{this.props.book.title}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
