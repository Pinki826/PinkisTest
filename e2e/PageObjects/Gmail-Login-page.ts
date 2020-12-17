// page.js

// Because this file references protractor it needs to have it as a project dependency.
import {browser, element, by, protractor} from 'protractor';
import { exit } from 'process';
import { EMLINK } from 'constants';

// Load the data file which contains the element Ids
const pageElements = require('./Data/Gmail-Login-page.data.json');

export class LoginPage {
 
//-------------------------------------------------------------------------------------------------------------
// Any page methods that are used in all or most pages
//-------------------------------------------------------------------------------------------------------------
 

  /**
   * Click Proceed link.
   *
   * @param    N/A.
   * @returns  N/A.
   */
  ClickProceedLink() {
    element(by.id(pageElements.ProceedLinkId)).isPresent().then (function (elem) {
      if(elem) {
        element(by.id(pageElements.ProceedLinkId)).click();   
      }
      else {console.log('No Certificate is displayed');
    }   
  });  
    }

  

  /**
   * Enter Email.
   *
   * @param    N/A.
   * @returns  EmailId.
   */
  EnterEmail() {
    return element(by.id(pageElements.EmailId));
  
    }

  /**
   * Enter Password.
   * @param    N/A.
   * @returns  PasswordName.
   */
  EnterPassword() {
    return element(by.name(pageElements.PasswordName));

    }

  /**
   * Click on Next Button.
   *
   * @param    N/A.
   * @returns  N/A.
   */
  ClickNext() {
    element(by.css(pageElements.NextCss)).click();
    
    }

/**
 * Verify the Top Navigation is displayed.
 * 
 * @param    N/A
 * @returns  N/A
 */
VerifyTopNav() {
  element(by.className(pageElements.GmailImageClass)).isDisplayed();
}



  
}
