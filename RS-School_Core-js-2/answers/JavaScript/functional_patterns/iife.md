# Know IIFE pattern

IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

```javaScript
(function () {
    statements
})();
```

Это тип выражений, также известный как Self-Executing Anonymous Function, который состоит из двух основных частей.

- Первая - это сама анонимная функция с лексической областью видимости, заключённым внутри Оператора группировки (). Благодаря этому переменные IIFE замыкаются в его пределах, и глобальная область видимости ими не засоряется.
- Вторая часть создаёт мгновенно выполняющееся функциональное выражение () , благодаря которому JavaScript-движок выполняет функцию напрямую.
