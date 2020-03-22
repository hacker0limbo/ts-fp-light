import { DeepArray } from './types/array'

/**
 * 将一个多维数组扁平化成一维数组
 * @param array 多维化的数组
 * @returns 一维数组
 * @reference   
 * https://stackoverflow.com/questions/56596313/typing-nondeterministically-deep-array-in-typescript
 */
export const flattenDeep = <T>(array: DeepArray<T>): T[] => {
  return [].concat(...array.map(arr => {
    if (Array.isArray(arr)) {
      return flattenDeep(arr)
    } else {
      return arr
    }
  }))
}
