import { memoized } from '../src/memoized'

it('result should be memorized if already been calculated', () => {
  const mockCallback = jest.fn((n: number) => n + 1)
  const addOne = memoized(mockCallback)

  const firstCall = addOne(10)
  expect(firstCall).toBe(11)

  const callWithMemo = addOne(10)
  expect(callWithMemo).toBe(11)

  const callWithoutMemo = addOne(100)
  expect(callWithoutMemo).toBe(101)

  expect(mockCallback.mock.calls.length).toBe(2)
})