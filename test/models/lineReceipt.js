const assert = require('assert');
const LineReceipt = require('../../models/lineReceipt');

const line = '1 chocolate bar at 0.85';
const lR = new LineReceipt(line);
const validation = lR.validateLine();

assert.equal(lR.description, line);
assert.equal(validation.line.quantity, 1);
assert.equal(validation.line.name, 'chocolate bar');
assert.equal(validation.line.unitPrice, 0.85);
assert.equal(validation.line.totalPrice, 0.85);
assert.equal(validation.line.imported, false);
assert.equal(validation.line.category, 'food');
assert.equal(validation.line.exempt, true);
assert.equal(validation.line.tax, 0);

const line2 = '5 imported box of chocolates at 10.00';
const lR2 = new LineReceipt(line2);
const validation2 = lR2.validateLine();

assert.equal(lR2.description, line2);
assert.equal(validation2.line.quantity, 5);
assert.equal(validation2.line.name, 'box of chocolates');
assert.equal(validation2.line.unitPrice, 10.00);
assert.equal(validation2.line.totalPrice, 50.00);
assert.equal(validation2.line.imported, true);
assert.equal(validation2.line.category, 'food');
assert.equal(validation2.line.exempt, true);
assert.equal(validation2.line.tax, 2.50);

const line3 = '1 imported bottle of perfume at 27.99';
const lR3 = new LineReceipt(line3);
const validation3 = lR3.validateLine();

assert.equal(lR3.description, line3);
assert.equal(validation3.line.quantity, 1);
assert.equal(validation3.line.name, 'bottle of perfume');
assert.equal(validation3.line.unitPrice, 27.99);
assert.equal(validation3.line.totalPrice, 27.99);
assert.equal(validation3.line.imported, true);
assert.equal(validation3.line.category, false);
assert.equal(validation3.line.exempt, false);
assert.equal(validation3.line.tax, 4.20);

const line4 = '1 imported bottle of perfume at 27.99 asd';
const lR4 = new LineReceipt(line4);
const validation4 = lR4.validateLine();
assert.equal(lR4.description, line4);
assert.equal(validation4.error, 'Formato non conforme');

