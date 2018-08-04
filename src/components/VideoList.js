import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const VideoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelecet}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-10 list-group">{VideoItems}</ul>;
};

export default VideoList;
