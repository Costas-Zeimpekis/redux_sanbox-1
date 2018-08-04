import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { term: '' };
  // }

  state = { term: '', name: 'Costas' };

  onInputChange(e) {
    this.setState({ term: e.target.value });
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onInputChange.bind(this)}
          value={this.state.term}
        />
        Value of the Input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
