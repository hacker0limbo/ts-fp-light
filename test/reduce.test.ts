import { reduce } from '../src'

it('should return a combinationed result', () => {
  const arr = [1, 2, 3]

  expect(reduce(arr, (a, b) => a + b)).toBe(6)
  expect(reduce(arr, (a, b) => a + b, 10)).toBe(16)
  expect(reduce(arr, (a, b) => a + b, '')).toBe('123')
  expect(reduce(arr, (a, b, i) => a + i)).toBe(4)
})