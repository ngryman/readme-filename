import test from 'ava'
import readmeFilename from './'

test('get readme filename', async t => {
  const filename = await readmeFilename('fixtures')
  t.is(filename, 'readme.md')
})

test('return null when no readme found', async t => {
  const filename = await readmeFilename('fixtures/no-readme')
  t.is(filename, null)
})

test('throw error when directory does not exist', async t => {
  await t.throws(readmeFilename('fixtures/void'))
})
