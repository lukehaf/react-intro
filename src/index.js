// import $ from 'jquery';
// change require to es6 import style

import './style.scss';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';



class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null,
  };

  youtubeSearch('pixar').then(videos => {
    this.setState({
      videos,
      selectedVideo: videos[0],
    });
  });

  render(); {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));