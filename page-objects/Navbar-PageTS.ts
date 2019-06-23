import { Selector, t } from 'testcafe'

class NavbarPage {
  linkToFeedback: Selector = Selector('#feedback')

  async goToFeedbackPage(t: TestController) {
    await t.click(this.linkToFeedback)
  }
}

export default NavbarPage
