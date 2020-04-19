export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return [...action.faves]
    default:
      return state
  }
}