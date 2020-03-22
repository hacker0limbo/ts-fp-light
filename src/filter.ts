/**
 * 给定一个数组, 根据一定条件筛选出一个新的数组
 * @param array 给定的数组
 * @param callback 回调函数, 对于每一个元素进行操作, 返回一个布尔值
 * @returns 根据筛选条件得到的新数组
 * @example
 * 
 * filter([1, 2, 3], v => v > 1) // [2, 3]
 */
export const filter = <T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] => {
  const results = []
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    if (callback(value, index, array)) {
      results.push(value)
    }
  }
  return results
}
