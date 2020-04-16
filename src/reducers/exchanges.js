export const exchanges = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MARKET_INFO':
      return {}
    case 'LOAD_EXCHANGES':
      return {}
    default:
      return state
  }
}