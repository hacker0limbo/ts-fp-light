/**
 * 对一个函数的返回值进行缓存, 如果该函数第二次以相同的形式被调用, 会直接使用缓存值而非重新调用一次原函数
 * @param callback 需要进行缓存的函数
 * @returns 缓存形式的函数
 * @reference
 * // https://stackoverflow.com/questions/45924625/typescript-required-callback-parameters
 * // https://stackoverflow.com/questions/43382569/generic-memoize-function-returning-the-same-function-type
 * @example
 * 
 * const getValue = memoized(v: number => v)
 * getValue(1) // 第一次调用, 无缓存值可用, 但会对结果进行缓存
 * getValue(1) // 第二次调用, 使用缓存值
 * getValue(2) // 新的形式的调用, 无缓存
 */
export const memoized = <T extends (...args: any[]) => any>(callback: T) => {
  const table: { [key: string]: ReturnType<T> } = {}

  return (...args: Parameters<T>) => {
    const key = args.toString()
    if (!table[key]) {
      table[key] = callback(...args)
    }
    return table[key]
  }
}
