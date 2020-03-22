/**
 * 判断给定的参数, 如果是函数即执行
 * @param arg 任意值
 * @returns void
 * 
 * tellType(() => console.log('function')) // 打印 function
 */
export const tellType = (arg: unknown) => {
  if (typeof arg === 'function') {
    arg()
  } else {
    console.log(`The passed data is ${arg}`)
  }
}
