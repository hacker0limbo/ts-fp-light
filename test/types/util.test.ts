import {
  Params,
  Head,
  Tail,
  HasTail,
  ObjectInferKey,
  ObjectInferValue,
  FunctionInfer,
  PromiseInfer,
  ArrayInfer,
  TupleInfer,
  Last,
  Length,
  Prepend,
  Drop,
  Cast,
  CurryV0,
  CurryV1,
  CurryV2,
  CurryV4,
  CurryV5
} from '../../src'
import { Equals, assertType, assertNotType } from '../../src'

// declare function curryV0<P extends any[], R>(f: (...args: P) => R): CurryV0<P, R>
// declare function curryV1<P extends any[], R>(f: (...args: P) => R): CurryV1<P, R>
// declare function curryV2<P extends any[], R>(f: (...args: P) => R): CurryV2<P, R>
// declare function curryV4<P extends any[], R>(f: (...args: P) => R): CurryV4<P, R>
// declare function curryV5<P extends any[], R>(f: (...args: P) => R): CurryV5<P, R>

const curryCb1 = (a: string, b: number, c: boolean) => true
const curryCb2 = (a: string, b: number, ...c: string[]) => true

it('test Params type', () => {
  const fn = (a: string, b: number, c: boolean) => true
  type test = Params<typeof fn>
  type test2 = Params<(a: any, ...b: any[]) => void>

  assertType<Equals<test, [string, number, boolean]>>()
  assertType<Equals<test2, [any, ...any[]]>>()
})

it('test Head type', () => {
  type test = Head<[string, number, boolean]>

  assertType<Equals<test, string>>()
})

it('test Tail type', () => {
  type test = Tail<[1, 2, 3, 4]>
  type test2 = Tail<[string, number, ...any[]]>

  assertType<Equals<test, [2, 3, 4]>>()
  assertType<Equals<test2, [number, ...any[]]>>()
})

it('test HasTail type', () => {
  type test = HasTail<[1, 2, string]>
  type test2 = HasTail<Tail<Tail<[1, 2, string]>>>
  type test3 = HasTail<Tail<Tail<Tail<[1, 2, string]>>>>

  assertType<Equals<test, true>>()
  assertType<Equals<test2, false>>()
  assertType<Equals<test3, false>>()
})

it('test ObjectInferKey type', () => {
  type test = ObjectInferKey<{ a: 1, b: '22' }, '22'>
  type test2 = ObjectInferKey<{ a: 1, b: 1 }, 1>

  assertType<Equals<test, 'b'>>()
  assertType<Equals<test2, 'a' | 'b'>>()
})

it('test ObjectInferValue type', () => {
  type test = ObjectInferValue<{ a: 1, b: '22' }, 'a'>

  assertType<Equals<test, 1>>()
})

it('test FunctionInfer type', () => {
  type test = FunctionInfer<(a: number, b: string) => true>
  type test2 = FunctionInfer<(a: any, ...b: any[]) => any>

  assertType<Equals<test, [[number, string], true]>>()
  assertType<Equals<test2, [[any, ...any[]], any]>>()
})

it('test PromiseInfer type', () => {
  const p = new Promise<string>(r => r)
  type test = PromiseInfer<typeof p>

  assertType<Equals<test, string>>()
})

it('test ArrayInfer type', () => {
  const arr = [0, '1']
  type test = ArrayInfer<typeof arr>
  type test2 = ArrayInfer<(string | number)[]>

  assertType<Equals<test, string | number>>()
  assertType<Equals<test2, string | number>>()
})

it('test TupleInfer type', () => {
  type test = TupleInfer<[string, number, boolean]>

  assertType<Equals<test, [string, number | boolean]>>()
  assertNotType<Equals<test, [string, [number, boolean]]>>()
})

it('test Last type', () => {
  type test = Last<[1, 2, 3, 4]>

  assertType<Equals<test, 4>>()
})

it('test Length type', () => {
  type test = Length<[]>
  type test2 = Length<[any, any]>

  assertType<Equals<test, 0>>()
  assertType<Equals<test2, 2>>()
})

