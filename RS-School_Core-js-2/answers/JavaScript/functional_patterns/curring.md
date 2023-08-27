# Carrying and partial functions

Каррирование – продвинутая техника для работы с функциями. Она используется не только в JavaScript, но и в других языках.

Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как `f(a, b, c)`, а как `f(a)(b)(c)`.

Каррирование не вызывает функцию. Оно просто трансформирует её.

```JavaScript
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    }
  };

}
```

[Подробно](https://proglib.io/p/karrirovanie-i-funkcii-vysshego-poryadka-v-javascript-za-5-prostyh-shagov-2021-10-15)
