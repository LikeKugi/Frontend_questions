# Что такое свойство valueAsNumber?

В HTML5 представлено свойство JavaScript valueAsNumber для полей формы (в частности: number, date, range). Оно возвращает значение в виде числа, а не строки, то есть нам больше не нужно использовать parseInt или parseFloat, и оператор + складывает, а не склеивает.

```HTML
<form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
  <input name="a" id="a" type="number" step="any"> +
  <input name="b" id="b" type="number" step="any"> =
  <output name="o" for="a b"></output>
</form>
```
