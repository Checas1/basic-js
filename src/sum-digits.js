const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(num) {
  let result = 0
  let counter = 0
  while (counter < num.toString().length){
    result += Number(num.toString()[counter])
    counter++
  }
  let checkString = result.toString().length
  while(checkString >= 2){
    return getSumOfDigits(result)
  }
  return result
}

module.exports = {
  getSumOfDigits
};
