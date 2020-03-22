import { Curry1, Curry2, Curry3 } from "./types"

/**
 * 柯里化一个函数
 * @param callback 需要被柯里化的函数
 * @example
 * const add = (a: string, b: number) => true
 * const curriedAdd = curry(add)
 * curriedAdd('a')(1) // true
 */
export function curry<T1, R>(fn: (t1: T1) => R): Curry1<T1, R>;
export function curry<T1, T2, R>(fn: (t1: T1, t2: T2) => R): Curry2<T1, T2, R>;
export function curry<T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R): Curry3<T1, T2, T3, R>;
export function curry(callback: any) {
  return (...args: any) => {
    if (args.length < callback.length) {
      return curry(callback.bind(null, ...args))
    } else {
      return callback(...args)
    }
  }
}
