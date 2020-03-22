/**
 * @description 判断两个类型是否相等, 相等返回 true 类型, 否则返回 false 类型
 * @implements 判断两个函数的返回值是否一样, 使用 extends 能够保证其之后的类型的唯一性
 * @reference https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
 * @example 
 * Equals<[true, false], [true, false]> => true
 * Equals<[true, false], [true, 1]> => false
 */
export type Equals<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends 
  (<T>() => T extends Y ? 1 : 2) ? true : false;