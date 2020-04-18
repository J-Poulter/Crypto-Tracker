export const selected = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CRYPTO':
      return action.selectedCrypto
    case 'GET_SOCIALS':
      return {...state, ...action.socials}
    default:
      return state
  }
}