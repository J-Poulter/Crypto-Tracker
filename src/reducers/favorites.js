export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return []
    case 'REMOVE_FAVORITE':
      return []
    default:
      return state
  }
}