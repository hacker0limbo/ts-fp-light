/**
 * 将一个允许多参数的函数包装成只允许接收一个参数的函数
 * @param callback 回调函数
 * @returns 包装之后的函数
 * @example 
 * 
 * ['1', '2'].map(unary(parseInt)) // [1, 2, 3]
 */
export const unary = <T extends (...args: any[]) => any>(callback: T) => {
  if (callback.length === 1) {
    return callback
  }
  return (arg: Parameters<T>[0]) => callback(arg)
}