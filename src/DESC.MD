# Problem
Adding Roman numbers is hard on paper, doing simple math on them is a nightmare. To help me with this you need to write a simple calculator that will allow you me to call simple operations on this numbers (add/substract/multiply/divide).

## There are some rules to a Roman number:
* Numerals can be concatenated to form a larger numeral (“XX” + “II” = “XXII”)
* If a lesser numeral is put before a bigger it means subtraction of the lesser from the bigger (“IV” means four, “CM” means ninehundred)
* If the numeral is I, X or C you can’t have more than three (“II” + “II” = “IV”)
* If the numeral is V, L or D you can’t have more than one (“D” + “D” = “M”)

## IN/OUT example
```javascript
RomanCalculator.add('XIV', 'III') // 'XVII'
RomanCalculator.substract('D', 'XVI') // 'CDLXXXIV'
```
