const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chainArray: [],
  getLength() {
  return this.chainArray.length
  },
  addLink(arg) {
    this.chainArray.push('( ' + String(arg) + ' )')
    return this
  },
  removeLink(pos) {
    let startIndex = pos - 1;
    if (typeof pos != 'number' || pos <= 0 || pos > this.getLength()) {
      this.chainArray = []
      throw new Error("You can't remove incorrect link!")
    }else{
      this.chainArray.splice(startIndex, 1)
      return this
    }
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse()
    return this
  },
  finishChain() {
    let result = [...this.chainArray].join("~~");
    this.chainArray = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
