const romansRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i
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
      if (romansDict[romanKeyMulti]) {
        i++
      }
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
}
