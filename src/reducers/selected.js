export const selected = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CRYPTO':
      return action.selectedCrypto
    default:
      return state
  }
}