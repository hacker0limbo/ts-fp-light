import { partial } from '../src'

it('partial should return a new function with part args given', () => {
  const f1 = (v: any) => true
  const f2 = (a: string, b: number) => false
  const f3 = (a: number, b: string, c: boolean) => true

  expect(partial(f1)('f1')).toBeTruthy()
  expect(partial(f2, 'a')(1)).toBeFalsy()
  expect(partial(f2, null, 3)('fff')).toBeFalsy()
  expect(partial(f3, null, undefined, true)(8, '8')).toBeTruthy()
  expect(partial(f3, 9, undefined, true)('8')).toBeTruthy()
})