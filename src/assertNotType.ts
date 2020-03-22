/**
 * @description 用于类型检测, 判断一个类型是否是 false 类型
 * @example
 * assertType<false>()
 */
export const assertNotType = <T extends false>() => {}
