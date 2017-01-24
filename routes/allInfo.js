'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const d3var = require('d3');

router.get('/', (req, res, next) => {
  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .then(results => {
      let counts = {};
      results.forEach(x => {
        counts[x.name] = (counts[x.name] || 0) + 1;
      });

      let produceNodeArr = [];
      for (var prop in counts) {
        console.log(prop);
        // let name = prop;
        let produceObj = {
          name: prop,
          total_amount: counts[prop]
        }
        produceNodeArr.push(produceObj);
      }
      res.send(produceNodeArr);
    })
    .catch(err => {
      next(err);
    });
})

module.exports = router;
