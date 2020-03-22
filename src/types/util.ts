/**
 * @description 给定一个函数类型, 返回该函数的参数类型, 为一个元祖类型, 等同于 Parameters<Fn>
 * @implements 如果 F 能赋值给(满足) (...args: infer A) => any 这样的函数类型, 则该类型结果为 A, 否则返回 never
 * @example
 * const fn00 = (name: string, age: number, single: boolean) => true
 * Params<typeof fn00> => [string, number, boolean]
 */
export type Params<F extends (...args: any[]) => any> = 
  F extends ((...args: infer A) => any) ? A : never

/**
 * @description 给定一个元祖类型, 返回该元祖类型的第一个类型
 * @implements T 为一个元祖类型, 如果 T 符合, 那么 Head<T> 结果为 T[0], 也就是该元祖类型里的第一个类型
 * @example 
 * Head<[string, number, boolean]> => string
 */
export type Head<T extends any[]> = 
  T extends [any, ...any[]] ? T[0] : never

/**
 * @description 给定一个元祖类型, 返回该元祖类型里第一个类型之后的所有类型
 * @implements T 是元祖类型(tuple), 同时满足对于在一个函数类型, 这个函数的参数不止一个, 
 * 如果满足, 以元祖类型返回后面的参数类型
 * 注意, 这里构造的条件(extends)是对于一个函数的满足, 但使用的时候与函数无关
 * @example 
 * Tail<[string, number, boolean]> => [number, boolean]
 */
export type Tail<T extends any[]> = 
  ((...args: T) => any) extends ((arg1: any, ...tail: infer A) => any) ? A : []

/**
 * @description 给定一个元祖类型, 返回这个元祖类型是否能满足 Tail 类型(其类型数量是否 > 1)
 * @implements T 是元祖类型, 如果满足 [] 空类型, 或者 [any] 只有一个类型, 返回 false, 否则返回 true
 * @example 
 * HasTail<[1, 2, string]> => true
 * HasTail<Tail<Tail<[1, 2, string]>>> => false // [string]
 */
export type HasTail<T extends any[]> = 
  T extends ([] | [any]) ? false : true

/**
 * @description 给定一个对象和值, 根据值得到所对应的键
 * @reference https://stackoverflow.com/q/54520676/12733140
 * @implements 推导过程为, 先算出`{}[]`, 也就是对应的 O[K], 而 O[k] extends V 形成一个条件
 * 也就对这个结果进行再一步判断, 看是否和 V 相等, 相等返回推导结果是 K
 * @example
 * ObjectInferKey<{ a: 1, b: '22' }, '22'> => 'b'
 */
export type ObjectInferKey<O, V> = 
  { [K in keyof O]: O[K] extends V ? K : never }[keyof O]

/**
 * @description 给定一个对象和键, 返回该键下的值
 * @example
 * ObjectInferValue<{ a: 1, b: '22' }, 'a'> => 1
 */
export type ObjectInferValue<O, K> = 
  K extends keyof O ? O[K]: never

/**
 * @description 给定一个函数, 返回该函数的参数和返回值
 * @example
 * FunctionInfer<(a: number, b: string) => true> => [[number, string], true]
 */  
export type FunctionInfer<F> = 
  F extends (...args: infer A) => infer R ? [A, R] : never

/**
 * @description 返回 promise 的类型
 * @example
 * const p = new Promise<string>()
 * PromiseInfer<typeof p> => string
 */
export type PromiseInfer<P> = 
  P extends Promise<infer T> ? T : never

/**
 * @description 返回数组里面的类型
 * @example
 * const arr = [0, '1']
 * ArrayInfer<typeof arr> => string | number
 * ArrayInfer<(string | number)[]> => string | number
 */
export type ArrayInfer<T extends any[]> = 
  T extends (infer U)[] ? U : never

/**
 * @description 给定一个元祖类型, 返回第一个类型以及后面元素的联合类型
 * @note 这里最后返回的是一个联合类型, 如果需要返回精确的类型, 参考 @link Tail<>
 * TupleInfer<[string, number, boolean]> => [string, number | boolean]
 */
export type TupleInfer<T> = 
  T extends [infer A, ...(infer B)[]] ? [A, B] : never

/**
 * @description curry 函数的回调函数类型 接受两个类型参数, P 为函数参数类型, R 为函数返回结果
 * 其中结果为一个函数类型, 只接受一个参数, 返回类型为递归调用判断的结果(本身或 R)
 * @implements P 为函数的参数类型, 是一个元祖类型, R 为该回调函数的返回结果, 判断条件为 P 里的参数个数是否 > 1
 * 如果 > 1 继续递归调用, 同时使用 Tail 类型去除已经调用过的第一个参数类型
 * @require 该类型只接受单个参数调用
 */
