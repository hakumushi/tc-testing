import NavbarPage from '../../page-objects/Navbar-Page'
import SearchResultsPage from '../../page-objects/SearchResults-Page'

const navbarPage = new NavbarPage()
const searchResultsPage = new SearchResultsPage()

fixture `Search test`
  .page `http://zero.webappsecurity.com/index.html`

test("search box should work", async t => {
  navbarPage.search('online bank')

  await t.expect(searchResultsPage.title.exists).ok()
  await t
    .expect(searchResultsPage.message.innerText)
    .contains('Zero - Free Access to Online Banking')
})
