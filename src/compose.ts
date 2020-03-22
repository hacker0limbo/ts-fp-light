import { Compose } from './types'

/**
 * 给定一系列的函数, 从右往左一次进行调用, compose(f1, f2) => f1(f2(...args))
 * @param funcs 
 * @example
 * const f1 = (a: number) => a * a
 * const f2 = (a: number, b: number) => a * b
 * const f1f2 = compose(f1, f2)
 * f1f2(2, 3) // 36
 */
export const compose: Compose = (...funcs: any) => {
  if (funcs.length === 0) {
    // 返回一个新函数, 参数可以进行类型推断
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((outerFn: any, innerFn: any) => ((...args: any) => outerFn(innerFn(...args))))
}
