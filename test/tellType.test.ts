import { tellType } from '../src'

it('arg type is function should be called', () => {
  const mockCallback = jest.fn(() => console.log('called'))
  tellType(mockCallback)

  expect(mockCallback).toBeCalled()
})