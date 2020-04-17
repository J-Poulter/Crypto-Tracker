export const exchanges = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MARKET_INFO':
      return {...action.marketInfo.marketInfo}
    case 'LOAD_EXCHANGES':
      return {}
    default:
      return state
  }
}