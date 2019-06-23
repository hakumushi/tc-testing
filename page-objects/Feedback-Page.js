import { Selector, t } from 'testcafe'

class ForgottenPasswordPage {
  constructor() {
    this.form_name = Selector('#name')
    this.form_email = Selector('#email')
    this.form_subject = Selector('#subject')
    this.form_comment = Selector('#comment')
    this.form_submitButton = Selector('input').withAttribute(
      'value',
      'Send Message'
    )
    this.message = Selector('div')
  }

  async submitFeedback(name, email, subject, comment) {
    await t
      .typeText(this.form_name, name)
      .typeText(this.form_email, email)
      .typeText(this.form_subject, subject)
      .typeText(this.form_comment, comment)
      .click(this.form_submitButton)
  }
}

export default ForgottenPasswordPage
