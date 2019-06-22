import { Selector } from 'testcafe'

fixture `Send forgotten password test`
  .page `http://zero.webappsecurity.com/index.html`

test("should send new password", async t => {
  // Get selectors
  const signinButton = Selector('#signin_button')
  const linkToPasswords = Selector('a').withText('Forgot your password ?')
  const userEmail = Selector('#user_email')
  const message = Selector('div')

  // Actions
  await t.click(signinButton)
  await t.click(linkToPasswords)
  await t.typeText(userEmail, 'user-email@email.com', { paste: true })
  await t.pressKey('enter')

  // Assertions
  await t
    .expect(message.innerText)
    .contains('Your password will be sent to the following email:')
  await t.expect(userEmail.exists).notOk()
})
