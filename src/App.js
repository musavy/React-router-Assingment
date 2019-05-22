import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./component/posts";
import NewPost from "./component/newPost";
import PostNumber from "./component/postNumbers";
import Post from "./component/Post";
import Error from "./component/Error";
import { posts } from "./component/Data";
import Navigation from "./component/Navigation";
import "./component/style/style.css";
class App extends Component {
  state = {
    title: "",
    category: "",
    text: "",
    Data: posts
  };
  /* componentDidMount() {
    this.setState({
      Data: posts
    });
  } */
  handleDelete = (id) => {
    const { Data } = this.state;
    const newUsers = Data.filter((Data) => Data.id !== id);
    this.setState({
      Data: newUsers
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route
              path="/"
              component={() => {
                return <Posts state={this.state} />;
              }}
              exact
            />
            <Route
              path="/postNumbers"
              component={() => {
                return <PostNumber state={this.state} />;
              }}
            />
            <Route path="/newPost" component={NewPost} />
            <Route
              path="/Post/:id"
              component={(props) => {
                return <Post state={this.state} id={props.match.params.id} />;
              }}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
