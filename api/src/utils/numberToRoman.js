import numberMap from './numberMap'
import filterInt from './filterInt'
import digits from './digits'

const numberToRoman = (input, done) => {
  let roman = ''
  digits(input, (_digits) => {
    for (let i = 0; i < _digits.length; i++) {
      filterInt(_digits[i], (key) => {
        roman = numberMap[i][key] + roman
      })
    }
    done(roman)
  })
}

export default numberToRoman
