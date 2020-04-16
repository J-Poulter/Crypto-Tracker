import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import WelcomeCard from '../WelcomeCard/WelcomeCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      marketInfo: {}
    }
  }

  componentDidMount = () => {
    fetch('https://api.coinlore.net/api/global/')
    .then(response => response.json())
    .then(marketInfo => this.setState({marketInfo}))
  }

  render() {
    return (
      <>
        <Header />
        <main className="App">
          <Route exact path='/'>
            <WelcomeCard />
          </Route>
        </main>
      </>
    )
  };
}

export default App;
