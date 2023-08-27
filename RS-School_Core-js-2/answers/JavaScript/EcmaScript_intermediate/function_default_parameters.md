# Function default parameters

Параметры по умолчанию позволяют задавать формальным параметрам функции значения по умолчанию в случае, если функция вызвана без аргументов, или если параметру явным образом передано значение undefined.

```JavaScript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```
