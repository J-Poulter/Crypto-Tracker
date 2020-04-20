import { market } from '../reducers/market';

const marketInfoData = [
  {'coins_count': 2054, 'active_markets': 10000, 'btc_d': '50.5', 'eth_d': '10' }
]


describe('market', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = market(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to loadMarketInfo', () => {
    const expected = {...marketInfoData.marketInfo}
    const result = market(undefined, {
      type: 'LOAD_MARKET_INFO',
      marketInfo: marketInfoData
    })
    expect(result).toEqual(expected)
  })
})