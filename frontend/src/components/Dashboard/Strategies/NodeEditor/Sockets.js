import * as D3NE from 'd3-node-editor'

// socket name, description, hint
module.exports = {
  anyTypeSocket: new D3NE.Socket('any', 'Any', 'Any type'),
  candlesticksSocket: new D3NE.Socket('candlesticks', 'Candlesticks', 'Candlesticks'),
  indicatorsSocket: new D3NE.Socket('indicators', 'Indicators', 'EMA indicators')
}
