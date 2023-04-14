const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(array) {
  let arrayFilter = array.filter(item => item !== -1)
  let sorttedArray = arrayFilter.sort((first, second) => {
    return first - second
  })
  let result = array.map( prop => {
   if( prop == -1 ){
    return -1
   }else{
    return sorttedArray.shift()
   }
  })
  return result
}

module.exports = {
  sortByHeight
};
