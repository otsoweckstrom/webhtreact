import React from "react";

const PostDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section post-details">
      <div className="card z-depth-0 purple">
        <div className="card-content">
          <span className="card-title flow-text">Post Title - {id}</span>
          <p>Lorem ipsum</p>
        </div>
        <div className="card action grey-lighten-4 grey-text z-depth-0 purple lighten-1">
          <div className="white-text">Posted by Me</div>
          <div>Now</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
