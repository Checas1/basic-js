const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(string) {
  let result = ''
  let counter = 1

  for (let i = 0; i < string.length; i++) {
    if(string[i] == string[i + 1]){
      counter += 1
    }else{
      if(counter == 1) {
        result += string[i]
      } else {
        result += counter
        result += string[i]
        counter = 1
      }
    }
  }
  return result
}


module.exports = {
  encodeLine
};
