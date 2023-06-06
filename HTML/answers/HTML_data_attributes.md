# Для чего используют data-атрибуты?

Дата-атрибут — это пользовательский атрибут на элементе, название которого начинается с data-, например data-test. Дата атрибуты используются, чтобы хранить значения на элементах в HTML.

```HTML
<!-- Этим атрибутам необязательно назначать значения -->
<div data-foo></div>

<!-- ...но они могут содержать значения -->
<div data-size="large"></div>

<!-- Тут мы имеем дело с HTML, поэтому надо экранировать HTML-код, который, возможно, решено будет записать в атрибут -->
<li data-prefix="Careful with HTML in here."><li>

<!-- Если надо - можно создавать длинные имена атрибутов -->
<aside data-some-long-attribute-name><aside>
```