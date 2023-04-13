const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  let obj = {}
  let counter = 0
  while (counter < domains.length){
    let template = ''
    let str = domains[counter].split('.')
    let reverseStr = str.reverse()
    for (let item of reverseStr) {
      template += '.' + item;
      (obj[template]) ? obj[template] += 1 :  obj[template] = 1
    }
    counter++
  }
  return obj
}


module.exports = {
  getDNSStats
};
