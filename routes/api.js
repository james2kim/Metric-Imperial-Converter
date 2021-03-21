'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
      let input = req.query.input.toLowerCase()

      // Get Number and Unit
      let initNum = convertHandler.getNum(input)
      let initUnit = convertHandler.getUnit(input)

      // Check for Valid Input
      if (initNum === 'invalid number' && initUnit === 'invalid unit') return res.send('invalid number and unit')
      else if (initNum === 'invalid number') return res.send('invalid number')
      else if (initUnit === 'invalid unit') return res.send('invalid unit')

      // Converters
      let returnNum = convertHandler.convert(initNum, initUnit)
      let returnUnit = convertHandler.getReturnUnit(initUnit)
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

      // Returned JSON
      return res.json(toString)

  })
};
