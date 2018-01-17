var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bots', function(req, res, next) {
	let bots = [
          {
            id: 21,
            hover: false,
            name: {
              data: 'B1tZ-Cr1M3',
              edit: false
            },
            image: 'bitcrime.png',
            status: 'Running',
            strategy: 'DEMA',
            exchange: 'GDAX',
            uptime: '1507050618', // convert this into appropriate time interval client side,
            profits: {
              last24hours: '-10', // calculate this dynamically,
              last7days: '13' // calculate this dynamically as well
            }
          },
          {
            id: 20,
            hover: false,
            name: {
              data: 'B1tZ-Cr1M3',
              edit: false
            },
            image: '002-robot-2.png',
            status: 'Running',
            strategy: 'DEMA',
            exchange: 'GDAX',
            uptime: '1507050618', // convert this into appropriate time interval client side,
            profits: {
              last24hours: '-10', // calculate this dynamically,
              last7days: '13' // calculate this dynamically as well
            }
          },
          {
            id: 17,
            hover: false,
            name: {
              data: 'B1tZ-Cr1M3',
              edit: false
            },
            image: '001-robot.png',
            status: 'Running',
            strategy: 'DEMA',
            exchange: 'GDAX',
            uptime: '1507050618', // convert this into appropriate time interval client side,
            profits: {
              last24hours: '-10', // calculate this dynamically,
              last7days: '-58' // calculate this dynamically as well
            }
          },
          {
            id: 43,
            hover: false,
            name: {
              data: 'B1tZ-Cr1M3',
              edit: false
            },
            image: '003-robot-1.png',
            status: 'Running',
            strategy: 'DEMA',
            exchange: 'GDAX',
            uptime: '1507050618', // convert this into appropriate time interval client side,
            profits: {
              last24hours: '2', // calculate this dynamically,
              last7days: '67' // calculate this dynamically as well
            }
          },
          {
            id: 43,
            hover: false,
            name: {
              data: 'B1tZ-Cr1M3',
              edit: false
            },
            image: '003-robot-1.png',
            status: 'Running',
            strategy: 'DEMA',
            exchange: 'GDAX',
            uptime: '1507050618', // convert this into appropriate time interval client side,
            profits: {
              last24hours: '2', // calculate this dynamically,
              last7days: '67' // calculate this dynamically as well
            }
          }
        ];
        console.log('sent')
  res.json(bots);
});

module.exports = router;
