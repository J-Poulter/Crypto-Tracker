export const cryptos = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_CRYPTOS':
      return {}
    case 'SELECT_CRYPTO':
      return {}
    case 'GET_COIN_DETAILS':
      return {}
    default:
      return state
  }
}