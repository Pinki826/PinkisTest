// To run this example at the root folder:
//   1. npm install
//   2. npm run driver:start
//   3. npm run test:int:external
//
// To start a Selenium Server at the root folder:
//   1. npm run driver:start
//
// To transpile the files to javascript at the root folder:
//   1. npm run tsc
//
// ***********************************************************************
// ** AUTHOR:  Pinki Bhandari
// **
// ** CHANGE ACTIVITY:
// ** 12-16-2020: Initial Test Creation 
// ************************************************************************

import { browser, protractor } from 'protractor';

import { LoginPage } from '../PageObjects/Gmail-Login-page';
import { CommonPage } from '../PageObjects/CommonPage';


// Page objects which contain actions that can be taken on the page
const commonPage = new CommonPage();
const loginPage = new LoginPage();

// Load the test data file
 const testData = require('../specs/TestData/Gmail-User-Login-page.testdata.json');
  var using = require('jasmine-data-provider');


  describe('Verify user login', function () { /*define sets of input data as array in method called arrayOfData*/
    function arrayOfData() {
      return testData;
    }

  using(arrayOfData, function (inputData) {

  beforeAll(() => {
    // Open the application
    commonPage.openGmail();
    //commonPage.browserSleep(3000);

  });

  it('Login to the site', function () {
    (loginPage.EnterEmail()).sendKeys(inputData.EmailID);
    loginPage.ClickNext();
    (loginPage.EnterPassword()).sendKeys(inputData.Password);
    loginPage.ClickNext();
    commonPage.browserSleep(4000);

  });

  it('Verify the Top Navigation is displayed after login', function () {
    loginPage.VerifyTopNav();
    commonPage.browserSleep(2000);

});


//it('Logout of the application', function () {
 // loginPage.ClickLogout();
  //commonPage.browserSleep(1000);

//});

});

});
