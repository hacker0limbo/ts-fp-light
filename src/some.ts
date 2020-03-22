/**
 * 对给定数组进行函数操作, 只要函数操作返回结果存在一个布尔值, 返回 true. 否则返回 false
 * @param array 给定数组
 * @param callback 回调函数, 参数为数组的每一个元素
 * @example
 * 
 * some([1, 2, 3], v => v > 2) // true
 * some([1, 2, 3], v => v > 3) // false
 */
export const some = <T>(array: T[], callback: (value: T) => boolean) => {
  let result = false
  for (const value of array) {
    result = result || callback(value)
  }
  return result
}

