const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrayNames) {
  if (!Array.isArray(arrayNames)) return false
  let array = []
  let result = ''
  for(let item of arrayNames){
    if(typeof item == 'string'){
      item = item.trim().toUpperCase()
      array.push(item[0])
    }
  }
 result = array.sort().join('')
 return result
}

module.exports = {
  createDreamTeam
};
