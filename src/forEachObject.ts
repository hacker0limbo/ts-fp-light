/**
 * 对一个对象里面的每一个 key, value 对进行一次函数操作
 * @param obj 给定对象
 * @param callback 回调函数, 参数为对象的 key 和 value
 * @returns void
 * 
 * @example
 * forEachObject({ a: 1, b: 2 }, (k, v) => console.log(`${k}: ${v}`))
 */
export const forEachObject = <T extends object>(obj: T, callback: (key: Extract<keyof T, string>, value: T[Extract<keyof T, string>]) => void) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(key, obj[key])
    }
  }
}
