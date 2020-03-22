import { curry } from '../src'

it('should reduce n args func to n single arg funcs', () => {
  const f1 = (v: boolean) => v
  const f2 = (a: number, b: number) => a + b
  const f3 = (a: string, b: string, c: string) => a + b + c

  expect(curry(f1)(true)).toBeTruthy()
  expect(curry(f2)(1)(2)).toBe(3)
  expect(curry(f3)('a')('b')('c')).toEqual('abc')
  expect(curry(f3)('a', 'b')('c')).toEqual('abc')
  expect(curry(f3)('a', 'b', 'c')).toEqual('abc')
})