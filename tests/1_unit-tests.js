const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
    suite('Unit Tests', function(){
  
        suite('Function convertHandler.getNum(input)', function() {
          
          test('Whole number input', function(done) {
            let input = '32mi'
            assert.equal(convertHandler.getNum(input), 32)
            done()
          });
          
          test('Decimal Input', function(done) {
            let input = '32.23mi'
            assert.equal(convertHandler.getNum(input), 32.23)
            done()
          });
          
          test('Fractional Input', function(done) {
            let input = '1/2kg'
            assert.equal(convertHandler.getNum(input), 0.5)
            done()
          });
          
          test('Fractional Input w/ Decimal', function(done) {
            let input = '1.5/6kg'
            assert.equal(convertHandler.getNum(input), 0.25)
            done()
          });
          
          test('Invalid Input (double fraction)', function(done) {
            let input = '3/1/2km'
            assert.equal(convertHandler.getNum(input), 'invalid number')
            done()
          });
          
          test('No Numerical Input', function(done) {
            let input = 'km';
            assert.equal(convertHandler.getNum(input), 1);
            done();
          }); 
          
        });
        
        suite('Function convertHandler.getUnit(input)', function() {
          
          test('For Each Valid Unit Inputs', function(done) {
            let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
            let expect = ['gal','L','mi','km','lbs','kg','gal','L','mi','km','lbs','kg']
            input.forEach(function(ele, i) {
                assert.equal(convertHandler.getUnit(ele), expect[i]);
            });
            done();
          });
          
          test('Unknown Unit Input', function(done) {
            let input = '31lgh'
            assert.equal(convertHandler.getUnit(input), 'invalid unit')
            done()
          });  
          
        });
        
        suite('Function convertHandler.getReturnUnit(initUnit)', function() {
          
          test('For Each Valid Unit Inputs', function(done) {
            let validInputs = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
            let returnUnits = ['L', 'gal', 'km','mi','kg','lbs']

            validInputs.forEach((element, i) => {
                assert.equal(convertHandler.getReturnUnit(element), returnUnits[i])
            })
            done()
          });
          
        });  
        
        suite('Function convertHandler.spellOutUnit(unit)', function() {
          
          test('For Each Valid Unit Inputs', function(done) {
            let validInputs = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
            let spelledOutUnits = ['gallons','liters','miles','kilometers','pounds','kilograms']

            validInputs.forEach((element, i) => {
                assert.equal(convertHandler.spellOutUnit(element), spelledOutUnits[i])
            })
            done()
          });
          
        });
        
        suite('Function convertHandler.convert(num, unit)', function() {
          
          test('Gal to L', function(done) {
            var input = [5, 'gal'];
            var expected = 18.9271;
            assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
            done();
          });
          
          test('L to Gal', function(done) {
            let input = [5, 'L']
            let expected = 1.32086;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
          });
          
          test('Mi to Km', function(done) {
            let input = [5, 'mi'];
            let expected = 8.04670
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
          });
          
          test('Km to Mi', function(done) {
            let input = [5, 'km']
            let expected = 3.10686
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
          });
          
          test('Lbs to Kg', function(done) {
            let input = [5, 'lbs']
            let expected = 2.26796
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
          });
          
          test('Kg to Lbs', function(done) {
            let input = [5, 'kg']
            let expected = 11.02312
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
          });
          
        });
      
      });