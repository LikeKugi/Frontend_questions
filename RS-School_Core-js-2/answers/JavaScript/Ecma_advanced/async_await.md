# async/await

Существует специальный синтаксис для работы с промисами, который называется «async/await».

У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.

```JavaScript
async function f() {
  return 1;
}

f().then(alert); // 1
```

Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

```JavaScript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
}

f();
```

await нельзя использовать в обычных функциях
Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку

await нельзя использовать на верхнем уровне вложенности
Программисты, узнав об await, часто пытаются использовать эту возможность на верхнем уровне вложенности (вне тела функции). Но из-за того, что await работает только внутри async–функций, так сделать не получится:

```JavaScript
// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
```

Можно обернуть этот код в анонимную async–функцию, тогда всё заработает:

```JavaScript
(async () => {
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
...
})();
```

await работает с «thenable»–объектами
Как и promise.then, await позволяет работать с промис–совместимыми объектами. Идея в том, что если у объекта можно вызвать метод then, этого достаточно, чтобы использовать его с await.

[Подробно](https://learn.javascript.ru/async-await)

[Подробно](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function)

[Подробно](https://doka.guide/js/async-await/)
