import { pipe } from './pipe'

/**
 * 将 pipe(f1, f2)(xxx, yyy) 改成 pipeWith([xxx, yyy], f1, f2), 遵循从左往右的顺序
 * @param args 需要传递的参数
 * @param funcs 需要传入的回调函数
 */
export const pipeWith = <T extends any[]>(args: T, ...funcs: Function[]) => {
  return pipe(...funcs)(...args)
}
