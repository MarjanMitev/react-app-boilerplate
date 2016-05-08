var testContext = require.context('./', true, /_test\.(js|jsx)$/); //make sure you have your directory and regex test set correctly!
testContext.keys().forEach(testContext);

var coverageContext = require.context('../src/components', true, /.(js|jsx)$/); //files for coverage
coverageContext.keys().forEach(coverageContext);
