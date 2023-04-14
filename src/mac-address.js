const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(macAdress) {
  let arrayAdress = macAdress.split('-').join('')
  let currentHex = '0123456789ABCDEF'
  let counter = 0
  if (arrayAdress.length <= 5) return false

  while(counter < arrayAdress.length) {
    if (!currentHex.includes(arrayAdress[counter])){
      return false
    }
    counter++
  }
  return true
}
module.exports = {
  isMAC48Address
}
