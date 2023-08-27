# function types

В javascript функции определяются с помощью ключевого слова function, TypeScript также определяет функцию с помощью ключевого слова function, но при этом добавляет дополнительные возможности по работе с функциями. В частности, теперь мы можем определить тип передаваемых параметров и тип возвращаемого значения.

```TypeScript
// определение функции
function add(a: number, b: number){
    let result = a + b;
    console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25
```

Функция может возвращать значение определенного типа, который еще называется типом функции. Возвращаемый тип функции ставится после списка параметров через двоеточие:

```TypeScript
function add(a: number, b: number): number {
    return a + b;
}
let result = add(1, 2);
console.log(result);
```

Если функция ничего не возвращает, то указывается тип void:

```TypeScript
function add(a: number, b: number): void {
    console.log(a + b);
}
add(10, 20);
```

В typescript при вызове в функцию должно передаваться ровно столько значений, сколько в ней определено параметров. Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные. Необязательные параметры должны быть помечены вопросительным знаком ?. Причем необязательные параметры должны идти после обязательных:

```TypeScript
function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася
```

Параметры позволяют задать начальное значение по умолчанию. И если для такого параметра не передается значение, то он использует значение по умолчанию:

```TypeScript
function getName(firstName: string, lastName: string="Иванов") {

    return firstName + " " + lastName;
}

let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася Иванов
```
