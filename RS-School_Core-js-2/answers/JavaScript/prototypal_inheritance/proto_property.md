# `__proto__` property

\_\_proto\_\_ и prototype - это всё свойства объекта. Любой объект в javaScript имеет свойство \_\_proto\_\_ Но свойство prototype имеют только функции конструкторы или классы.

Каждое свойство \_\_proto\_\_ ссылается на prototype класса с помощью которого был создан объект. Например мы создаем строку и \_\_proto\_\_ этой строки будет ссылаться на функцию с помощью которой она была создана.

\_\_proto\_\_ хранит в себе свойства и методы prototype именно поэтому мы можем использовать методы и свойства на объекте даже если он их не имеет.

\_\_proto\_\_ Есть у всех, поэтому классы и функции имеющие prototype тоже имеют \_\_proto\_\_
Например:

```JavaScript
console.dir(String.prototype.__proto__); // Object
// Прототип любой строки ссылается на объект, так как все в js объекты. Это будет касаться любого типа данных.
console.log(Function.prototype.__proto__); // Object
console.log(Array.prototype.__proto__); // Object
// у всех них прото ссылается на  Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// в свою очередь __proto__ объекта ссылается на null - это конечная станция.
console.dir(Object.prototype.__proto__); // null
```

Так же если мы создадим свой класс и с помощью него сделаем экземпляр, то \_\_proto\_\_ этого экземпляра будет ссылаться на prototype нашего класса.

[Подробно](https://discocode.ru/content/js/advanced-js/prototype-and_proto_)
