// conf.js

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000
   
    //print: function () {}
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // directConnect: true,
  

  specs: [
  
 '../dist/out-tsc/specs/Gmail-User-Login.spec.js'



 


  
  

],
 
beforeLaunch: function() {
    require('ts-node').register({
      project: './tsconfig.json'
    });
  },


  plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotPath: '../e2e/testresults/Reports',
    htmlOnSpec: 'failure+success',
    htmlReport: true,
    screenshotOnExpect: 'none',
    screenshotOnSpec: 'failure',
    withLogs: true,
    writeReportFreq: 'asap',
    imageToAscii: 'none',
    clearFoldersBeforeTest: true
  }],

  onPrepare: function () {
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    var jasmineReporters = require('jasmine-reporters');
    
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: "pretty"})),
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      displayNumber: true,
      consolidateAll: false,
      savePath: 'testresults',
      //filePrefix: Date.now() + '.', 
      filePrefix: 'xmlresults',
      
 }))
 browser.manage().window().maximize();
 browser.driver.manage().timeouts().implicitlyWait(15000);
 
 return global.browser.getProcessedConfig().then(function(config) {
  //it is ok to be empty
}),

    browser.ignoreSynchronization = true;
  
  
  },

  params: {
  baseUrl: 'https://gmail.com',
 
  },

  capabilities: {
    'browserName': 'chrome',  //{chrome|firefox|htmlunit|internet explorer}
    'browserVersion': 'any',
    'chromeOptions': {
     //  'args': ['--headless', 'show-fps-counter=true', '--no-sandbox']  // headless
    },
    'shardTestFiles': true,
    'maxInstances': 1
  },


}
