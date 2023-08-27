# Know how `for..of` loop works

Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

Для for...of обход происходит в соответствии с тем, какой порядок определён в итерируемом объекте.

```JavaScript
// создаем итерируемый объект
const iterableObj = {

    // метод iterator
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// перебираем итерируемый объект с помощью for...of
for (const i of iterableObj) {
 console.log(i);
}
```

Генератор тоже можно перебрать с помощью for...of, потому что генератор — итерируемый объект.

```JavaScript
// функция-генератор
function* generatorFunc() {

    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// перебор генератора
for (let value of obj) {
    console.log(value);
}
```
