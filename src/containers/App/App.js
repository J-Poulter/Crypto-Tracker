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
import { getMarketInfo } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      marketInfo: {}
    }
  }

  componentDidMount = () => {

    //ADD LOAD FAVORITES FUNCTION
    getMarketInfo()
    .then(marketInfo => this.setState({marketInfo: marketInfo[0]}))
  }

  render() {
    return (
      <>
        <main className="App">
        <Header />
          <Route exact path='/'>
            <WelcomeCard marketInfo={this.state.marketInfo}/>
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
