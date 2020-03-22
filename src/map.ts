/**
 * 对数组所有元素进行函数调用, 返回一个新的数组
 * @param array 给定的数组
 * @param callback 参数分别为 数组的元素, 该元素所在的索引值, 数组本身, 后两个参数可选
 * @returns 一个新的数组
 * @example
 * 
 * map([1, 2, 3], v => v * v) // [1, 4, 9]
 */
export const map = <T, U>(array: T[], callback: (value: T, index?: number, array?: T[]) => U): U[] => {
  const results = []
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    results.push(callback(value, index, array))
  }
  return results
}
