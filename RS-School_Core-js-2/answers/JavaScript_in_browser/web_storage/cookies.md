# Cookies

Куки – это небольшие строки данных, которые хранятся непосредственно в браузере. Они являются частью HTTP-протокола, определённого в спецификации RFC 6265.

Куки обычно устанавливаются веб-сервером при помощи заголовка Set-Cookie. Затем браузер будет автоматически добавлять их в (почти) каждый запрос на тот же домен при помощи заголовка Cookie.

Один из наиболее частых случаев использования куки – это аутентификация:

При входе на сайт сервер отсылает в ответ HTTP-заголовок Set-Cookie для того, чтобы установить куки со специальным уникальным идентификатором сессии («session identifier»).
Во время следующего запроса к этому же домену браузер посылает на сервер HTTP-заголовок Cookie.
Таким образом, сервер понимает, кто сделал запрос.
Мы также можем получить доступ к куки непосредственно из браузера, используя свойство document.cookie.

[Подробно](https://learn.javascript.ru/cookie)

[Подробно](https://doka.guide/js/cookie/)
