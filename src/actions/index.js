export const loadMarketInfo = (marketInfo) => ({
  type: 'LOAD_MARKET_INFO',
  marketInfo
})

export const loadTopCryptos = (cryptos) => ({
  type: 'GET_CRYPTOS',
  cryptos
})

export const loadExchanges = (exchanges) => ({
  type: 'GET_EXCHANGES',
  exchanges
})

export const selectCrypto = (selectedCrypto) => ({
  type: 'SELECT_CRYPTO',
  selectedCrypto
})

export const getSocials = (socials) => ({
  type: 'GET_SOCIALS',
  socials
})

export const addFavorite = (crypto) => ({
  type: 'ADD_FAVORITE',
  crypto
})

export const removeFavorite = (crypto) => ({
  type: 'REMOVE_FAVORITE',
  crypto
})

