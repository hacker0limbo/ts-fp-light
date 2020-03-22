import { flattenDeep } from '../src/flattenDeep'

it('should recurisivly flatten an array to one dimession', () => {
  const arr = [1, [2, [3, [4]], 5]]
  const flattenedArr = flattenDeep<number>(arr)

  expect(flattenedArr).toEqual([1, 2, 3, 4, 5])
  expect(arr).toEqual([1, [2, [3, [4]], 5]])
  
})