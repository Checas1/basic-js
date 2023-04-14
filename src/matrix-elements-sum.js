const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let result = 0
  let counterColumn = 0
  while(counterColumn < matrix[0].length){
    let counterRow = 0
    while (counterRow < matrix.length){
      if (matrix[counterRow][counterColumn] == 0) {
        break
      } else {
        result += matrix[counterRow][counterColumn]
      }
      counterRow++
    }
    counterColumn++
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
