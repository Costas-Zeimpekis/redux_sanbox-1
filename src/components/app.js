import React, { Component } from 'react';

import Booklist from '../constainers/book-list';
import BookDetail from '../constainers/book-detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist />
        <BookDetail />
      </div>
    )
  }
}