import { forEachObject } from '../src';

it('object keys and values should be iterated in order', () => {
  const mockCallback = jest.fn((k, v) => `${k}: ${v}`)
  forEachObject({ name: 'test', age: 1 }, mockCallback)
  
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe('name');
  expect(mockCallback.mock.calls[0][1]).toBe('test');
  expect(mockCallback.mock.calls[1][1]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe('name: test')
  expect(mockCallback.mock.results[1].value).toBe('age: 1')
})