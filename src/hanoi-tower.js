const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
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
