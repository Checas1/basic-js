const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const strNumber = '' + number
  const array = strNumber.split('')
  let result = 0
  let counter = 0
  while( counter < array.length){
    let tmp = Number(strNumber.replace(array[counter], ''))
    result = (tmp > result) ? tmp : result
    counter++
  }
  return result
}
module.exports = {
  deleteDigit
};
