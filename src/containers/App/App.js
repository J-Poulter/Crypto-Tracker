import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Cryptos from '../Cryptos/Cryptos';
import DetailedCrypto from '../DetailedCrypto/DetailedCrypto';
import Exchanges from '../Exchanges/Exchanges';
import FavoriteCardContainer from '../FavoriteCardContainer/FavoriteCardContainer';
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
          <Route exact path='/cryptos'>
            <Cryptos />
          </Route>
          <Route path='/cryptos/:id' render={(match) => <DetailedCrypto matchId={parseInt(match.match.params.id)} />} />
          <Route exact path='/exchanges'>
            <Exchanges />
          </Route>
          <Route exact path='/favorites'>
            <FavoriteCardContainer />
          </Route>
        </main>
      </>
    )
  };
}

export default App;
