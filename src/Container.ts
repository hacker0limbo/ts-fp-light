/**
 * Container 函子
 */
export class Container<T> {
  public value: T

  constructor(value: T) {
    this.value = value
  }

  public static of<U>(value: U) {
    const cls = this
    return new cls(value)
  }

  map<R>(callback: (arg: T) => R) {
    return Container.of(callback(this.value))
  }
}