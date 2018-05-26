/* USAGE */
/*

// Doesn't handle errors

get5minuteCandleSticks(1499990400000, 1516460405000, 'BTCUSDT').then((candlesticks) => {
  console.log(candlesticks)
})

*/

import binance from 'node-binance-api'

// binance.options({
//   'APIKEY': process.env.BINANCEAPIKEY,
//   'APISECRET': process.env.BINANCEAPISECRET,
//   'test': true
// })

// returns an array of candlesticks
export const get5minuteCandleSticks = (startTime, endTime, symbol) => {
  return new Promise((resolve, reject) => {
    let timestampDifference = Math.abs(endTime - startTime)
    // 2500 minutes
    const INCREMENT = 150000000
    let noOfRequiredRequests = Math.ceil(timestampDifference / INCREMENT)
    let currentTime = startTime
    let candlesticks = []
    let callbacksDone = 0

    for (let i = 1; i <= noOfRequiredRequests; i++) {
      binance.candlesticks(symbol, '5m', (error, ticks, symbol) => {
      // time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored
        if (!error) {
          candlesticks = candlesticks.concat(ticks)
          callbacksDone++
          if (callbacksDone === noOfRequiredRequests) {
            candlesticks = candlesticks.sort((a, b) => {
              return a[0] - b[0]
            })
            resolve(candlesticks)
          }
        }
      },
        {
          limit: 500,
          startTime: currentTime,
          endTime: currentTime + INCREMENT
        })
      currentTime = currentTime + INCREMENT
    }
  })
}
