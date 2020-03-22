import { compose } from '../src'

it('should accept single value, function or mutiple functions', () => {
  const square = (a: number) => a * a
  const mutiply = (a: number, b: number) => a * b
  const v = 'v'

  expect(compose(v)).toBe('v')
  expect(compose(mutiply)(2, 3)).toBe(6)
  expect(compose(square, mutiply)(2, 3)).toBe(36)
})