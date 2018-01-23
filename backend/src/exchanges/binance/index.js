/* USAGE */
/*
// Doesn't handle errors
get5minuteCandleSticks(1499990400000, 1516460405000, 'BTCUSDT').then((candlesticks) => {
  console.log(candlesticks)
})
*/

import binance from 'node-binance-api'
// import moment from 'moment'

binance.options({
  'APIKEY': process.env.BINANCEAPIKEY,
  'APISECRET': process.env.BINANCEAPISECRET,
  'test': true
})

/* let getDate = unixTimestamp => {
// unixTimestamp in miliseconds
  let date = moment(unixTimestamp)
  let day = date.format('DD')
  let month = date.format('MM')
  let year =  date.format('YYYY')
  let hours = date.format('HH')
  let minutes = date.format('mm')
  let seconds = date.format('ss')
  return [date, day, month, year, hours, minutes, seconds]
} */

// returns an array of candlesticks
/* export const get5minuteCandleSticks = (startTime, endTime, symbol, callback) => {
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
          callback(candlesticks)
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

  candlesticks = candlesticks.sort((a, b) => {
    return a[0] - b[0]
  })
} */

/*
const promisifiedBinanceCandlesticks = (symbol, interval) => {
  return new Promise((resolve, reject) => {
    binance.candlesticks(symbol, interval, (error, ticks, symbol) => {
      if (error != null) {
        reject(error)
      }
      resolve(ticks)
    })
  })
}
*/

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
