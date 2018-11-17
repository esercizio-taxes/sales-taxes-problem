test-all: test-models test-utils

test-models:
	node test/models/lineReceipt.js

test-utils:
	node test/utils/taxCalculator.js

