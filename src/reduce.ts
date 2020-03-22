export function reduce<T>(array: T[], callback: (accumulator: T, currentValue: T, index?: number, array?: T[]) => T): T
export function reduce<T>(array: T[], callback: (accumulator: T, currentValue: T, index?: number, array?: T[]) => T, initialValue: T): T
export function reduce<T, U>(array: T[], callback: (accumulator: U, currentValue: T, index?: number, array?: T[]) => U, initialValue: U): U
export function reduce(array: any, callback: any, initialValue?: any) {
  let acc = initialValue
  let i = 0
  if (typeof initialValue === 'undefined') {
    acc = array[0]
    i = 1
  }

  for (i; i < array.length; i++) {
    acc = callback(acc, array[i], i)
  }
  return acc
}

