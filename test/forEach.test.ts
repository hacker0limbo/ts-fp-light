import { forEach } from '../src';

it('all items should be called in order', () => {
  const mockCallback = jest.fn(x => 10 + x);
  forEach([0, 1, 2], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(10)
})