import { times } from '../src'

it('callback should be called based on times arg', () => {
  const fn = jest.fn()
  times(10, fn)

  expect(fn).toBeCalled()
  expect(fn.mock.calls.length).toBe(10)
})