// import $ from 'jquery';
// change require to es6 import style
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';

import debounce from 'lodash.debounce';
import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import { setVideos } from '../actions';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class YouTube extends Component {
  constructor(props) {
    super(props);

    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.props.setVideos(videos);
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}
export default connect(null, { setVideos })(YouTube);
