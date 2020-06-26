import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getMarketInfo, getCryptos, getCoinDetails, getExchanges, getSocialStats } from '../../apiCalls';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { BrowserRouter } from 'react-router-dom';
let appa;
jest.mock('../../apiCalls.js');

const mockMarketInfo = [{
  coins_count: 40,
  active_markets: 1600,
  total_mcap: 190000000,
  total_volume:180000000,
  btc_d: '65',
  eth_d: '10',
  mcap_change: '-4',
  volume_change: '17',
  avg_change_percent: '-1.05',
  volume_ath: 10000000,
  mcap_ath: 10000000
}]

const mockFavorites = [
  {
    id: '58',
    symbol: 'XRP', 
    name: 'XRP',
    nameid: 'ripple',
    price_usd: '0.192433',
    percent_change_24h: '0.17',
  }
]

const mockSelectedCrypto = [{
  id: '1',
  name: 'Etherium',
  symbol: 'ETH',
  rank: 2,
  price_usd: '200',
  price_btc: '0.1',
  percent_change_1h: '-3.8',
  percent_change_24h: '-2',
  percent_change_7d: '-3',
  market_cap_usd: '4000000',
  tsupply: '15000000',
  msupply: '18000000'
}]

const mockSocials = {
  'reddit': {'avg_active_users': 4000, 'subscribers': 100000},
  'twitter': {'followers_count': 40000, 'status_count': 1000}
}

const mockTopCryptos = {'data': [
  {id: 1,name:'Bitcoin',symbol:'BTC',rank:1,price_usd:'7000',price_btc:'1',percent_change_1h:'-3.8',percent_change_24h:'-2',percent_change_7d:'-3',market_cap_usd:'5000000',tsupply:'17000000',msupply:'21000000'},
  {id: 2,name:'Etherium',symbol:'ETH',rank:2,price_usd:'200',price_btc:'0.1',percent_change_1h:'3',percent_change_24h:'-2.5',percent_change_7d:'-1',market_cap_usd:'1000000',tsupply:'10000000',msupply:'15000000'}
]}

const mockExchanges = [
  {'name':'BitForex','base':'BTC','quote':'USDT','price':180,'price_usd':180,'volume':70000,'volume_usd':100000,'time': 1553386202},
  {'name':'bw','base':'BTC','quote':'USDT','price':190,'price_usd':190,'volume':60000,'volume_usd':90000,'time':1553386202}
]

