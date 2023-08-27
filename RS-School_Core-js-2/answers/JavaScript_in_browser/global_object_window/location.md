# Location

Интерфейс Location представляет собой адрес (URL) объекта, с которым он связан. Его модификации отражаются на родительском объекте. Интерфейсы Document и Window имеют подобный Location, к которому можно получить доступ через Document.location и Window.location соответственно.

## Свойства

- Location.href

DOMString, содержащий URL целиком. При изменении, соответствующий документ переходит на новую страницу.

- Location.protocol

DOMString, содержащий протокол текущего URL, включая ':'.

- Location.host

DOMString, содержащий хост, а именно имя хоста, ':' и порт.

- Location.hostname

DOMString, содержащий домен текущего URL.

- Location.port

DOMString, содержащий номер порта текущего URL.

- Location.pathname

DOMString, содержащий первый '/' после хоста с последующим текстом URL.

- Location.search

DOMString, содержащий '?' с последующими параметрами URL.

- Location.hash

DOMString, содержащий '#' с последующим идентификатором.

- Location.username

DOMString, содержащий имя пользователя, указанное перед именем домена.

- Location.password

DOMString, содержащий пароль, указанный перед именем домена.

- Location.origin Только для чтения
  Возвращает DOMString, содержащий протокол, хост и порт текущего URL.

## Методы

- Location.assign()

Загружает ресурс по URL, указанному в качестве параметра.

- Location.reload()

Перезагружает ресурс по текущему URL. Единственный опциональный параметр Boolean при значении true указывает, что страница должна быть заново загружена с сервера, при значении false страница может быть загружена из кеша.

- Location.replace()

Заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от assign() в том, что при использовании replace() текущая страница не будет сохранена в History, и пользователь не сможет использовать кнопку назад, чтобы вернуться к ней.

- Location.toString()

Возвращает DOMString, содержащий URL целиком. Это синоним URLUtils.href, однако он не может использоваться для изменения значения.

```JavaScript
// Этот пример создаёт ссылку и использует её свойство href
// Корректная альтернатива - использовать document.location или window.location текущего URL
var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // (пустой - https подразумевает порт 443)
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org
```

[Дока](https://doka.guide/js/window-location/)
