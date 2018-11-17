function calculateTaxes(price, percentual) {
  const taxPercentual =  Math.round(((price/100)*percentual)*100)/100;
  const integer = parseInt((taxPercentual+"").split(".")[0],10);
  let decimal = parseInt((taxPercentual+"").split(".")[1],10);
  if (decimal>10 && decimal%5!==0) {
    do { decimal++; } while (decimal%5!==0);
  }
  return Math.round(parseFloat(`${integer}.${decimal}`,10)*100)/100;
}

module.exports = calculateTaxes;