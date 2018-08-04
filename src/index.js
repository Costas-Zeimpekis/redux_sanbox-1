import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyD4SqRw9fic5kQiSnuPBJUq48YEHh53wQI';

// Create new Componenet that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos =>
      this.setState({ videos })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//Ask React to put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
