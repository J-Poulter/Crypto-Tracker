export const market = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MARKET_INFO':
      return {...action.marketInfo.marketInfo}
    default:
      return state
  }
}