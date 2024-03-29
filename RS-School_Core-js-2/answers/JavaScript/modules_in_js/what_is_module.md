# What is module / module pattern? For what purposes they were created?

Паттерн проектирования «Модуль» позволяет скрывать приватную информацию в замыканиях, давая доступ лишь к тому, что решил сделать общедоступным разработчик.

Паттерн "Модуль" базируется на замыканиях и состоит из двух компонентов: внешняя функция, которая определяет лексическое окружение, и возвращаемый набор внутренних функций, которые имеют доступ к этому окружению.

Управлять областью видимости переменных в JavaScript можно, пользуясь паттерном «Модуль». Для того чтобы создать приватную область видимости, можно воспользоваться замыканием. Как известно, функции создают собственные области видимости, содержимое которых отделено от глобальной области видимости:

```JavaScript
(function () {
 // здесь находится приватная область видимости
})();
```

[Подробно](https://largescalejs.ru/module-pattern/)
