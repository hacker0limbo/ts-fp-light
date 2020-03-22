/**
 * 给定两个数组, 将两个数组打包(相同索引进行回调函数操作)返回一个新数组
 * @param array1 第一个数组
 * @param array2 第二个数组
 * @param callback 回调函数
 * @example
 * zip([1, 2, 3], [4, 5, 6], (x, y) => x + y) // [5, 7, 9]
 */
export const zip = <T1, T2, R>(array1: T1[], array2: T2[], callback: (t1?: T1, t2?: T2) => R) => {
  const zippedArr = []
  for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    zippedArr.push(callback(array1[i], array2[i]))
  }
  return zippedArr
}