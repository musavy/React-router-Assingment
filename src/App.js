import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Posts from "./component/posts";

class App extends Component{
  render(){
      return (
        <BrowserRouter>
          <Route path="/" component={Posts} />
          <Route />
        </BrowserRouter>
      );
  }
}

export default App;
