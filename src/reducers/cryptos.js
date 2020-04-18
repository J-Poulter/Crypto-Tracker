export const cryptos = (state = [], action) => {
  switch (action.type) {
    case 'GET_CRYPTOS':
      return [...action.cryptos]
    default:
      return state
  }
}