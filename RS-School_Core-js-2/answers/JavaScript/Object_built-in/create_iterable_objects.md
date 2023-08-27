# Know how to create iterable objects, Symbol.iterator usage.

Перебираемые (или итерируемые) объекты – это обобщение массивов. Концепция, которая позволяет использовать любой объект в цикле `for..of`.

- Технически итерируемые объекты должны иметь метод Symbol.iterator.

  - Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.
  - Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any}, где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.

- Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.
- Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.
- Строковый итератор знает про суррогатные пары.

```JavaScript
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
```

```JavaScript
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
```
