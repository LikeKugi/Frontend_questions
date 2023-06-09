# Что такое &lt;svg&gt; и &lt;canvas&gt;? Разница между &lt;canvas&gt; и &lt;svg&gt;?

SVG и canvas — это технологии, которые можно использовать для рисования чего-либо на веб-страницах.

- canvas

  > Элемент canvas предоставляет скриптам растровый холст, зависящий от разрешения, который можно использовать для рендеринга графики, игровой графики, искусства или других визуальных изображений на лету.

- svg

  > SVG расшифровывается как Scalable Vector Graphics (масштабируемая векторная графика).

  > SVG - это язык для описания двумерной графики. Как самостоятельный формат или в сочетании с другими XML, он использует синтаксис XML. При смешении с HTML5 используется синтаксис HTML5.

  > Рисунки SVG могут быть интерактивными и динамичными. Анимация может быть определена и запущена как декларативно (т.е. путем встраивания элементов анимации SVG в содержимое SVG), так и с помощью скриптов.

## Для чего HTML5 Canvas отлично подходит

Элвин Ван провел сравнительный анализ Canvas и SVG с точки зрения производительности как в отношении количества рисуемых объектов, так и в отношении размера объектов или самого холста. Он изложил свои результаты следующим образом:

> В целом, лишние затраты на рендеринг DOM становятся более ощутимыми при жонглировании сотнями, а то и тысячами объектов; в этом случае, Canvas является явным победителем. Однако и Canvas, и SVG инвариантны к размерам объектов. При окончательном подведении итогов Canvas явно выигрывает в производительности.

Исходя из того, что мы знаем о Canvas, особенно о его превосходной производительности при рисовании большого количества объектов, вот несколько возможных случаев, когда он может быть уместен и даже предпочтительнее SVG.

- Игры и творческое искусство
- Прослеживание/трассировка лучей
- Рисование значительного количества объектов на небольшой поверхности
- Замена пикселей в видео

## Для чего не так хорош HTML5 Canvas?

- Масштабируемость
- Доступность
- Отсутствие зависимости от JavaScript

[статья на хабре](https://habr.com/ru/companies/ruvds/articles/476292/)