it('test Prepend type', () => {
  type test = Prepend<string, []>
  type test2 = Prepend<number, [1, 2]>

  assertType<Equals<test, [string]>>()
  assertType<Equals<test2, [number, 1, 2]>>()
})

it('test Drop type', () => {
  type test = Drop<2, [0, 1, 2, 3]>

  assertType<Equals<test, [2, 3]>>()
})

it('test Cast type', () => {
  type test = Cast<string, any>
  type test2 = Cast<string, string | number>
  type test3 = Cast<string, number>

  assertType<Equals<test, string>>()
  assertType<Equals<test2, string>>()
  assertType<Equals<test3, number>>()
})

/**
it('test CurryV0 type', () => {
  const curriedCb = curryV0(curryCb1)
  const curriedCb2 = curryV0(curryCb2)

  const r1 = curriedCb('name')
  const r2 = curriedCb('name')(1)
  const r3 = curriedCb('name')(1)(true)
  // 无法进行剩余多参数调用
  // const r4 = curriedCb2('name')(1)('a', 'b')
  // 无法进行合并参数调用
  // const r5 = curriedCb2('name', 1)

  type test = typeof curriedCb
  type test1 = typeof r1
  type test2 = typeof r2
  type test3 = typeof r3

  assertType<Equals<test, (arg: string) => CurryV0<[number, boolean], boolean>>>()
  assertType<Equals<test1, (arg: number) => CurryV0<[boolean], boolean>>>()
  assertType<Equals<test2, (arg: boolean) => boolean>>()
  assertType<Equals<test3, boolean>>()

})

it('test CurryV1 type', () => {
  const curriedCb = curryV1(curryCb1)
  const curriedCb2 = curryV1(curryCb2)

  const r1 = curriedCb('name')
  const r2 = curriedCb('name', 1, true)
  const r3 = curriedCb('name', 1, true)(1, false)

  type test = typeof curriedCb
  type test1 = typeof r1
  // 类型错误, 消耗的参数数量不应该为一个
  type test2 = typeof r2
  // 类型错误, 消耗的参数数量不应该为两个
  type test3 = typeof r3

  assertType<Equals<test, (arg: string, b?: number, c?: boolean) => CurryV1<[number, boolean], boolean>>>()
  assertType<Equals<test1, (arg: number, c?: boolean) => CurryV1<[boolean], boolean>>>()
  assertType<Equals<test2, (arg: number, c?: boolean) => CurryV1<[boolean], boolean>>>()
  assertType<Equals<test3, (arg: boolean) => boolean>>()
})

it('test CurryV2 type', () => {
  const curriedCb = curryV2(curryCb1)
  const curriedCb2 = curryV2(curryCb2)

  // 参数类型根本没有推断出来
  const r1 = curriedCb(1)
  type test = typeof curriedCb
  type test1 = typeof r1

  assertType<Equals<test, <T extends any[]>(...args: T) => CurryV2<Tail<T>, boolean>>>()
  assertType<Equals<test1, <T extends any[]>(...args: T) => boolean>>()
})

it('test CurryV4 type', () => {
  const curriedCb = curryV4(curryCb1)
  const curriedCb2 = curryV4(curryCb2)

  const r1 = curriedCb('name')
  const r2 = curriedCb('name', 1, true)
  // 这样其实不对, ...args 不应该能单独调用
  // 永远拿不到最后的 boolean 结果
  const r3 = curriedCb2('name', 1)('f')('a', 'aaa')

  type test = typeof curriedCb
  type test1 = typeof r1
  type test2 = typeof r2
  type test3 = typeof r3
})

it('test CurryV5 type', () => {
  const curriedCb = curryV5(curryCb1)
  const curriedCb2 = curryV5(curryCb2)

  const r1 = curriedCb('name')
  const r2 = curriedCb('name', 1, true)
  const r3 = curriedCb2('name', 1, 'aaa')

  type test = typeof curriedCb
  type test1 = typeof r1
  type test2 = typeof r2
  type test3 = typeof r3
})
*/