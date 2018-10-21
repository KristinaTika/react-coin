import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import List from './containers/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
