import React from "react";
import samplePosts from "../sample_data.js";
import moment from "moment";
import App from "../index.jsx";

//This should contain a 'map' function that will dynamically display the messages
//I was able to use the samplePosts to display 'one' author...

const Feed = (props) => (
  <div className="feed">
    <ul>
      {samplePosts.map((blog) => (
        <li key={blog._id} className="feed-list-item">
          <div className="feed-list-item-title" onClick={props.handleClick}>
            {blog.title}
          </div>
          <div className="feed-list-item-byline">
            <span className="feed-list-item-byline-author">{blog.author}</span>
            {moment().fromNow()}
          </div>
          <img
            src={blog.imageUrl}
            onClick={props.handleClick}
            className="feed-list-item-image"
          />
          <span className="feed-list-item-lede">{blog.body}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Feed;
