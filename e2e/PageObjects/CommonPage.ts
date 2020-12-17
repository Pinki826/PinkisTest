// spec.js

// Because this file references protractor it needs to have it as a project dependency.
import {browser, by, element, protractor} from 'protractor';


// Load the data file which contains the element Ids
//const pageElements = require('./Data/Common-page.data.json');

export class CommonPage {

//-------------------------------------------------------------------------------------------------------------
// Any page methods that are used in all or most pages
//-------------------------------------------------------------------------------------------------------------
  /**
   * Opens Gmail Site
   *
   * @param    N/A.
   * @returns  N/A.
   */
  openGmail() {
    browser.get(browser.params.baseUrl);
    browser.sleep(2000);
  }

  /**
   * Press TAB
   *
   * @param    N/A.
   * @returns  N/A.
   */
  PressTab() {
    browser.actions().sendKeys(protractor.Key.TAB).perform();
  }

  /**
   * Wait for element to be displayed
   * @param    N/A.
   * @returns  N/A.
   */
 WaitforElement(elem) {
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.elementToBeSelected(elem)).then (function() {
    return elem;
  });
}
  

  /**
   * Causes the browser to sleep for a given amount of time.
   * @param time The time in milliseconds the browser will sleep for.
   * @returns    N/A.
   */
  browserSleep(time: number) {
    browser.sleep(time);
  }

  /**
   * Forces a browser refresh
   * @param    N/A.
   * @returns  N/A.
   */
  refreshBrowser() {
      browser.refresh();
  }

  /**
   * Maximizes the browser window
   * @param    N/A.
   * @returns  N/A.
   */
  maximizeBrowserWindow() {
    browser.driver.manage().window().maximize();
  }

  /**
   * Gets the browser page title
   * @param    N/A.
   * @returns  any.
   */
  getPageTitle(): any {
      return browser.getTitle();
  }

  /**
   * Go to previous browser
   * @param    N/A.
   * @returns  N/A.
   */
   clickBrowserBack() {
    browser.navigate().back();
  }

  /**
   * Close the browser
   * @param    N/A.
   * @returns  N/A.
   */
 closeBrowser() {
     browser.close();
  }

    
}