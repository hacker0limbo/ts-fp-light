import { identity } from '../src'

it('should return arg', () => {
  expect(identity('i')).toEqual('i')
})