import { unary } from '../src'

it('mutiple args function should be transfered to single arg function', () => {
  // 正常情况下 parseInt 会将 index 传给 parseInt 的第二个参数造成错误
  // 会显示 [1, NaN, NaN]
  expect(['1', '2', '3'].map(unary(parseInt))).toEqual([1, 2, 3])
})