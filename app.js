const fs = require('fs');
const ShoppingCart = require('./models/shoppingCart');
const Receipt = require('./models/receipt');
const manageError = require('./utils/manageError');

const filename = process.argv[2];

if (process.argv.length < 3) {
  return manageError('fatal', [
    'Manca il file da leggere', 
    'Aggiungerlo come parametro successivo',
  ]);
}

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) {
    return manageError('fatal', [
      'Qualcosa è andato storto nella lettura del file', 
      'Verificare che il file esista e abbia i permessi giusti',
    ])
  } else {
    const shoppingCart = new ShoppingCart(data.split("\n"));
    const validation = shoppingCart.validateLines();
    const lines = [];

    validation.some((singleLine, i)=>{
      if(singleLine.error){
        return manageError('fatal', [
          'Qualcosa è andato storto nella lettura del file', 
          `Verificare che la linea ${i+1} sia valida`,
          singleLine.error,
        ])
      }else{
        lines.push(singleLine.line);
      }
    });

    const receipt = new Receipt(lines);
    receipt.printReceipt();
    process.exit();
  }
});
