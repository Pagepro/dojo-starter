const MAX_ROMAN_NUMBER = 4999
const MIN_ROMAN_NUMBER = 1
const romansRegex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i
const romansDict = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}

export default class RomanCalculator {
  static isValidRoman (input) {
    return romansRegex.test(input)
  }

  static convertToArabic (input) {
    let values = []
    for (let i = 0; i < input.length; i++) {
      const romanKeySingle = String(input[i]).toUpperCase()
      const romanKeyMulti = `${input[i]}${input[i + 1]}`.toUpperCase()
      const romanValue = romansDict[romanKeyMulti] || romansDict[romanKeySingle]

      romansDict[romanKeyMulti] && i++
      values.push(romanValue)
    }
    return values.reduce((sum, item) => sum + item, 0)
  }

  static convertToRoman (input) {
    const valuesToCompare = Object.entries(romansDict)
    let result = ''

    for (let i = valuesToCompare.length - 1; i >= 0;) {
      const [ roman, arabic ] = valuesToCompare[i]
      if (input / arabic >= 1) {
        result = `${result}${roman}`
        input = input - arabic
      } else {
        i--
      }
    }
    return result
  }

  static extract (val1, val2) {
    if (!this.isValidRoman(val1) || !this.isValidRoman(val2)) {
      throw new TypeError('Invalid numbers')
    }
    return [
      this.convertToArabic(val1),
      this.convertToArabic(val2)
    ]
  }

  static add (val1, val2) {
    const [ r1, r2 ] = this.extract(val1, val2)
    if (r1 + r2 > MAX_ROMAN_NUMBER) {
      throw new RangeError('Sum is out of max value.')
    }
    return this.convertToRoman(r1 + r2)
  }

  static substract (val1, val2) {
    const [ r1, r2 ] = this.extract(val1, val2)
    if (r1 - r2 < MIN_ROMAN_NUMBER) {
      throw new RangeError('Substract is out of min value.')
    }
    return this.convertToRoman(r1 - r2)
  }
}
