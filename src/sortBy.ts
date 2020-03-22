/**
 * 给定一个对象的 key, 根据该 key 下的 value 比较, Array.prototype.sort() 里的 compareFunction
 * @param key 给定一个对象的 key
 * @return 返回 compareFunction
 * @example
 * 
 * [{ a: 'a' }, { a: 'b' }].sort(sortBy('a'))
 */
export const sortBy = <T>(key: keyof T) => {
  return (objA: T, objB: T) => {
    if (objA[key] < objB[key]) {
      return -1
    } else if (objA[key] > objB[key]) {
      return 1
    } else {
      return 0
    }
  }
}
