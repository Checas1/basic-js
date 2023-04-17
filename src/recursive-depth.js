const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    if (!Array.isArray(array)) { return 0 }

    let count = 0,
        counter = 0
    while (counter < array.length){
      let template = this.calculateDepth(array[counter])
      if(count < template) { count = template }
      counter++
    }
    let result = count + 1
    return result
  }
}


module.exports = {
  DepthCalculator
};
