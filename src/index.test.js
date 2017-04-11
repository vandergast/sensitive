import {sensitive} from '.'

test('replaces blacklisted words with asterisks', () => (
  expect(sensitive('The name of the NX will be the Nintendo Switch', ['switch'])).toBe('The name of the NX will be the Nintendo ***')
))

test('replaces multiple instances of blacklisted words', () => (
  expect(sensitive('The name of the NX will be the Nintendo Switch. The switch will be awesome!', ['switch'])).toBe('The name of the NX will be the Nintendo ***. The *** will be awesome!')
))

