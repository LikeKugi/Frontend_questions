# Что такое категории контента в HTML5?

&gt; В HTML5 контент страницы можно разделить на смысловые группы, которые характеризуют содержимое веб-страницы. Эти группы получили название контентных моделей (content model). Каждая модель описывает тип содержимого элемента. Содержимым элемента является текст и дочерние элементы. Элемент может принадлежать как к одной, так и к нескольким категориям.

## В HTML5 различают следующие категории контента:

- Метаданные (Meta Data)

К метаданным относят элементы, которые содержат дополнительную информацию об HTML-документе, связывают его с другими документами (например, таблицами стилей css), определяют внешний вид или поведение контента на странице. На странице метаданные не отображаются.

Элементами метаданных являются: &lt;base&gt; , &lt;link&gt; , &lt;meta&gt;, &lt;noscript&gt;, &lt;script&gt;, &lt;style&gt;, &lt;template&gt; и &lt;title&gt;.

---

- Потоковый контент (Flow)

К потоковому содержимому относят большинство элементов, которые используются в теле документа (между тегами &lt;body&gt;&lt;/body&gt;) или веб-приложения относятся к потоковому контенту.

&lt;a&gt;, &lt;abbr&gt;, &lt;address&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;audio&gt;, &lt;b&gt;, &lt;bdi&gt;, &lt;bdo&gt;, &lt;blockquote&gt;, &lt;br&gt;, &lt;button&gt;, &lt;canvas&gt;, &lt;cite&gt;, &lt;code&gt;, &lt;data&gt;, &lt;datalist&gt;, &lt;del&gt;, &lt;details&gt;, &lt;dfn&gt;, &lt;dialog&gt;, &lt;div&gt;, &lt;dl&gt;, &lt;em&gt;, &lt;embed&gt;, &lt;fieldset&gt;, &lt;figure&gt;, &lt;footer&gt;, &lt;form&gt;, &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;, &lt;header&gt;, &lt;hr&gt;, &lt;i&gt;, &lt;iframe&gt;, &lt;img&gt;, &lt;input&gt;, &lt;ins&gt;, &lt;kbd&gt;, &lt;label&gt;, &lt;main&gt;, &lt;map&gt;, &lt;mark&gt;, &lt;menu&gt;, &lt;meter&gt;, &lt;nav&gt;, &lt;noscript&gt;, &lt;object&gt;, &lt;ol&gt;, &lt;output&gt;, &lt;p&gt;, &lt;picture&gt;, &lt;pre&gt;, &lt;progress&gt;, &lt;q&gt;, &lt;ruby&gt;, &lt;s&gt;, &lt;samp&gt;, &lt;script&gt;, &lt;section&gt;, &lt;select&gt;, &lt;small&gt;, &lt;span&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;svg&gt;, &lt;table&gt;, &lt;template&gt;, &lt;textarea&gt;, &lt;time&gt;, &lt;u&gt;, &lt;ul&gt;, &lt;var&gt;, &lt;video&gt;, &lt;wbr&gt;.

Указанные ниже элементы также относят к потоковым, но только при наличии определенных условий:

- &lt;area&gt; только внутри элемента &lt;map&gt;
- &lt;link&gt; при наличии атрибута itemprop
- &lt;meta&gt; при наличии атрибута itemprop
- &lt;style&gt; при наличии атрибута scoped

---

- Секционный контент (Sectioning)

К секционному контенту относятся элементы, которые создают отдельные секции в структуре документа, существующие независимо друг от друга, такие как заголовочная часть (header), нижний колонтитул (footer) и т.д. Отметим также, что у каждой самостоятельной секции может быть свой заголовок и оглавление (outline).

Элементами секционного содержимого являются &lt;article&gt;, &lt;aside&gt;, &lt;nav&gt; и &lt;section&gt;.

---

- Заголовочный контент (Heading)

Заголовочный контент содержит элементы, определяющие заголовки разделов, которые размечены элементами секционного контента или же подразумеваются исходя из содержания заголовка.

К элементам заголовочного контента относятся &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt; и &lt;hgroup&gt;.

---

- Текстовой контент (Phrasing)

