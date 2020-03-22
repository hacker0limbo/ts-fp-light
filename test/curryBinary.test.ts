import { curryBinary } from '../src'

it('should reduce a double arguments func to two single arg functions', () => {
  const add = (a: number, b: number) => a + b

  expect(curryBinary(add)(2)(3)).toBe(5)
})