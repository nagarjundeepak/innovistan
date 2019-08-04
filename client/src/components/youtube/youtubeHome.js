import React from "react";

import YoutubeFrame from "./youtubeFrame";

function YoutubeHome(props) {
  return (
    <div className="container">
      <h4 className="mt-3 mb-2">Login Here</h4>
      <br />
      <div className="g-signin2" onSuccess="onSignIn" />
      <div className="mt-3">
        <YoutubeFrame />
      </div>
    </div>
  );
}

export default YoutubeHome;
