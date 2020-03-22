import { Partial } from './types'

/**
 * 给定一个函数, 将该函数偏函数话, 即传入一些值绑定到参数上, 返回一个新函数
 * @param callback 需要被偏函数话的回调函数
 * @param partialArgs 需要传入绑定的参数, 可以使用 null 作为占位符
 */
export const partial: Partial = (callback: any, ...partialArgs: any) => {
  const fullArgs = [...partialArgs]
  return (...args: any) => {
    let argIndex = 0
    for (let i = 0; i < fullArgs.length && argIndex < args.length; i++) {
      let arg = fullArgs[i]
      if (arg === undefined || arg === null) {
        fullArgs[i] = args[argIndex]
        argIndex++
      }
    }
    return callback(...fullArgs)
  }
}
