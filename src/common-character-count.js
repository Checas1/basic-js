const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let firstArray = s1.split('')
  let secondArray = s2.split('')
  let result = 0
  let counter = 0
  while( counter < firstArray.length){
    let currentLetter = secondArray.indexOf(firstArray[counter])
    if (secondArray.includes(firstArray[counter])) {
      secondArray.splice(currentLetter, 1)
      result += 1
    }
    counter++
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
