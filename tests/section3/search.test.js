import { Selector } from 'testcafe'

fixture `Search test`
  .page `http://zero.webappsecurity.com/index.html`

test("search box should work", async t => {
  // Get selectors
  const searchBox = Selector('#searchTerm')
  const resultsTitle = Selector('h2')
  const message = Selector('div')

  // Actions
  await t.typeText(searchBox, 'online bank')
  await t.pressKey('enter')

  // Assertions
  await t.expect(resultsTitle.exists).ok()
  await t
    .expect(message.innerText)
    .contains('Zero - Free Access to Online Banking')
})
