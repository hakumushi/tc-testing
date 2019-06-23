import NavbarPage from '../../page-objects/Navbar-PageTS'
import FeedbackPage from '../../page-objects/Feedback-PageTS'

const navbarPage = new NavbarPage()
const feedbackPage = new FeedbackPage()

fixture `Feedback form test`
  .page `http://zero.webappsecurity.com/index.html`

test("should submit feedback form", async t => {
  navbarPage.goToFeedbackPage(t)
  feedbackPage.submitFeedback(t)

  await t
    .expect(feedbackPage.message.innerText)
    .contains('Thank you for your comments')
})
