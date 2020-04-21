import { cryptos } from '../reducers/cryptos';

const cryptosData = [
  { 'id': '5', 'symbol': 'BTC', 'rank': 1, 'price_usd': '7000' },
  { 'id': '10', 'symbol': 'ETH', 'rank': 2, 'price_usd': '200' },
  { 'id': '15', 'symbol': 'LTC', 'rank': 3, 'price_usd': '40' }
]


describe('cryptos', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = cryptos(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should be able to loadTopCryptos', () => {
    const expected = [...cryptosData]
    const result = cryptos(undefined, {
      type: 'GET_CRYPTOS',
      cryptos: cryptosData
    })
    expect(result).toEqual(expected)
  })
})