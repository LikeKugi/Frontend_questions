# Be able to compare `arguments` and `rest parameters`

Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.

```JavaScript
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");
```

Остаточные параметры могут быть обозначены через три точки .... Буквально это значит: «собери оставшиеся параметры и положи их в массив».

Например, соберём все аргументы в массив args:

```JavaScript
function sumAll(...args) { // args — имя массива
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.

Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).

К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.

Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.

Стрелочные функции не имеют "arguments"
Если мы обратимся к arguments из стрелочной функции, то получим аргументы внешней «нормальной» функции.

```JavaScript
function f() {
  let showArg = () => alert(arguments[0]);
  showArg(2);
}

f(1); // 1
```