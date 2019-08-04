import React, { Component } from "react";
import YouTube from "react-youtube";

class YoutubeFrame extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
  videoOnFinish(event) {
    alert("user finished watching the video!");
  }
  render() {
    const opts = {
      height: "420",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const videoId = this.props;
    return (
      <YouTube
        videoId="E7wJTI-1dvQ"
        opts={opts}
        onReady={this.videoOnReady}
        onEnd={this.videoOnFinish}
      />
    );
  }
}

export default YoutubeFrame;
