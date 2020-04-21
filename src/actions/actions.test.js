import * as actions from '.';

describe('Action Creators', () => {
  it('should have a type of LOAD_MARKET_INFO and a correct payload', () => {
    const marketInfo = [{'coins_count': 2054, 'active_markets': 10000, 'btc_d': '50.5', 'eth_d': '10' }]
    const expectedAction = {
      type: 'LOAD_MARKET_INFO',
      marketInfo
    }
    const result = actions.loadMarketInfo(marketInfo)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of GET_CRYPTOS and a correct payload', () => {
    const cryptos = {
      'data': [
        {'id': '5', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000'},
        {'id': '10', 'symbol': 'ETH', 'rank': 2, 'price_usd': '200'},
        {'id': '15', 'symbol': 'LTC', 'rank': 3, 'price_usd': '40'}
      ]
    }
    const expectedAction = {
      type: 'GET_CRYPTOS',
      cryptos
    }
    const result = actions.loadTopCryptos(cryptos)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of GET_EXCHANGES and a correct payload', () => {
    const exchanges = [
      {'name': 'Binance', 'price': 4000, 'volume': 75000},
      {'name': 'BitForex', 'price': 4100, 'volume': 80000},
      {'name': 'Huobi', 'price': 4200, 'volume': 70000},
    ]
    const expectedAction = {
      type: 'GET_EXCHANGES',
      exchanges
    }
    const result = actions.loadExchanges(exchanges)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SELECT_CRYPTO and a correct payload', () => {
    const selectedCrypto = [
      {'id': '90', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000', 'perent_change_1h': '-1.27', 'msupply': '21000'}
    ]
    const expectedAction = {
      type: 'SELECT_CRYPTO',
      selectedCrypto
    }
    const result = actions.selectCrypto(selectedCrypto)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of GET_SOCIALS and a correct payload', () => {
    const socials = {
      'reddit': {'avg_active_users': 4409.25, 'subscribers': 373581},
      'twitter': {'followers_count': 414355, 'status_count': 1919}
    } 
    const expectedAction = {
      type: 'GET_SOCIALS',
      socials
    }
    const result = actions.getSocials(socials)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of TOGGLE_FAVORITE and a correct payload', () => {
    const favorites = [
      { 'id': '5', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000' },
      { 'id': '10', 'symbol': 'ETH', 'rank': 2, 'price_usd': '200' },
      { 'id': '15', 'symbol': 'LTC', 'rank': 3, 'price_usd': '40' }
    ]
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      favorites
    }
    const result = actions.toggleFavorite(favorites)
    expect(result).toEqual(expectedAction)
  })
})