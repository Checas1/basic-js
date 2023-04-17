const { NotImplementedError } = require('../extensions/index.js');


function repeater(string, options) {
  let repeatTimes,
      separator,
      addition,
      additionRepeatTimes,
      additionSeparator

  if (options.repeatTimes == undefined){
    repeatTimes = '1'
  }else{
    repeatTimes = options.repeatTimes
  }

  if (options.separator == undefined){
    separator = '+'
  }else{
    separator = options.separator
  }

  if (options.addition === undefined){
    addition = ''
  }else{
    addition = options.addition
  }

  if ( options.additionRepeatTimes == undefined){
    additionRepeatTimes = '1'
  }else{
    additionRepeatTimes = options.additionRepeatTimes
  }

  if (options.additionSeparator == undefined){
    additionSeparator = '|'
  }else{
    additionSeparator = options.additionSeparator
  }

  let resultArray = [],
      tmpArray = [],
      firstCounter = 0
  while(firstCounter < additionRepeatTimes){
    tmpArray.push('' + addition)
    firstCounter++
  }
  let secondCounter = 0,
      tmpStr = ''
  tmpStr = string + tmpArray.join(additionSeparator)
  while(secondCounter < repeatTimes){
    resultArray.push(tmpStr)
    secondCounter++
  }
  return resultArray.join(separator);
}
module.exports = {
  repeater
};
