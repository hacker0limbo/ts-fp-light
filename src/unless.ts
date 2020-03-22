/**
 * 对于一个给定布尔值, 如果该布尔值为 false 才执行后面的回调函数
 * @param predicate 给定的布尔值
 * @param callback 回调函数
 * @return 回调函数的结果
 * @example
 * 
 * unless(true, () => console.log(1)) // 不会执行
 */
export const unless = <T extends (...args: any[]) => any>(predicate: boolean, callback: T) => {
  if (!predicate) {
    callback()
  }
}