К текстовому контенту относятся элементы, определяющие текст и его формат, а именно: &lt;abbr&gt;, &lt;audio&gt;, &lt;b&gt;, &lt;bdo&gt;, &lt;br&gt;, &lt;button&gt;, &lt;canvas&gt;, &lt;cite&gt;, &lt;code&gt;, &lt;command&gt;, &lt;data&gt;, &lt;datalist&gt;, &lt;dfn&gt;, &lt;em&gt;, &lt;embed&gt;, &lt;i&gt;, &lt;iframe&gt;, &lt;img&gt;, &lt;input&gt;, &lt;kbd&gt;, &lt;keygen&gt;, &lt;label&gt;, &lt;mark&gt;, &lt;math&gt;, &lt;meter&gt;, &lt;noscript&gt;, &lt;object&gt;, &lt;output&gt;, &lt;progress&gt;, &lt;q&gt;, &lt;ruby&gt;, &lt;samp&gt;, &lt;script&gt;, &lt;select&gt;, &lt;small&gt; &lt;span&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;svg&gt;, &lt;textarea&gt;, &lt;time&gt;, &lt;var&gt;, &lt;video&gt; и &lt;wbr&gt;.

Указанные ниже элементы также относят к текстовым при наличии определенных условий:

- &lt;a&gt;, если содержит только текстовой контент
- &lt;area&gt; только внутри элемента &lt;map&gt;
- &lt;del&gt;, если содержит только текстовой контент
- &lt;ins&gt;, если содержит только текстовой контент
- &lt;link&gt; при наличии атрибута itemprop
- &lt;map&gt;, если содержит в себе только текстовой контент
- &lt;meta&gt; при наличии атрибута itemprop

---

- Встроенный контент (Embedded)

Встроенным называется контент, импортируемый в HTML-документ из других ресурсов. Некоторые элементы могут содержать альтернативный контент, который будет отображаться, если внешний ресурс не может быть использован (например, в случае, если браузер не поддерживает формат видео).

Встроенная контентная модель содержит следующие элементы: &lt;audio&gt;, &lt;canvas&gt;, &lt;embed&gt;, &lt;iframe&gt;, &lt;img&gt;, &lt;math&gt;, &lt;object&gt;, &lt;picture&gt;, &lt;svg&gt;, &lt;video&gt;.

---

- Интерактивный контент (Interactive)

Интерактивными считаются элементы, разработанные для взаимодействия с пользователем. К данной контентной модели относятся элементы &lt;a&gt;(если присутствует атрибут href), &lt;button&gt;, &lt;details&gt;, &lt;embed&gt;, &lt;iframe&gt;, &lt;keygen&gt;, &lt;label&gt;, &lt;select&gt; и &lt;textarea&gt;.

Указанные ниже элементы также относят к интерактивным при наличии определенных условий:

-&lt;audio&gt;, если указан атрибут controls -&lt;img&gt;, если указан атрибут usemap -&lt;input&gt;, если атрибут type не скрыт (hidden) -&lt;menu&gt;, если значением атрибута type является toolbar -&lt;object&gt;, если указан атрибут usemap -&lt;video&gt;, если указан атрибут controls

---

- Явный контент (Palpable)

Элементы контентных моделей, которые позволяют содержать в себе любой потоковый или текстовой контент, должны иметь как минимум один дочерний блок, который будет явным контентом и у которого не будет атрибута со значением hidden.

Это требование не является обязательным, бывают случаи, где элемент может быть пустым. Например, элемент может быть заполняться содержанием от действия стороннего скрипта.

---

- Вторичные категории контента

Помимо основных контентных моделей существуют также вторичные категории. Это элементы поддержки скриптов , &lt;script&gt; и &lt;template&gt;, которые служат для внедрения скриптов, путем либо содержания кода скрипта напрямую, либо указания данных, которые будут использованы скриптами. Элементами поддержки скриптов являются: Элементы &lt;blockquote&gt;, &lt;body&gt;, &lt;details&gt;, &lt;dialog&gt;, &lt;fieldset&gt;, &lt;figure&gt; и &lt;td&gt; относят к корневым секционным. В категорию прозрачной контентной модели входят элементы &lt;a&gt;, &lt;audio&gt;, &lt;canvas&gt;, &lt;del&gt;, &lt;ins&gt;, &lt;map&gt;, &lt;object&gt; и &lt;video&gt;, которые наследуют тип содержимого родительского элемента. Помимо собственного контента они могут содержать контент, допустимый в их родительском элементе.
