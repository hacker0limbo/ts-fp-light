import { filter } from '../src'

it('should return a new array containg filtered value, original array not mutated', () => {
  const arr = [1, 2, 3]
  const filteredArr = filter(arr, v => v > 1)

  expect(filteredArr).toEqual([2, 3])
  expect(arr).toEqual([1, 2, 3])
})