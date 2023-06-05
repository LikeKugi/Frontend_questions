# Какой тэг использовать для того, что бы сверстать кнопку?

Кнопки являются одним из самых понятных и интуитивных элементов интерфейса. По их виду сразу становится понятно, что единственное действие, которое с ними можно производить — это нажимать на них. За счёт этой особенности кнопки часто применяются в формах, особенно при их отправке и очистке.

Кнопку на веб-странице можно создать двумя способами — с помощью тега &lt;input&gt; и тега &lt;button&gt;.

```HTML
<!-- Simple buttons -->
<button>Button</button>
<input type="button" value=" Press me ">

<!-- Form buttons -->
<input type="submit" value="Submit">
<input type="reset" value="Reset">

<button type="submit">Submit</button>
<button type="reset">Reset</button>

<!-- Link button with CSS styles -->
<a herf='#'>Button</a>
```
