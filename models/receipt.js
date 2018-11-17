class Receipt {

	constructor(lines){
    this.lines = lines;
    this.taxes = this.calculateTaxes();
    this.total = this.calculateTotal();
	}

  formatOutputLine(line){
    const total = (Math.round((line.totalPrice+line.tax)*100)/100).toFixed(2);
    const imported = (line.imported) ? 'imported ': '';
    return `${line.quantity} ${imported}${line.name}: ${total}`;
  }

  calculateTaxes(){
    let tax = 0;
    this.lines.map((line)=>{
      tax += line.tax;
    })
    return (Math.round(tax*100)/100).toFixed(2);
  }

  calculateTotal(){
    let total = 0;
    this.lines.map((line)=>{
      total += (line.totalPrice+line.tax);
    })
    return (Math.round(total*100)/100).toFixed(2); 
  }

  printReceipt(){
    this.lines.map((line)=>{console.log(this.formatOutputLine(line))});
    console.log(`Sales Taxes: ${this.taxes}`);
    console.log(`Total: ${this.total}`);
  }

}
module.exports = Receipt;