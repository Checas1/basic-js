const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(number, speed) {
  let result = {}
  let basePow = Math.pow(2, number) - 1
  let turns = basePow
  let seconds = Math.floor((basePow)*(3600/speed))
  result.seconds = seconds
  result.turns = turns
  return result
}

module.exports = {
  calculateHanoi
}
