/**
 * 根据给定的数字多次执行一个函数
 * @param times 需要执行的次数
 * @param callback 回调函数, 参数为当前所在的执行次数
 * @returns void
 * @example
 * 
 * times(3, i => console.log(i)) 
 */
export const times = (times: number, callback: (num: number) => void) => {
  for (let i = 0; i < times; i++) {
    callback(i)
  }
}