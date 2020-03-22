# ts-fp-light

Beginning functional programming with typescript

## Install
```bash
$ npm install ts-fp-light
```

## Use

**functions:**
```typescript
import {
  assertNotType,
  assertType,
  comspose,
  Container,
  curry,
  curryBinary,
  Either,
  every,
  filter,
  flatten,
  flattenDeep,
  forEach,
  forEachObject,
  identity,
  loggerHelper,
  map,
  MayBe,
  memoized,
  once,
  partial,
  pipe,
  pipeWith,
  reduce,
  some,
  sortBy,
  tap,
  tellType,
  times,
  unary,
  unless,
  zip
} from 'ts-fp-light'
```

**types:**
```typescript
import {
  DeepArray,
  Func,
  Partial,
  Compose,
  Pipe,
  Equals,
  Params,
  Head,
  Tail,
  HasTail,
  ObjectInferKey,
  ObjectInferValue,
  FunctionInfer,
  PromiseInfer,
  ArrayInfer,
  TupleInfer,
  Last,
  Length,
  Prepend,
  Drop,
  Cast  
} from 'ts-fp-light'
```

## Doc
Check the `*.d.ts`, all type definitions should be detailed and clear there.

## 后记
主要参考了[JavaScript ES6函数式编程入门经典](https://book.douban.com/subject/30180100/), 我自己尝试用 typescript 实现了一遍, 自己算是 ts 新手, 一开始的时候写的很痛苦(因为不想用 `any`), 也查阅了很多资料, 包括也去看了一些`lodash`的源码. 收获还是有的, 尤其泛型这块学到了很多. 当然里面很多类型声明肯定还是存在问题或不严谨的, 也欢迎指出