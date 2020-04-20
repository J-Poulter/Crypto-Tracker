import { favorites } from '../reducers/favorites';

const favoritesData = [
  { 'id': '5', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000' },
  { 'id': '10', 'symbol': 'ETH', 'rank': 2, 'price_usd': '200' },
  { 'id': '15', 'symbol': 'LTC', 'rank': 3, 'price_usd': '40' }
]

describe('favorites', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should be able to update favorites through toggleFavorites', () => {
    const expected = [...favoritesData]
    const result = favorites(undefined, {
      type: 'TOGGLE_FAVORITE',
      favorites: favoritesData
    })
    expect(result).toEqual(expected)
  })
})