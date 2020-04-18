export const exchanges = (state = [], action) => {
  switch (action.type) {
    case 'GET_EXCHANGES':
      return [...action.exchanges]
    default:
      return state
  }
}