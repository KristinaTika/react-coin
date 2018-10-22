import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import List from './containers/List';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/not-found/NotFound';
import Detail from './containers/Detail';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={List} />
          <Route path="/currency/:id" component={Detail} />
          <Route component={NotFound} />
          <Redirect from="/" to="/home" />
        </Switch>
      
      </div>
    );
  }
}

export default App;
