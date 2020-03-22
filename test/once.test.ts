import { once } from '../src'

it('callback should only be called once wrapped by once func', () => {
  const onceFn = once(() => 100)

  expect(onceFn()).toBe(100)
  expect(onceFn()).toBeUndefined()
  expect(onceFn()).toBeUndefined()
})