import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import Post from "./components/Post.jsx";
import Feed from "./components/Feed.jsx";

/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application,
  we have implemented a "view switcher" in the `App` component.

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`.
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<Feed>` component is displayed
  - If the view is set to any other value, the `<Post>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

//I need to use an axios request to connect the this component to the server.
//axios({
//method: 'post',
//url: '/api/blogs',
//data:
//});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: [],
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    // this.getAllBlogs = this.getAllBlogs.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/blogs")
      .then((results) => {
        this.setState({
          view: results.data,
        });
        console.log("STATE ", this.state);
      })
      .catch((error) => {
        console.error("oops there was an error in getAllBlogs", error);
      });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === "feed") {
      return <Feed handleClick={() => this.changeView("anypostview")} />;
    } else {
      return <Post />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView({ view })}>
            BLOGMODO
          </span>
          <span
            className={
              this.state.view === this.view ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView({ view })}
          >
            See all Posts
          </span>
          <span className="nav-unselected">Write a Post</span>
          <span className="nav-unselected">Admin</span>
        </div>
        <Feed data={this.state} />
        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("blogmodo"));
