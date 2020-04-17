export const cryptos = (state = [], action) => {
  switch (action.type) {
    case 'GET_CRYPTOS':
      return [...action.cryptos]
    case 'SELECT_CRYPTO':
      return {}
    case 'GET_COIN_DETAILS':
      return {}
    default:
      return state
  }
}