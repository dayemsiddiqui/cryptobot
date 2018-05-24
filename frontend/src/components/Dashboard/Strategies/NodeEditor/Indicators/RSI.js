// Relative strength index - RSI

import * as D3NE from 'd3-node-editor'

// import sockets
import { candlesticksSocket, indicatorsSocket } from '../Sockets'

const componentRSIIndicator = new D3NE.Component('RSI', {
  builder (node, editor) {
    let candlesticksInput = new D3NE.Input('Candlesticks', candlesticksSocket)
    let indicatorsOutput = new D3NE.Output('RSI indicator', indicatorsSocket)

    return node
      .addInput(candlesticksInput)
      .addOutput(indicatorsOutput)
  },

  async worker (node, inputs, outputs) {
    if (inputs[0][0]) {
      let candlesticks = inputs[0][0]['candlesticks']
      outputs[0] = await sequentialCalculation(candlesticks)
    }
  }
})

function calculateDifference (candlesticks) {
  return new Promise((resolve, reject) => {
    // calculate difference
    candlesticks.forEach((candlestick, index) => {
      // equivalent to continue
      if (index === 0) return // eslint-disable-line no-useless-return
      candlestick.push(candlestick[4] - candlesticks[index - 1][4])
      if (index === candlesticks.length - 1) resolve(candlesticks)
    })
  })
}

function calculateSMA (candlesticks) {
  return new Promise((resolve, reject) => {
    // calculate avgGain, avgLoss
    candlesticks.forEach((candlestick, index) => {
      // equivalent to continue
      if (index === 0) return // eslint-disable-line no-useless-return
      if (index >= 14) {
        let [avgGain, avgLoss] = [0, 0]
        for (let i = index; i > index - 14; i--) {
          if (candlesticks[i][12] > 0) avgGain += candlesticks[i][12]
          else if (candlesticks[i][12] < 0) avgLoss += candlesticks[i][12]
          else continue
        }
        candlestick.push(avgGain /= index)
        candlestick.push(avgLoss /= index)
        if (index === candlesticks.length - 1) resolve(candlesticks)
      }
    })
  })
}

function calculateRSI (candlesticks) {
  return new Promise((resolve, reject) => {
    candlesticks.forEach((candlestick, index) => {
      if (index === 14) {
        let rs = candlestick[13] / Math.abs(candlestick[14])
        let rsi = 100 - (100 / (1 + rs))
        candlestick.push(rsi)
      }
      if (index > 14) {
        let currentGain = (candlesticks[index][4] - candlesticks[index - 1][4] > 0) ? (candlesticks[index][4] - candlesticks[index - 1][4]) : 0
        let currentLoss = (candlesticks[index][4] - candlesticks[index - 1][4] < 0) ? (Math.abs(candlesticks[index][4] - candlesticks[index - 1][4])) : 0
        let previousAvgGain = candlesticks[index - 1][13]
        let previousAvgLoss = candlesticks[index - 1][14]
        let numerator = ((previousAvgGain * 13) + currentGain) / 14
        let denominator = ((Math.abs(previousAvgLoss) * 13) + currentLoss) / 14
        let rs = numerator / denominator
        let rsi = 100 - (100 / (1 + rs))
        candlestick.push(rsi)
      }
      if (index === candlesticks.length - 1) resolve(candlesticks)
    })
  })
}

function sequentialCalculation (candlesticks) {
  return new Promise((resolve, reject) => {
    calculateDifference(candlesticks)
      .then(calculateSMA)
      .then(calculateRSI)
      .then((candlesticks) => {
        // new sample candlestick
        /* {
          time: 1514746800000,
          open: "225.92000000",
          high: "226.45000000",
          low: "224.04000000",
          close: "225.50000000",
          volume: "14.32368000",
          closeTime: 1514747099999,
          assetVolume: "3227.83371680",
          trades: 34,
          buyBaseVolume: "4.22766000",
          buyAssetVolume: "953.92662000",
          ignored "0",
          difference: 8.510000000000218,
          avgerageGain: 5.388571428571335,
          avgerageLoss: -4.352857142857049,
          rsi: 55.316028743217586
        } */
        resolve(candlesticks)
      })
  })
}

module.exports = {
  componentRSIIndicator
}
