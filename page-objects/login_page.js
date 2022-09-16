class LoginPage {
  async navigateToLoginScreen() {
    //linkinedIN
    await page.goto('https://www.google.com/?gws_rd=ssl');
    
  // await page.waitForURL('https://www.google.com/?gws_rd=ssl');
  // await page.locator('[aria-label="Search"]').click();
  // await page.locator('[aria-label="Search"]').fill('linkedin');
  // await page.locator('[aria-label="Search"]').press('Enter');
  // await page.waitForURL('https://www.google.com/search?q=linkedin&source=hp&ei=F3QkY4G2D8iOhwPzvam4Cg&iflsig=AJiK0e8AAAAAYySCJyD1wrRHqTm3ghrOJfxacei_YokQ&ved=0ahUKEwjBnZ_jr5n6AhVIx2EKHfNeCqcQ4dUDCAc&uact=5&oq=linkedin&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMgsIABCABBCxAxCDATIOCAAQgAQQsQMQgwEQyQMyBQgAEJIDMhEILhCABBCxAxCDARDHARDRAzIICAAQgAQQsQMyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyCwgAEIAEELEDEIMBOg4IABCPARDqAhCMAxDlAjoOCC4QjwEQ6gIQjAMQ5QI6BQgAELEDOgUILhCABDoRCC4QgAQQ1AIQiwMQpAMQqAM6CwguEIAEELEDENQCOggILhCABBDUAjoQCC4QsQMQgwEQxwEQ0QMQCjoKCAAQsQMQgwEQClCsD1jxOWC-P2gCcAB4AIABc4gBngaSAQM3LjKYAQCgAQGwAQq4AQI&sclient=gws-wiz');

  }

  async enterTextSearchBox(){
    await page.locator('[aria-label="Search"]').click();
  await page.locator('[aria-label="Search"]').fill('linkedin');
  await page.waitForTimeout(3000)
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {   
    await page.waitForSelector('.inventory_list')
  }

  async pause() {
    // Wait for 3 seconds
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
