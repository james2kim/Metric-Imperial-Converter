function ConvertHandler() {
  
  this.getNum = function(input) {
    let number = input.split(/[a-z]/)[0]

    if (number === '') return 1

    let decimal = 0
    let fraction = 0

    for (let i = 0; i < number.length; i++) {
      if (number[i] === '/')  fraction++
      if (number[i] === '.') decimal++
    }

    if (fraction > 1 || decimal > 1) return 'invalid number'
      
    if (number.includes('/')) {
      let numbers = number.split('/')
      let result = +numbers[0] / +numbers[1]
      return result
    }  
      return +number
    




  };
  
  this.getUnit = function(input) {
    let validUnits = ['gal', 'L', 'mi', 'km','lbs','kg']
    let string = input.toLowerCase()
    let regex = /[a-z]/
    let letter = regex.exec(string)
    let index = string.indexOf(letter)
    let result = string.slice(index)

    if (result === 'l') result = result.toUpperCase()

    if (validUnits.includes(result)) return result
    return 'invalid unit'

  };
  
  this.getReturnUnit = function(initUnit) {
      let string = initUnit.toLowerCase()
      if (string === 'gal') return 'L'
      if (string === 'l') return 'gal'
      if (string === 'mi') return 'km'
      if (string === 'km') return 'mi'
      if (string === 'lbs') return 'kg'
      if (string === 'kg') return 'lbs'
  };

  this.spellOutUnit = function(unit) {
      let string = unit.toLowerCase()
      if (string === 'gal') return 'gallons'
      if (string === 'l') return 'liters'
      if (string === 'mi') return 'miles'
      if (string === 'km') return 'kilometers'
      if (string === 'lbs') return 'pounds'
      if (string === 'kg') return 'kilograms'

 
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (initUnit === 'mi') return initNum * miToKm
    if (initUnit === 'km') return initNum / miToKm
    if (initUnit === 'lbs') return initNum * lbsToKg
    if (initUnit === 'kg') return initNum / lbsToKg
    if (initUnit === 'gal') return initNum * galToL
    if (initUnit === 'L') return initNum / galToL

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    returnNum = returnNum.toFixed(5)
    if (returnNum.includes('.')) returnNum = parseFloat(returnNum)
    else returnNum = parseInt(returnNum)
    

    return {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    }
  };
  
}

module.exports = ConvertHandler;
