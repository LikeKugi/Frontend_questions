# generics

Дженерики, или Generic Types, — обобщенные типы. Они нужны для описания похожих, но отличающихся какими-то характеристиками типов. Мы описываем общую структуру, а конкретную уже определяет пользователь дженерика. Дженерик — это каркас, внутренности которого заполняет разработчик. Программист, который описывает обобщенный тип, никогда не знает, что именно туда решит записать тот, кто будет этот тип использовать.

Дженерики позволяют писать более универсальный код, способный работать с любым типом. С их помощью можно написать одну функцию, класс либо интерфейс, работающие с несколькими типами.

К примеру, обобщённую функцию можно использовать для создания массива любого типа:

```TypeScript
function createArray<T>(length: number, value: T): Array<T> {
 let result = [];
 for (let i = 0; i < length; i++) {
 result[i] = value;
 }
 return result;
}
let names = createArray<string>(3, "Bob");
let numbers = createArray<number>(3, 0);
```

С помощью дженериков также можно создать класс, способный работать с любым типом данных:

```TypeScript
class GenericNumber<T> {
 zeroValue: T;
 add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```
