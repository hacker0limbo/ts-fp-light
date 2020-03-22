import { unless } from '../src'

it('callback should be called if arg does not satisfy condition', () => {
  const mockCallback = jest.fn()
  unless((5 < 1), mockCallback)

  expect(mockCallback).toBeCalled()
})

it('callback should not be called if arg does satisfy condition', () => {
  const mockCallback = jest.fn()
  unless((5 > 1), mockCallback)

  expect(mockCallback).not.toBeCalled()
})
