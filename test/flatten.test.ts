import { flatten } from '../src/flatten'

it('nested should be flatten with one dimession', () => {
  const arr = [1, [2, [3, [4]], 5]]
  const flattenedArr = flatten(arr)

  expect(arr).toEqual([1, [2, [3, [4]], 5]])
  expect(flattenedArr).toEqual([1, 2, [3, [4]], 5])
  
})