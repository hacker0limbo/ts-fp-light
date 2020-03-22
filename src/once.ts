/**
 * 对一个函数进行包装, 使得该函数只能被调用一次
 * @param callback 需要只被调用一次的函数
 * @example
 * 
 * const getValueOnce = once(v => v)
 * getValueOnce(1) // 1
 * getValueOnce(1) // undefined
 */
export const once = <T extends (...args: any[]) => any>(callback: T) => {
  let done = false

  return (...args: Parameters<T>): T => {
    if (done) {
      return undefined
    } else {
      done = true
      return callback.apply(this, args)
    }
  }
}
