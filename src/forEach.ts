/**
 * 对给定数组每一个元素进行一次函数操作, 会改变原始数组
 * @param array 给定的数组
 * @param callback 回调函数, 参数为数组元素
 * @returns void
 * @example
 * 
 * forEach([1, 2, 3], v => console.log(v))
 */
export const forEach = <T>(array: T[], callback: (value: T) => void) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}
