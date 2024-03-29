# Context (lexical environment)

Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

В JavaScript существует три типа контекстов выполнения:

- Глобальный контекст выполнения. Это базовый, используемый по умолчанию контекст выполнения. Если некий код находится не внутри какой-нибудь функции, значит этот код принадлежит глобальному контексту. Глобальный контекст характеризуется наличием глобального объекта, которым, в случае с браузером, является объект window, и тем, что ключевое слово this указывает на этот глобальный объект. В программе может быть лишь один глобальный контекст.

- Контекст выполнения функции. Каждый раз, когда вызывается функция, для неё создаётся новый контекст. Каждая функция имеет собственный контекст выполнения. В программе может одновременно присутствовать множество контекстов выполнения функций. При создании нового контекста выполнения функции он проходит через определённую последовательность шагов, о которой мы поговорим ниже.

- Контекст выполнения функции eval. Код, выполняемый внутри функции eval, также имеет собственный контекст выполнения. Однако функцией eval пользуются очень редко, поэтому здесь мы об этом контексте выполнения говорить не будем.

Перед выполнением JavaScript-кода создаётся контекст выполнения. В процессе его создания выполняются три действия:

Определяется значение this и осуществляется привязка this (this binding).
Создаётся компонент LexicalEnvironment (лексическое окружение).
Создаётся компонент VariableEnvironment (окружение переменных).

Концептуально контекст выполнения можно представить так:

```JavaScript
ExecutionContext = {
  ThisBinding = <this value>,
  LexicalEnvironment = { ... },
  VariableEnvironment = { ... },
}
```

[Подробно](https://habr.com/ru/companies/ruvds/articles/422089/)

[Подробно](https://discocode.ru/content/js/under-the-hood-js/call-stack)
