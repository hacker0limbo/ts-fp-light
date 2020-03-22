export class MayBe<T> {
  public value: T

  constructor(value: T) {
    this.value = value
  }

  public static of<U>(value: U) {
    const cls = this
    return new cls(value)
  }

  public isNothing() {
    return (this.value === null || this.value === undefined)
  }

  public map<R>(callback: (arg: null | undefined) => R): MayBe<null | undefined>
  public map<R>(callback: (arg: T) => R): MayBe<R>
  public map(callback: any) {
    if (this.isNothing()) {
      return MayBe.of(null)
    }
    return MayBe.of(callback(this.value))
  }

  public join() {
    return this.isNothing() ? MayBe.of(null) : this.value
  }

  public chain<R>(callback: (arg: T) => R) {
    return this.map(callback).join()
  }
}