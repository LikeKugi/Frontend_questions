# Reference Type & losing `this`

При передаче методов объекта в качестве колбэков, например для setTimeout, возникает известная проблема – потеря this.

## Решение 1: сделать функцию-обёртку

Самый простой вариант решения – это обернуть вызов в анонимную функцию, создав замыкание:

```JavaScript
let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000);
```

## Решение 2: привязать контекст с помощью bind

В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.

```JavaScript
let user = {
  firstName: "Вася"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // Вася
```

## that/self объявить и использовать новую переменную that/self, которая будет хранить значение this из метода

```JavaScript
doSomething(){
   let that = this;
   setTimeout(function doAnotherThing(){
      that.numbers.forEach(function log(number){
         console.log(number);
         console.log(that.token);
      });
    }, 100);
  }
```

## Стрелочная функция даёт нам еще один способ решения этой проблемы.

```JavaScript
doSomething(){
   setTimeout(() => {
     this.numbers.forEach(number => {
         console.log(number);
         console.log(this.token);
      });
    }, 100);
  }
```

Стрелочные функции не создают собственный контекст для this, а используют значение this окружающего контекста. В примере выше она использует значение this родительской функции.
