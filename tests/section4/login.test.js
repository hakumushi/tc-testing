import NavbarPage from '../../page-objects/Navbar-Page'
import LoginPage from '../../page-objects/Login-Page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()

fixture `Login Test`
  .page `http://zero.webappsecurity.com/index.html`

test("should try to login and get error message", async t => {
  navbarPage.clickSignInButton()
  loginPage.login('user-name', 'user-value')

  await t
    .expect(loginPage.errorMessage.innerText)
    .contains('Login and/or password are wrong.')
  await t.expect(loginPage.form.exists).ok()
})
