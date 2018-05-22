import * as D3NE from 'd3-node-editor'

// socket name, description, hint
module.exports = {
  anyTypeSocket: new D3NE.Socket('any', 'Any', 'Any type'),
  candlesticks: new D3NE.Socket('candlesticks', 'Candlesticks', 'Candlesticks'),
  indicators: new D3NE.Socket('indicators', 'Indicators', 'EMA indicators')
}
