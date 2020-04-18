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
import { loadMarketInfo } from '../../actions';


class App extends Component {

  componentDidMount = () => {

    //ADD LOAD FAVORITES FUNCTION
    getMarketInfo()
    .then(marketInfo => this.props.loadMarketInfo({marketInfo: marketInfo[0]}))
  }

  render() {
    return (
      <>
        <main className="App">
        <Header />
          <Route exact path='/'>
            <WelcomeCard />
          </Route>
          <Route exact path='/cryptos'>
            <Cryptos />
          </Route>
          <Route exact path='/selected'>
            <DetailedCrypto />
          </Route>
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

const mapDispatchToProps = (dispatch) => ({
  loadMarketInfo: marketInfo => dispatch( loadMarketInfo(marketInfo) )
})

export default connect(null, mapDispatchToProps)(App);
