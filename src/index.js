import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetail';

const API_KEY = 'AIzaSyD4SqRw9fic5kQiSnuPBJUq48YEHh53wQI';

// Create new Componenet that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos =>
      this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelecet={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

//Ask React to put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
