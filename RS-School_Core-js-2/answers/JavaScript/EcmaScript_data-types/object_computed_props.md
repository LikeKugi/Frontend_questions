# Object computed props

Синтаксис `get` связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.

Начиная с ECMAScript 2015, синтаксис объявления объектов также поддерживает вычисляемые имена свойств. Это позволяет добавлять в скобки [] выражение, которое будет вычислено, как имя свойства.

```JavaScript
let name = 'fullName';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Вычисляемое свойство
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe
```

```JavaScript
// Вычисляемое имя свойства (ES2015)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = "size";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```
