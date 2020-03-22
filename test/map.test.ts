import { map } from '../src/map'

it('should return a new array without mutate original array', () => {
  const arr = [1, 2, 3]
  const arrSquare = map(arr, v => v * v)

  expect(arr).toEqual([1, 2, 3])
  expect(arrSquare).toEqual([1, 4, 9])
})