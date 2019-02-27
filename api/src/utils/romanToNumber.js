import romanMap from './romanMap'

const romanToNumber = (roman, done) => {
  let number = 0
  roman.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (i) => {
    number += romanMap[i]
  })
  done(undefined, number)
}

export default romanToNumber
