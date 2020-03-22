/**
 * 对数组里面的每一个元素进行一次函数操作, 如果所有操作结果均是 true, 返回 true. 否则返回 false
 * @param array 数组
 * @param callback 回调函数, 参数为数组的每一个元素
 * @returns 返回布尔值
 * @example 
 * 
 * every([1, 2, 3], v => v > 0) // true
 * every([0, 2, 3], v => v > 0) // false
 */
export const every = <T>(array: T[], callback: (value: T) => boolean) => {
  let result = true
  for (const value of array) {
    result = result && callback(value)
  }
  return result
}
