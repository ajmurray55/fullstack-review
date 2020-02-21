import React from 'react';
import './App.css';
import './reset.css';
import {Switch, Route} from 'react-router-dom';

import Header from './Components/Header/Header'
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={Main}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
