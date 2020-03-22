/**
 * Container 函子一样
 */
export class Some<T> {
  public value: T

  constructor(value: T) {
    this.value = value
  }

  public static of<U>(value: U) {
    const cls = this
    return new cls(value)
  }

  map<R>(callback: (arg: T) => R) {
    return Some.of(callback(this.value))
  }
}

export class Nothing<T> {
  public value: T

  constructor(value: T) {
    this.value = value
  }

  public static of<U>(value: U) {
    const cls = this
    return new cls(value)
  }

  map<R>(callback: (arg: T) => R) {
    return this
  }
}

/**
 * Either 函子
 */
export const Either = {
  Some,
  Nothing
}
