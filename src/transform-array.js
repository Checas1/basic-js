const { NotImplementedError } = require('../extensions/index.js')

function transform(array) {
  if(!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!")
  let currentArray = [...array]
  let modification = 0
  let counter = 0
  const actions = ['--discard-prev', '--double-prev', '--discard-next', '--double-next']

  while (counter < array.length){
    if(currentArray[counter] == actions[0]) {
      (counter - 1 != modification && counter > 0) ?
      currentArray.splice(counter - 1, 2) : currentArray.splice(counter, 1)
    }else if(currentArray[counter] == actions[1]) {
      if(counter == 0 || counter - 1 == modification) {
        currentArray.splice(counter, 1)
        counter -= 1
      }else if(counter >= 1) {
        currentArray.splice(counter, 1, currentArray[counter - 1])
        modification = counter
      }
    }else if(currentArray[counter] == actions[2]) {
      if (counter != currentArray.length - 1) {
        currentArray.splice(counter, 2)
        counter -= 1
        modification = counter
      }else{
        currentArray.splice(counter, 1)
      }
    }else if(currentArray[counter] == actions[3]) {
      if(counter != currentArray.length - 1) {
        currentArray.splice(counter, 1, currentArray[counter + 1])
        modification = counter
      }else{
        currentArray.splice(counter, 1)
      }
    }
    counter++
  }
  return currentArray
}

module.exports = {
  transform
}