const renderTestWrapper = () => {
  getMarketInfo.mockResolvedValue(mockMarketInfo)
  const testStore = createStore(rootReducer);
  localStorage.setItem('favorites', JSON.stringify(mockFavorites))
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

describe('App', () => {
  it('should render the starting page', async () => {

    const { getByText, getAllByRole} = renderTestWrapper();
    const headerTitle = getByText('Crypto-Tracker')
    const headerButtons = getAllByRole('button')
    const cardTitle = getByText('Welcome Trader!')

    expect(headerTitle).toBeInTheDocument();
    expect(headerButtons).toHaveLength(4);
    expect(cardTitle).toBeInTheDocument()

    const cardTotalCryptos = await waitFor(() => getByText('Total Cryptocurrencies: 40'))
    const cardTotalExchanges = getByText('Total Active Exchange Markets: 1,600')
    const totalMCap = getByText('Total Market Cap: $0.19 Billion')
    const btcDominance = getByText('Bitcoin Market Dominance: 65%')
    const ethDominance = getByText('Etherium Market Dominance: 10%')
    const loadCryptosButton = getByText('BINANCE TOP 100 CRYPTOS')

    expect(cardTotalCryptos).toBeInTheDocument()
    expect(cardTotalExchanges).toBeInTheDocument()
    expect(totalMCap).toBeInTheDocument()
    expect(btcDominance).toBeInTheDocument()
    expect(ethDominance).toBeInTheDocument()
    expect(loadCryptosButton).toBeInTheDocument()
  })

  it('should render the cryptos table after clicking the top 100 cryptos button', async () => {
    getCryptos.mockResolvedValue(mockTopCryptos)
    const { getByText, getAllByRole } = renderTestWrapper();
    const loadCryptosButton = getByText('BINANCE TOP 100 CRYPTOS')

    fireEvent.click(loadCryptosButton)

    const cryptosTitle = getByText('BINANCE TOP CRYPTOS')
    const updateInstruction = getByText('(to update prices/information, click top 100 button in the header)')
    const rankHeading = getByText('RANK')
    const priceHeading = getByText('PRICE')
    const movement1h = getByText('PRICE MOVEMENT (1H)')
    const filterOptions = getAllByRole('option')

    expect(filterOptions).toHaveLength(8)
    expect(rankHeading).toBeInTheDocument()
    expect(cryptosTitle).toBeInTheDocument()
    expect(updateInstruction).toBeInTheDocument()
    expect(priceHeading).toBeInTheDocument()
    expect(movement1h).toBeInTheDocument()

    await waitFor(() => {
      const cryptoName1 = getByText('Bitcoin')
      const cryptoName2 = getByText('Etherium')
      const cryptoPrice1 = getByText('$7000')
      const cryptoPrice2 = getByText('$200')
      const priceMovement1 = getByText('-3.8%')
      const priceMovement2 = getByText('+3%')
    
      expect(cryptoName1).toBeInTheDocument()
      expect(cryptoName2).toBeInTheDocument()
      expect(cryptoPrice1).toBeInTheDocument()
      expect(cryptoPrice2).toBeInTheDocument()
      expect(priceMovement1).toBeInTheDocument()
      expect(priceMovement2).toBeInTheDocument()
    })
  })

  it('should be able to view detailed information about a crypto after clicking view details on its row button', async () => {
    getCryptos.mockResolvedValue(mockTopCryptos)
    getCoinDetails.mockResolvedValue(mockSelectedCrypto)
    getSocialStats.mockResolvedValue(mockSocials)
    const { getByText, getAllByText } = renderTestWrapper();
    
    const homeButton = getByText('HOME');
    fireEvent.click(homeButton)
    
    const loadCryptosButton = getByText('BINANCE TOP 100 CRYPTOS')
    fireEvent.click(loadCryptosButton)

    const viewDetailsButtons = await waitFor(() => getAllByText('VIEW DETAILS'))
    fireEvent.click(viewDetailsButtons[1])

    const detailedPageTitle = getByText('Crypto Statistics')
    const cardTitle = await waitFor(() => getByText('Etherium (ETH)'))
    const addToFavoriteButton = getByText('Add To Favorites')
    const leftColumnTitle = getByText('Performance Stats:')
    const rightColumnTitle = getByText('Social Stats:')
    const rank = getByText('Rank: 2')
    const maxSupply = getByText('Eventual Maximum Supply: 18,000,000')
    const followersCount = getByText('Twitter Followers: 40,000')

    expect(detailedPageTitle).toBeInTheDocument()
    expect(cardTitle).toBeInTheDocument()
    expect(addToFavoriteButton).toBeInTheDocument()
    expect(leftColumnTitle).toBeInTheDocument()
    expect(rightColumnTitle).toBeInTheDocument()
    expect(rank).toBeInTheDocument()
    expect(maxSupply).toBeInTheDocument()
    expect(followersCount).toBeInTheDocument()
  })

  it('should be able to render a table of exchanges trading a particular coin', async () => {
    getCryptos.mockResolvedValue(mockTopCryptos)
    getCoinDetails.mockResolvedValue(mockSelectedCrypto)
    getSocialStats.mockResolvedValue(mockSocials)
    getExchanges.mockResolvedValue(mockExchanges)

    const { getByText, getAllByText } = renderTestWrapper();

    const homeButton = getByText('HOME');
    fireEvent.click(homeButton)
    const loadCryptosButton = getByText('BINANCE TOP 100 CRYPTOS')
    fireEvent.click(loadCryptosButton)
    const viewDetailsButtons = await waitFor(() => getAllByText('VIEW DETAILS'))
    fireEvent.click(viewDetailsButtons[1])
    
    const viewExchangesButton = getByText('Compare Exchanges')
    fireEvent.click(viewExchangesButton)

    const exchangePageTitle = getByText('Top 50 Exchanges Trading:')
    const rowHeading1 = getByText('EXCHANGE NAME')
    const rowHeading2 = getByText('PRICE')
    const rowHeading3 = getByText('TRADE VOLUME (#million units)')
    const rowHeading4 = getByText('TRADE VOLUME ($million)')

    expect(exchangePageTitle).toBeInTheDocument()
    expect(rowHeading1).toBeInTheDocument()
    expect(rowHeading2).toBeInTheDocument()
    expect(rowHeading3).toBeInTheDocument()
    expect(rowHeading4).toBeInTheDocument()

    const exchangeName1 = await waitFor(() => getByText('BitForex'))
    const exchangeName2 = getByText('bw')
    const exchangePrice1 = getByText('$180.00000')
    const exchangePrice2 = getByText('$190.00000')
    const exchangeVolume1 = getByText('0.07')
    const exchangeVolume2 = getByText('0.06')

    expect(exchangeName1).toBeInTheDocument()
    expect(exchangeName2).toBeInTheDocument()
    expect(exchangePrice1).toBeInTheDocument()
    expect(exchangePrice2).toBeInTheDocument()
    expect(exchangeVolume1).toBeInTheDocument()
    expect(exchangeVolume2).toBeInTheDocument()
  })

  it('should render a card for each favorited crypto on the favorites page', () => {
    const { getByText, getAllByText, debug } = renderTestWrapper();

    const homeButton = getByText('HOME')
    fireEvent.click(homeButton)

    const favoritesButton = getByText('FAVORITES(1)')
    fireEvent.click(favoritesButton)

    const favoritesPageTitle = getByText('Your Favorite Cryptos:')
    const favoriteCardName = getByText('XRP')
    const favoriteCardPrice = getByText('Price: $0.192433')
    const favoriteCardPriceMovement = getByText('Price Movement (24H): +0.17%')
    const viewMoreButton = getByText('VIEW MORE')
    const removeCardButton = getAllByText('X')

    expect(removeCardButton).toHaveLength(1)
    expect(favoritesPageTitle).toBeInTheDocument()
    expect(favoriteCardName).toBeInTheDocument()
    expect(favoriteCardPrice).toBeInTheDocument()
    expect(favoriteCardPriceMovement).toBeInTheDocument()
    expect(viewMoreButton).toBeInTheDocument()
  })
})
