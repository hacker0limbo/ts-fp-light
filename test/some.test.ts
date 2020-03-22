import { some } from '../src'

it('all false should be false', () => {
  expect(some([1, 2, 3], isNaN)).toBeFalsy()
})

it('at least one true should be true', () => {
  expect(some([NaN, 4, ''], isNaN)).toBeTruthy()
  expect(some([NaN, NaN, NaN], isNaN)).toBeTruthy()
})

