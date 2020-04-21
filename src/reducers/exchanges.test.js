import { exchanges } from '../reducers/exchanges';

const exchangesData = [
  { 'name': 'Binance', 'price': 4000, 'volume': 75000 },
  { 'name': 'BitForex', 'price': 4100, 'volume': 80000 },
  { 'name': 'Huobi', 'price': 4200, 'volume': 70000 },
]

describe('exchanges', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = exchanges(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should be able to loadExchanges', () => {
    const expected = [...exchangesData]
    const result = exchanges(undefined, {
      type: 'GET_EXCHANGES',
      exchanges: exchangesData
    })
    expect(result).toEqual(expected)
  })
})