# utitily types

## Awaited

Awaited&lt;T&gt; - это специальный тип, который может быть использован для обозначения типа, который будет возвращен из асинхронной функции.

```TypeScript
async function getData(): Promise<string> {
    return 'hello';
}

let awaitedData: Awaited<ReturnType<typeof getData>>;
// теперь awaitedData может быть 'hello'
```

## Partial

Partial&lt;T&gt; - делает все свойства объекта типа T необязательными.

```TypeScript
interface Person {
  name: string;
  age: number;
}

let partialPerson: Partial<Person>;
// теперь partialPerson может быть { name?: string; age?: number; }
```

## Required

Required&lt;T&gt; - делает все свойства объекта типа T обязательными.

```TypeScript
interface Person {
  name?: string;
  age?: number;
}

let requiredPerson: Required<Person>;
// теперь requiredPerson может быть { name: string; age: number; }
```

## Readonly

Readonly&lt;T&gt; - делает все свойства объекта типа T доступными только для чтения.

```TypeScript
interface Point {
  x: number;
  y: number;
}

let readonlyPoint: Readonly<Point>;
// теперь readonlyPoint может быть { readonly x: number; readonly y: number; }
```

## Record

Record&lt;Keys, Type&gt; - создает тип, который является записью с ключами, определенными в первом параметре, и значениями типа, определенного во втором параметре.

```TypeScript
type Keys = 'a' | 'b' | 'c';
type RecordType = Record<Keys, number>;

let record: RecordType;
// теперь record может быть { a: number, b: number, c: number }
```

## Pick

Pick&lt;T, K extends keyof T&gt; - выбирает свойства объекта типа T с ключами, указанными в K.

```TypeScript
interface Person {
  name: string;
  age: number;
}

let pickedPerson: Pick<Person, 'name'>;
// теперь pickedPerson может быть { name: string; }
```

## Omit

Omit&lt;T, K extends keyof T&gt; - выбирает свойства объекта типа T, исключая те, которые указаны в K

```TypeScript
interface Person {
  name: string;
  age: number;
}

let omittedPerson: Omit<Person, 'age'>;
// теперь omittedPerson может быть { name: string; }
```

## Exclude

Exclude&lt;UnionType, ExcludedMembers&gt; - исключает определенные типы из объединенного типа.

```TypeScript
type A = 'a' | 'b' | 'c';
type B = Exclude<A, 'a' | 'b'>;
// теперь B это 'c'
```

## Extract

Extract&lt;Type, Union&gt; - извлекает из типа Type только те типы, которые присутствуют в Union.

```TypeScript
type A = 'a' | 'b' | 'c';
type B = 'a' | 'b';
type C = Extract<A, B>;
// теперь C это 'a' | 'b'
```

## NonNullable

NonNullable&lt;Type&gt; - извлекает тип из Type, исключая null и undefined.

```TypeScript
let value: string | null | undefined;
let nonNullableValue: NonNullable<typeof value>;
// теперь nonNullableValue это string
```

## Parameters

Parameters&lt;Type&gt; - извлекает типы аргументов функции Type.

```TypeScript
function foo(a: string, b: number) {}
type FooParameters = Parameters<typeof foo>;
// теперь FooParameters это [string, number]
```

## ConstructorParameters

ConstructorParameters&lt;Type&gt; - извлекает типы аргументов конструктора Type.

```TypeScript
class Foo {
    constructor(a: string, b: number) {}
}
type FooConstructorParameters = ConstructorParameters<typeof Foo>;
// теперь FooConstructorParameters это [string, number]
```

## ReturnType

ReturnType&lt;Type&gt; - извлекает тип возвращаемого значения функции Type.

```TypeScript
function foo(): string { return 'hello'; }
type FooReturnType = ReturnType<typeof foo>;
// теперь FooReturnType это string
```

## InstanceType

InstanceType&lt;Type&gt; - извлекает тип экземпляра класса Type.

```TypeScript
class Foo { x: number }
type FooInstance = InstanceType<typeof Foo>;
// теперь FooInstance это { x: number }
```

## ThisParameterType

ThisParameterType&lt;Type&gt; - извлекает тип this из функции Type.

```TypeScript
class Foo {
    x: number;
    method(this: this): void { }
}
type ThisType = ThisParameterType<Foo["method"]>;
// теперь ThisType это Foo
```

## OmitThisParameter

OmitThisParameter&lt;Type&gt; - определяет функцию без типа this.

```TypeScript
class Foo {
    x: number;
    method(this: this): void { }
}
type MethodType = OmitThisParameter<Foo["method"]>;
// теперь MethodType это () => void
```

## ThisType

ThisType&lt;Type&gt; - добавляет тип this к функции Type.

```TypeScript
class Foo {
    x: number;
    method(): void { }
}
type MethodType = ThisType<Foo["method"]>;
// теперь MethodType это (this: Foo) => void
```

## Управление регистром

Uppercase&lt;StringType&gt;, Lowercase&lt;StringType&gt;, Capitalize&lt;StringType&gt;, Uncapitalize&lt;StringType&gt; - это утилитные типы для манипуляции строками, которые изменяют регистр строки в соответствии с их именем.

```TypeScript
type Uppercased = Uppercase<'hello'>; // 'HELLO'
type Lowercased = Lowercase<'Hello'>; // 'hello'
type Capitalized = Capitalize<'hello'>; // 'Hello'
type Uncapitalized = Uncapitalize<'Hello'>; // 'hello'
```
