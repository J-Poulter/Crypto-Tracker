export const getMarketInfo = async () => {
  try {
    const response = await fetch('https://api.coinlore.net/api/global/')
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

export const getCryptos = async (page) => {
  try {
    const response = await fetch(`https://api.coinlore.net/api/tickers/${page}`)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

export const getCoinDetails = async (id) => {
  try {
    const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

export const getExchanges = async (id) => {
  try {
    const response = await fetch(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

export const getSocialStats = async (id) => {
  try {
    const response = await fetch(`https://api.coinlore.net/api/coin/social_stats/?id=${id}`)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}