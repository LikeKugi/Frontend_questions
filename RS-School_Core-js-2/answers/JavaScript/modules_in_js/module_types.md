# Modules types (AMD, ES6, CommonJS, UMD).

В современном JavaScript осталось два основных стандарта модульных систем. Это CommonJS, которая является основной для платформы Node.js, и ESM (ECMAScript 6 модули), которая была принята как стандарт для языка и внесена в спецификацию ES2015.

## ESM-модули

В случае, когда необходимо экспортировать несколько сущностей из модуля, применяется именованный экспорт. Он выполняется с помощью инструкции export.

`export` можно использовать в момент объявления функции, переменной или класса.

```JavaScript
export function counter() { /* ... */ }

export const getCurrentDate = () => { /* ... */ }

export const awesomeValue  = 42;

export class User { /* ... */ }
```

Для больших модулей удобнее использовать группированный экспорт, это позволяет наглядно увидеть все экспортируемые сущности внутри модуля.

```JavaScript
function counter() { /* ... */ }

const awesomeValue = 42;

export { counter, awesomeValue };
```

Чтобы импортировать какой-либо метод, необходимо воспользоваться инструкциeй import, указав интересующие части модуля и путь до него:

```JavaScript
import { counter, awesomeValue } from './modulePath/index.js';

counter();
console.log('Response:', awesomeValue);
```

В случае, когда из файла модуля экспортируется только одна сущность, удобнее использовать экспорт по умолчанию. Для этого необходимо добавить default после инструкции export:

```JavaScript
function counter() {  /* ... */ }

export default counter;
```

```JavaScript
/**
  Можно использовать любое имя для импортируемой переменной, в связи с тем,
  что отсутствует привязка к наименованию внутри модуля
*/
import rainbowCounter from './modulePath/index.js';

rainbowCounter();
```

Реэкспорт. Существует сокращенный синтаксис для реэкспорта модулей. Это бывает полезно, когда нужно собрать модули из разных файлов в одном экспорте:

```JavaScript
export { counter, awesomeValue } from './modulePath/index.js';
```

## Использование модулей в браузере

Современные браузеры нативно поддерживают модули. Для того, чтобы браузер понимал, что мы экспортируем не просто исполняемый JS-файл, а модуль, необходимо в тэг script, где импортируется модуль, добавить атрибут type="module".

## CommonJS

Экспорт. Для экспорта в CommonJS используются глобальные объекты module и exports. Для этого необходимо просто добавить новое поле в объект exports.

```JavaScript
module.exports.counter = function () { /* ... */ }

module.exports.awesomeValue = 42;

module.exports.getCurrentDate = () => {/* ... */}

module.exports.User = class User { /* ... */ }
```

Для удобства экспорта части фунциональности в глобальной области существует переменная exports, которая является ссылкой на module.exports. Поэтому возможен и такой синтаксис экспорта:

```JavaScript
exports.counter = function () { /* ... */ }

exports.awesomeValue = 42;
```

В CommonJS cуществует что-то схожее с импортом по умолчанию, для этого необходимо просто присвоить module.exports значению экспортируемой функции:

```JavaScript
module.exports = function () { /* ... */ }
```

Стоит обратить внимание, что если были экспортированы части модуля, они затрутся и будет экспортировано только последнее значение module.exports:

```javaScript
exports.counter = function () { /* ... */ }

exports.awesomeValue = 42;

module.exports = {};

// counter и awesomeValue не будут экспортированы
```

Импорт. Для импорта необходимо воспользоваться конструкцией require() и указать путь до модуля:

```JavaScript
const loadedModule = require('./modulePath/index.js');

loadedModule.counter()
console.log(loadedModule.awesomeValue);
```

Можно воспользоваться деструктуризацией и получить значение необходимой функции сразу после импорта:

```JavaScript
const { counter, awesomeValue  } = require('./modulePath/index.js');

counter()
console.log(awesomeValue);
```

[Подробно](https://tproger.ru/translations/js-modules-formats-loaders-builders/)
