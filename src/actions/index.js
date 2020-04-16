export const loadMarketInfo = () => ({
  type: 'LOAD_MARKET_INFO',
  marketInfo
})

export const loadTopCryptos = (page) => ({
  type: 'GET_CRYPTOS',
  topCryptos
})

export const loadExchanges = () => ({
  type: 'GET_EXCHANGES',
  exchanges
})

export const loadCoinDetails = () => ({
  type: 'GET_COIN_DETAILS',
  coinInfo
})

export const selectCrypto = () => ({
  type: 'SELECT_CRYPTO',
  selectedCrypto
})

export const addFavorite = () => ({
  type: 'ADD_FAVORITE',
  crypto
})

export const removeFavorite = () => ({
  type: 'REMOVE_FAVORITE',
  crypto
})

