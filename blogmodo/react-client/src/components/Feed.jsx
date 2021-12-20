import React from "react";
import samplePosts from "../sample_data.js";
console.log(samplePosts[0].author);

//This should contain a 'map' function that will dynamically display the messages
//I was able to use the samplePosts to display 'one' author...

const Feed = (props) =>
  function mapBloggers(props) {
    const bloggers = props.samplePosts;
    const blogs = bloggers.map((blog) => (
      <BlogPost key={blog._id} value={blog} />
    ));
    return (
      <div className="feed">
        <ul>
          <li className="feed-list-item">
            <div className="feed-list-item-title" onClick={props.handleClick}>
              {blog.title}
            </div>
            <div className="feed-list-item-byline">
              <span className="feed-list-item-byline-author">
                {blog.author}
              </span>
              3 days ago
            </div>
            <img
              src="http://www.placecorgi.com/350/197"
              onClick={props.handleClick}
              className="feed-list-item-image"
            />
            <span className="feed-list-item-lede">{blog.body}</span>
          </li>
        </ul>
      </div>
    );
  };

export default Feed;
