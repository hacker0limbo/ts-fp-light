import { DeepArray } from './types/array'

/**
 * 给定一个数组, 返回一个新的降低一维的数组
 * @param array 多维数组
 * @example
 * const arr = [1, [2, [3, [4]], 5]]
 * flatten(arr) // [1, 2, [3, [4]], 5]
 */
export const flatten = <T>(array: DeepArray<T>): DeepArray<T> => {
  // 或者使用 [].concat.apply([], array)
  return [].concat(...array)
}
