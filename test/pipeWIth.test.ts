import { pipeWith } from '../src'

it('should return the same result as using the pip func', () => {
  const mutiply = (a: number, b: number) => a * b
  const square = (a: number) => a * a

  expect(pipeWith([2, 3], mutiply, square)).toBe(36)
})