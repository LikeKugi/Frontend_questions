# Know difference between parameters passing by value and by reference

Параметры в вызове функции — это аргументы функции.

## Примитивы передаются по значению

Примитивы передаются по значению. Т.е. функция знает только значение аргумента, но не его расположение.

Если функция изменит значение примитива, то это не изменит оригинальное значение параметра.

Изменение аргумента не заметно (не отражается) за пределами функции.

## Объекты передаются по ссылке

В JavaScript ссылки на объект являются значениями.

Из-за этого, объекты ведут себя так, как будто они передаются по ссылке. Т. е. если функция изменит какое-нибудь свойство объекта, то она изменит и его оригинальное значение.

Изменение свойства объекта заметно (отражается) за пределами функции.
