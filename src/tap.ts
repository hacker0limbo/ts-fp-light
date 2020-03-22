/**
 * 给定一个值作为回调函数的参数执行
 * @param value 给定的值
 * @returns 回调函数, 其参数为之前给定的值
 * @example
 * 
 * tap(10)(v => v) // 10
 */
export const tap = <T>(value: T) => 
  <U>(callback: (value: T) => U) => {
    if (typeof callback === 'function') {
      return callback(value)
    }
  }
