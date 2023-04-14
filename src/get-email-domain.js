const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(arg) {
  let array = arg.split('@')
  return array.pop()
}

module.exports = {
  getEmailDomain
};
