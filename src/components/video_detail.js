import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const { videoId } = video.id; // will give linting error - read it and decide for yourself
    // {videoId} = video.id // is example of destructuring
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div id="video-detail">
        <div className="embed-responsive embed-responsive-16by9">

          <iframe title="This is a unique title" className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

// add this
const mapStateToProps = (reduxState) => ({
  video: reduxState.video.selected,
});

// change the export to be
export default connect(mapStateToProps, null)(VideoDetail);
