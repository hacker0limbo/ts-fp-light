import { zip } from '../src'

it('should zip two arrays and return a new zipped array', () => {
  expect(zip([1, 2, 3], [4, 5, 6], (x, y) => x + y)).toEqual([5, 7, 9])
  expect(zip([1, 2, 3], [4, 5, 6], (x) => x)).toEqual([1, 2, 3])
  expect(zip([1, 2, 3], [4, 5, 6, 7], (x, y) => x + y)).toEqual([5, 7, 9])
  expect(zip([1, 2, 3], [4, 5, 6], (x, y) => x + y)).toEqual([5, 7, 9])
})