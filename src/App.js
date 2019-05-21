import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Posts from "./component/posts";
import NewPost from "./component/newPost";
import PostNumber from "./component/postNumbers";
import Error from './component/Error'
import Navigation from './component/Navigation'
class App extends Component{
  render(){
      return (
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
                <Route path="/" component={Posts} exact />
                <Route path="/postNumbers" component={PostNumber} />
                <Route path="/newPost" component={NewPost} />
                <Route component={Error} />
              </Switch>
            
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
