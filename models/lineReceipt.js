const CategoryDetector = require('./categoryDetector');
const calculateTaxes = require('../utils/taxCalculator');

const categoryDetector = new CategoryDetector();

class LineReceipt {

  constructor(line) {
    this.description = line;
  }

  setName(name) {
    this.name = name;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }
  
  setUnitPrice(unitPrice) {
    this.unitPrice = unitPrice;
  }
  
  setTotalPrice(totalPrice) {
    this.totalPrice = totalPrice;
  }

  setImported() {
    this.imported = (this.description.indexOf('imported') === -1) ? false : true;
  }

  setCategory() {
    this.category = categoryDetector.detectCategory(this.name);
  }

  setExempt() {
    this.exempt = categoryDetector.isExemptCategory(this.category);
  }

  setTax() {
    let tax = 0;
    if(this.imported) {
      tax += calculateTaxes(this.unitPrice, 5);
    }
    if(!this.exempt) {
      tax += calculateTaxes(this.unitPrice, 10);
    }
    this.tax = Math.round((tax*this.quantity)*100)/100;
  }

  validateLine() {
    const lineExp = /(^\d+)\s([a-zA-Z\s]*)\s(\d+\.\d+)$/g;
    const resultRegularExp = lineExp.exec(this.description);
    const result = {};
    if(resultRegularExp && resultRegularExp.length === 4){
      this.setQuantity(parseInt(resultRegularExp[1], 10));
      this.setName(resultRegularExp[2].replace(' at','').replace('imported ', ''));
      this.setUnitPrice(parseFloat(resultRegularExp[3], 10));
      this.setTotalPrice(Math.round((this.unitPrice*this.quantity)*100)/100);
      this.setImported();
      this.setCategory();
      this.setExempt();
      this.setTax();
      result.line = this;
    }else{
      result.error = 'Formato non conforme';
    }
    return result;
  }
}

module.exports = LineReceipt;