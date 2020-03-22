import { every } from '../src'

it('all true should be true', () => {
  expect(every([NaN, NaN, NaN], isNaN)).toBeTruthy()
})

it('at least one false should be false', () => {
  expect(every([NaN, 4, NaN], isNaN)).toBeFalsy()
  expect(every([3, 4, 'a'], isNaN)).toBeFalsy()
})
