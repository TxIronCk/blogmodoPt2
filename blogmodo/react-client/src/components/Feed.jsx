import React from "react";
import samplePosts from "../sample_data.js";
console.log(samplePosts[0].author);

//This should contain a 'map' function that will dynamically display the messages
//I was able to use the samplePosts to display 'one' author...

const Feed = (props) => (
  <div className="feed">
    <ul>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>
          {samplePosts[1].title}
        </div>
        <div className="feed-list-item-byline">
          <span className="feed-list-item-byline-author">
            {samplePosts[1].author}
          </span>
          3 days ago
        </div>
        <img
          src="http://www.placecorgi.com/350/197"
          onClick={props.handleClick}
          className="feed-list-item-image"
        />
        <span className="feed-list-item-lede">{samplePosts[0].body}</span>
      </li>
    </ul>
  </div>
);

export default Feed;
