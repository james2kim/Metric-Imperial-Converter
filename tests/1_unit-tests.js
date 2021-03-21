const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite ('Function convertHandler.getNum(input)', () => {
        test('Whole Number Input', done => {
            let input = '32mi'
            assert.equal(convertHandler.getNum(input), 32)
            done()
        })

        test('Decimal Input', done => {
            let input = '32.23mi'
            assert.equal(convertHandler.getNum(input), 32.23)
            done()
        })

        test('Fractional Input', done => {
            let input = '1/2kg'
            assert.equal(convertHandler.getNum(input), 0.5)
            done()
        })

        test('Fractional Input with Decimal', done => {
            let input = '1.5/6kg'
            assert.equal(convertHandler.getNum(input), 0.25)
            done()
        })
        
        test('Invalid Input (double fraction', done => {
            let input = '3/1/2km'
            assert.equal(convertHandler.getNum(input), 'invalid number')
            done()
        })

        test('No Numerical Input', done => {
            let input = 'km';
            assert.equal(convertHandler.getNum(input), 1);
            done();
          }); 
    })


    suite('Function convertHandler.getUnit(input)', () => {
        test('Valid Input Unit', done => {
            let input = '32km'
            assert.equal(convertHandler.getUnit(input), 'km')
            done()
        })

        test('Invalid Input Unit', done => {
            let input = '31lgh'
            assert.equal(convertHandler.getUnit(input), 'invalid unit')
            done()
        })
    })

    suite('Function convertHandler.getReturnUnit(input)', () => {
        test('Valid Return Unit for Valid Input', done => {
            let validInputs = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
            let returnUnits = ['L', 'gal', 'km','mi','kg','lbs']

            validInputs.forEach((element, i) => {
                assert.equal(convertHandler.getReturnUnit(element), returnUnits[i])
            })
            done()
        })
    })

    suite('Function convertHandler.spellOutUnit(input)', () => {
        test('Spelled Out string unit for each valid input unit', done => {
            let validInputs = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
            let spelledOutUnits = ['gallons','liters','miles','kilometers','pounds','kilograms']

            validInputs.forEach((element, i) => {
                assert.equal(convertHandler.spellOutUnit(element), spelledOutUnits[i])
            })
            done()
        })
    })

    suite('Function convertHandler.convert(input)', () => {
        test('convert gal to L', done => {
            let input = [5, 'gal']
            let expected = 18.9271
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })
        
        test('convert L to g', done => {
            let input = [5, 'L']
            let expected = 1.32086;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })

        test('convert mi to km', done => {
            let input = [5, 'mi'];
            let expected = 8.04670
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })

        test('convert km to mi', done => {
            let input = [5, 'km']
            let expected = 3.10686
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })

        test('convert lbs to kg', done => {
            let input = [5, 'lbs']
            let expected = 2.26796
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })

        test('convert kg to lbs', done => {
            let input = [5, 'kg']
            let expected = 11.02312
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done()
        })
    })
    
});