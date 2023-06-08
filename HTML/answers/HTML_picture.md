# Для чего используется элемент &lt;picture&gt;?

HTML-элемент &lt;picture&gt; служит контейнером для одного или более элементов &lt;source&gt; и одного элемента &lt;img&gt; для обеспечения оптимальной версии изображения для различных размеров экрана.

```HTML
<picture>
 <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
 <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```
