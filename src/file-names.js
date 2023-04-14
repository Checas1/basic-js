const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  let obj = {}
  let result = []
  for (let item of names){
    if(obj[item]){
      obj[item + `(${obj[item]})`] = 1;
      obj[item] += 1
    }else{
      obj[item] = 1
    }
  }
  for (let prop in obj){
    result.push(prop)
  }
  return result
}

module.exports = {
  renameFiles
};
