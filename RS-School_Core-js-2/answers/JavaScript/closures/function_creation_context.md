# Understand function creation context (lexical environment)

Контекст выполнения функции — это одно из фундаментальных понятий в JavaScript. Контекстом еще часто называют значение переменной this внутри функции. Также иногда путают понятия «контекст выполнения» и «область видимости» — это не одно и то же.

Переменная this
Значение переменной this чаще всего определяется тем, как вызывается функция. Когда функция вызывается как метод объекта, переменная this приобретает значение ссылки на объект, который вызывает этот метод:

```JavaScript

var user = {
    name: 'John Smith',
    getName: function() {
        console.log(this.name);
    }
};
user.getName();   // John Smith
```

Тот же принцип применяется при вызове функции с оператором new, чтобы создать экземпляр объекта. При вызове таким образом, в качестве значения this в рамках функции будет установлена ссылка на вновь созданный объект, например:

```JavaScript
function test(){
    alert(this);
}
test();      // window
new test();  // test
```

[Подробно](https://proweb63.ru/help/js/kontekst-vyipolneniya-funkczii-v-javascript)
