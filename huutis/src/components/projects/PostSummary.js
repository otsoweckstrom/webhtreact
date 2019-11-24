import React from "react";
import { Link } from "react-router-dom";

const PostSummary = () => {
  return (
    <div className="card z depth-0 post-summary">
      <div className="card-content grey-text purple">
        <Link to="/post/3">
          <span className="card-title">post Title</span>
          <p>Posted by me</p>
          <p className="grey-text">Now</p>
        </Link>
      </div>
    </div>
  );
};

export default PostSummary;
