export interface DeepArray<T> extends Array<T | DeepArray<T>> {}
