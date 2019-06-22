import { Selector } from 'testcafe'

fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`

test("should try to login and get error message", async t => {
  // Get selectors
  const signinButton = Selector('#signin_button')
  const loginForm = Selector('#login_form')
  const userName = Selector('#user_login')
  const userPassword = Selector('#user_password')
  //const rememberMeCheck = Selector('#user_remember_me')
  const errorMessage = Selector('.alert-error').innerText

  // Actions
  await t.click(signinButton)
  await t.typeText(userName, 'user-name', { paste: true })
  await t.typeText(userPassword, 'user-value',  { paste: true })
  await t.pressKey('enter')

  // Assertions
  await t.expect(errorMessage).contains('Login and/or password are wrong.')
  await t.expect(loginForm.exists).ok()
})
