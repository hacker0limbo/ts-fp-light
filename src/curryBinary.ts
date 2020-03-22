/**
 * 给定一个参数数量为二元的函数, 柯里化成一个只接受一个参数的函数
 * @param binaryCallback 二元函数
 * @example
 * const f = (a: number, b: string) => true
 * curryBinary(1)('f') // true
 */
export const curryBinary = <T, U, S>(binaryCallback: (arg1: T, arg2: S) => U) => {
  return (firstArg: T) => {
    return (secondArg: S) => {
      return binaryCallback(firstArg, secondArg)
    }
  }
}
