import NavbarPage from '../../page-objects/Navbar-Page'
import LoginPage from '../../page-objects/Login-Page'
import ForgottenPasswordPage from '../../page-objects/ForgottenPassword-Page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

fixture `Send forgotten password test`
  .page `http://zero.webappsecurity.com/index.html`

test("should send new password", async t => {
  navbarPage.clickSignInButton()
  loginPage.goToForgotPassword()
  forgottenPasswordPage.submitEmail('user-email@email.com')

  await t
    .expect(forgottenPasswordPage.message.innerText)
    .contains('Your password will be sent to the following email:')
  await t.expect(forgottenPasswordPage.userEmail.exists).notOk()
})
