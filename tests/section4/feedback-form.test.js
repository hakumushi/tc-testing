import NavbarPage from '../../page-objects/Navbar-Page'
import FeedbackPage from '../../page-objects/Feedback-Page'

const navbarPage = new NavbarPage()
const feedbackPage = new FeedbackPage()

fixture `Feedback form test`
  .page `http://zero.webappsecurity.com/index.html`

test("should submit feedback form", async t => {
  navbarPage.goToFeedbackPage()
  feedbackPage.submitFeedback("name", "email@email.com", "subject", "comment")

  await t
    .expect(feedbackPage.message.innerText)
    .contains('Thank you for your comments')
})
