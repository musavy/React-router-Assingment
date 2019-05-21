import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Posts from "./component/posts";
import NewPost from "./component/newPost";
import PostNumber from "./component/postNumbers";
class App extends Component{
  render(){
      return (
        <BrowserRouter>
          <Route path="/" component={Posts} />
          <Route  path="/postNumbers" component={PostNumber} />
          <Route path="/newPost" component={NewPost} />
        </BrowserRouter>
      );
  }
}

export default App;