export type CurryV0<P extends any[], R> =
  (arg: Head<P>) => HasTail<P> extends true ? CurryV0<Tail<P>, R> : R

/**
 * @description curry 函数的回调函数类型 接受两个类型参数, P 为函数参数类型, R 为函数返回结果
 * 其中类型推导结果为一个函数, 参数类型为 >= 1 的参数, 结果根据条件递归推导(本身或 R)
 * @implements P 为函数的参数类型, 是一个元祖类型, R 为该回调函数的返回结果, 判断条件为 P 里的参数个数是否 > 1
 * 如果 > 1 继续递归调用, 同时使用 Tail 类型去除已经调用过的第一个参数类型
 * 与 V0 的区别是允许在调用的时候接受多个参数, 但与一样 V0 一样返回的下一个回调参数只比之前减少一个
 * 因此无法判断已经调用过的参数有哪些
 */
export type CurryV1<P extends any[], R> = 
  (arg: Head<P>, ...rest: Tail<Partial<P>>) => HasTail<P> extends true 
    ? CurryV1<Tail<P>, R> : R
/**
 * @description curry 函数的回调函数类型 接受两个类型参数, P 为函数参数类型, R 为函数返回结果
 * 返回类型为一个函数, 其参数类型为任意数量的参数, 返回结果为根据条件递归推导(本身或 R)
 * @implements 允许接收多个参数调用, 但是无法进行对已知的调用过的函数参数进行判断
 * 同时也无类型判断 
 */
export type CurryV2<P extends any[], R> = 
  <T extends any[]>(...args: T) => HasTail<P> extends true
    ? CurryV2<Tail<T>, R> : R

/**
 * @description 给定一个元祖类型, 返回该类型的最后一个类型
 * @implements 最后返回的是 {}[], 也就是该对象的结果, 其中该对象的 key 需要判断
 * 判断条件是 T 中元素是否 > 2, 是继续递归调用, 同时 T 使用 Tail<T> 进行数量缩减
 * 否则返回最后的元素
 * @example
 * Last<[1, 2, 3, 4]> => 4
 */
export type Last<T extends any[]> = { 0: Last<Tail<T>>, 1: Head<T> }[HasTail<T> extends true ? 0 : 1]

/**
 * @description 返回一个元祖元素的数量
 * @example
 * Length<[]> => 0
 * Length<any, any> => 2
 */
export type Length<T extends any[]> = T['length']

/**
 * @description 给定一个元祖类型, 在该元祖类型的头部插入一个新的类型
 * @implements 使用函数比较, E 和 T 结合之后如果能满足合成一个新的元素, 返回新的元祖类型
 * 否则返回原始的 T
 * @example
 * Prepend<string, []> => [string]
 * Prepend<number, [1, 2]> => [number, 1, 2]
 */
export type Prepend<E, T extends any[]> = 
  ((arg: E, ...args: T) => any) extends ((...args: infer U) => any) ? U : T

/**
 * @description 给定一个数字 N, 一个元祖类型, 返回从索引从数字之后(包括)的所有类型
 * @implements 给定一个 I 为空元祖, 每次 Drop 一次就往里面添加一个元素, 不断比较 N 和 I 的长度
 * 如果 I 的长度 < N 继续递归调用, 否则返回最终结果
 * @example
 * Drop<2, [0, 1, 2, 3]> => [2, 3]
 */
export type Drop<N extends number, T extends any[], I extends any[]=[]> = {
  0: Drop<N, Tail<T>, Prepend<any, I>>,
  1: T
}[Length<I> extends N ? 1 : 0]


// export type CurryV3<P extends any[], R> =
//   <T extends any[]>(...args: T) =>
//     Length<Drop<Length<T>, P>> extends 0
//       ? R : CurryV3<Drop<Length<T>, P>, R>

/**
 * @description 检查 X 是否是 Y 类型, 如果满足保持 X 类型, 否则返回 Y 类型
 * @example
 * Cast<string, any> => string
 * Cast<string, string | number> => string
 * Cast<string, number> => number
 */
export type Cast<X, Y> = X extends Y ? X : Y

export type CurryV4<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Partial<P>>) =>
    Length<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never> extends 0
      ? R
      : CurryV4<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>      

export type CurryV5<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Partial<P>>) =>
    Drop<Length<T>, P> extends [any, ...any[]]
      ? CurryV5<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>
      : R
