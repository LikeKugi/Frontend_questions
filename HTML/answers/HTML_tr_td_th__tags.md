# Для чего используются тэги &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;?

HTML тег &lt;tr&gt; (table row) используется для определения строк в таблице. Он может содержать один или несколько тегов &lt;th&gt; (создает ячейки с заголовками) или &lt;td&gt; (создает ячейки с данными таблицы).

Тег &lt;tr&gt; используется только внутри таблиц (между открывающим тегом &lt;table&gt; и закрывающим &lt;/table&gt;) и может содержать только теги для создания ячеек, любое содержимое таблицы (текст, списки, картинки и прочие HTML-элементы) помещается в пределы тегов &lt;td&gt; и &lt;th&gt;, которые определяют содержимое ячеек.

Примечание: все строки таблицы будут содержать такое же количество ячеек, которое содержится в самой длинной из всех строк. Браузер автоматически добавит пустые ячейки в строки с меньшим количеством ячеек.