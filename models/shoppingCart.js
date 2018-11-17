const LineReceipt = require('./lineReceipt');

class ShoppingCart {

  constructor(lines) {
    this.lines = lines.map((line) => { 
      return new LineReceipt(line);
    });
  }
  
  validateLines(){
    const allLines = [];
    this.lines.map((line) => {
      allLines.push(line.validateLine());
    });
    return allLines;
  }

}

module.exports = ShoppingCart;