# History API

DOM-объект Window предоставляет доступ к истории текущей сессии браузера (не путать с историей браузерных расширений (en-US)) через объект history. Он предоставляет полезные методы и свойства, которые позволяют переходить назад и вперёд по истории пользователя и манипулировать её содержимым.

Перемещение вперёд и назад

```JavaScript
window.history.back(); // Back
window.history.forward(); // Forward
```

Вы можете использовать метод go() для загрузки конкретной страницы из истории сессии, определяемой её позицией относительно текущей страницы. Относительная позиция текущей страницы равняется 0.

```JavaScript
window.history.go(-1); // Back
window.history.go(1); // Forward
```

[Подробно](https://developer.mozilla.org/ru/docs/Web/API/History)

[Подробно](https://developer.mozilla.org/ru/docs/Web/API/History_API)

[Подробно](https://developer.mozilla.org/ru/docs/Web/API/History_API/Working_with_the_History_API)

[Подробно](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator)

[Дока](https://doka.guide/js/window-history/)
[Дока](https://doka.guide/js/window-navigator/)
