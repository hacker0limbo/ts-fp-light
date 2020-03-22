import { Pipe } from './types'

/**
 * 和 compose 类似, 不过数据流为从左往右. compose(f1, f2) => f2(f1(...args))
 * @param funcs 回调函数组
 * @example
 * const f2 = (a: number) => a * a
 * const f1 = (a: number, b: number) => a * b
 * pipe(f1, f2)(2, 3) // 36
 */
export const pipe: Pipe = (...funcs: any) => {
  if (funcs.length === 0) {
    // 返回一个新函数, 参数可以进行类型推断
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((outerFn: any, innerFn: any) => ((...args: any) => innerFn(outerFn(...args))))
}
