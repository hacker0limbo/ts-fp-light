export type Func<T extends any[], R> = (...a: T) => R

export type __ = null | undefined

/**
 * @reference 
 * https://stackoverflow.com/q/39432234/12733140
 * https://stackoverflow.com/q/51859461/12733140
 */
export interface Curry1<T1, R> {
  (): Curry1<T1, R>;
  (t1: T1): R;
}

export interface Curry2<T1, T2, R> {
  (): Curry2<T1, T2, R>;
  (t1: T1): Curry1<T2, R>;
  (t1: T1, t2: T2): R;
}

export interface Curry3<T1, T2, T3, R> {
  (): Curry3<T1, T2, T3, R>;
  (t1: T1): Curry2<T2, T3, R>;
  (t1: T1, t2: T2): Curry1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
}

/**
 * Partial 类型
 */
export type Partial0<R> = () => R;
export type Partial1<T1, R> = (t1: T1) => R;
export type Partial2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type Partial3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export interface Partial {
  <T1, R>(callback: Partial1<T1, R>): Partial1<T1, R>
  <T1, R>(callback: Partial1<T1, R>, arg1: T1): Partial0<R>
  <T1, T2, R>(callback: Partial2<T1, T2, R>): Partial2<T1, T2, R>
  <T1, T2, R>(callback: Partial2<T1, T2, R>, arg1: T1): Partial1<T2, R>
  <T1, T2, R>(callback: Partial2<T1, T2, R>, arg1: __, arg2: T2): Partial1<T1, R>
  <T1, T2, R>(callback: Partial2<T1, T2, R>, arg1: T1, arg2: T2): Partial0<R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>): Partial3<T1, T2, T3, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: T1): Partial2<T2, T3, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: __, arg2: T2): Partial2<T1, T3, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: __, arg2: __, arg3: T3): Partial2<T1, T2, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: T1, arg2: __, arg3: T3): Partial1<T2, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: __, arg2: T2, arg3: T3): Partial1<T1, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: T1, arg2: T2): Partial1<T3, R>
  <T1, T2, T3, R>(callback: Partial3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Partial0<R>
}

/**
 * Compose 类型
 * @reference 
 * https://github.com/reduxjs/redux/blob/master/src/compose.ts
 * https://stackoverflow.com/q/49310886/12733140
 */
export type Compose = {
  // 参数为一个值而非一个函数
  <R>(arg: R): R
  // 参数为一个函数
  <F extends Function>(f: F): F
  // 两个函数, f1(f2(T) => A) => R
  <A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>
  // 三个函数, f1(f2(f3(T) => A) => B) => R
  <A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>
  // 多个函数
  <R>(...funcs: Function[]): (...args: any[]) => R
}

/**
 * Pipe 类型
 * @description 与 Compose 类似, 不同点在于数据流是从左往右的
 * @reference
 * https://github.com/microsoft/TypeScript/issues/29904
 * https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj
 */
export interface Pipe {
  <R>(arg: R): R
  <F extends Function>(f: F): F
  <A, T extends any[], R>(f1: Func<T, A>, f2: (a: A) => R): Func<T, R>
  <A, B, T extends any[], R>(f1: Func<T, A>, f2: (a: A) => B, f3: (b: B) => R): Func<T, R>
  <R>(...funcs: Function[]): (...args: any[]) => R
}
