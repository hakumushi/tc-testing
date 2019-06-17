import { Selector } from 'testcafe'

fixture`Getting started with testcafe`
  .page`https://devexpress.github.io/testcafe/example`
  .before(async t => {
    // Test setup goes here
  })
  .beforeEach(async t => {
    // Runs before each test
  })
  .after(async t => {
    // Clean up code goes here
  })
  .afterEach(async t => {
    // Runs after each test
  })

test("Firts Test", async t => {
  const developerName = Selector("#developer-name")
  const submitButton = Selector("#submit-button")
  const articleHeader = Selector("#article-header").innerText

  await t.setTestSpeed(1)
  await t.typeText(developerName, 'Paulo')
  await t.takeScreenshot()
  await t.takeElementScreenshot(submitButton)
  await t.click(submitButton)
  // await t.wait(5000)
  await t.expect(articleHeader).contains('Paulo')

  // Click, DoubleClick, RightClick
  await t.click('id', { options })
  await t.doubleClick('id', { options })
  await t.rightClick('id', { options })

  /*
  // TypeText
  await t.typeText('id', 'text', { replace: true, paste: true })

  // Hover
  await t.hover('id', { options })

  // Keyboard press
  await t.pressKey('text')
  await t.pressKey('shift+key')

  // Navigate to specific url
  await t.navigateTo('url')

  // Resize browser window
  await t.resizeWindow(800, 600)
  await t.maximizeWindow()

  // Contains
  await t
    .expect('element or state or actual value')
    .contains('expected value', "message", { timeout: 1000 })

  // Not Contains
  await t.expect('actual').notContains('expected value', "message", { options })

  // Deep Equal
  await t.expect('actual').eql('expected value', "message", { options })

  // Not Deep Equal
  await t.expect('actual').notEql('expected value', "message", { options })

  // Check if exist
  await t.expect(Selector("#selector").exists).ok()

  // Check if exist
  await t
    .expect(Selector("#selector").exists)
    .notOk("error message if expect fails")

  // Greater than
  await t.expect('actual value').gt('expected value', "message", { options })

  // Less than
  await t.expect('actual value').lt('expected value', "message", { options })

  // Within some range
  await t
    .expect('actual value')
    .within("start", "finish", "message", { options })
  */
})
