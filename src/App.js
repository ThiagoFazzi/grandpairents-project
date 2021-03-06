import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/LoginContainer'
import { Route, Redirect} from 'react-router-dom'
import Main from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Redirect to={{ pathname: "/login"}}/>
      </div>
    );
  }
}

export default App;
