const assert = require('assert');
const taxCalculator = require('../../utils/taxCalculator');

const p10 = taxCalculator(100, 10);
assert.equal(p10, 10.00);

const p5 = taxCalculator(100, 5);
assert.equal(p5, 5.00);

const p15 = taxCalculator(100, 15);
assert.equal(p15, 15.00);

const p102 = taxCalculator(132, 10);
assert.equal(p102, 13.20);

const p152 = taxCalculator(132, 15);
assert.equal(p152, 19.80);

const p103 = taxCalculator(135.14, 10);
assert.equal(p103, 13.55);

const p153 = taxCalculator(135.14, 15);
assert.equal(p153, 20.30);