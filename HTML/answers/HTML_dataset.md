# Для чего используется элемент &lt;datalist&gt;?

HTML-элемент &lt;datalist&gt; содержит набор опций (&lt;option&gt;), доступных для выбора. Выбранное значение будет установлено для элемента &lt;input&gt;, с атрибутом list.

```HTML
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```
