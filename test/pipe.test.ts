import { pipe } from '../src'

it('should accept single value, function or mutiple functions', () => {
  const square = (a: number) => a * a
  const mutiply = (a: number, b: number) => a * b
  const v = 'v'

  expect(pipe(v)).toBe('v')
  expect(pipe(mutiply)(2, 3)).toBe(6)
  expect(pipe(mutiply, square)(2, 3)).toBe(36)
})