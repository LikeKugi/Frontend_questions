# `prototype` property

Новые объекты могут быть созданы с помощью функции-конструктора new F().

Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

```JavaScript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

У каждой функции по умолчанию уже есть свойство "prototype".

По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

[Подробно](https://learn.javascript.ru/function-prototype)
