import { selected } from '../reducers/selected';

const selectedCryptoData = {
   'id': '90', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000', 'perent_change_1h': '-1.27', 'msupply': '21000' 
  }

const socialsData = {
  'reddit': { 'avg_active_users': 4409.25, 'subscribers': 373581 },
  'twitter': { 'followers_count': 414355, 'status_count': 1919 }
} 

describe('selected', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = selected(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to selectCrypto', () => {
    const expected = {...selectedCryptoData}
    const result = selected(undefined, {
      type: 'SELECT_CRYPTO',
      selectedCrypto: selectedCryptoData
    })
    expect(result).toEqual(expected)
  })

  it('should be able to getSocials', () => {
    const expected = {...socialsData}
    const result = selected(undefined, {
      type: 'GET_SOCIALS',
      socials: socialsData
    })
    expect(result).toEqual(expected)
  })

  it('should be able to combine retrieved socials data with the selected crypto', () => {
    const expected = {...selectedCryptoData, ...socialsData}
    const result = selected(selectedCryptoData, {
      type: 'GET_SOCIALS',
      socials: socialsData
    })
    expect(result).toEqual(expected)
  })
})