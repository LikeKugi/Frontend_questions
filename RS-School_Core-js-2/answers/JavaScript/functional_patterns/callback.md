# Callback

Простыми словами: коллбэк — это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия. (отсюда и название: callback — функция обратного вызова).

```JavaScript
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

Колбэки часто используются для продолжения выполнения кода после завершения асинхронной операции - они называются асинхронными колбэками.

```JavaScript
async function pageLoader(callback) {
  const data = await fetch("/ru/docs/Glossary/Callback_function");
  callback(data);
}

function onPageLoadingFinished(pageData) {
  console.log("Page was sucessfully loaded!");
  console.log("Response:");
  console.log(pageData);
}

pageLoader(onPageLoadingFinished);
```

[CallbackHell](http://callbackhell.ru/)
