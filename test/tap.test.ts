import { tap } from '../src'

it('callback should be called if arg type is a function', () => {
  const fn = jest.fn(v => v)
  tap(100)(fn)

  expect(fn).toBeCalled()
  expect(fn.mock.calls.length).toBe(1)
  expect(fn.mock.calls[0][0]).toBe(100)
  expect(fn.mock.results[0].value).toBe(100)
  
})