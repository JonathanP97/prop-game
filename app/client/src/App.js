import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path="/" component={Landing}/>
          </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
