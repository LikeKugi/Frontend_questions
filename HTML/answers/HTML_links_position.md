# Почему хорошей практикой считается располагать &lt;link&gt; для подключения CSS стилей внутри тэга &lt;head&gt;, а &lt;script&gt; для подключения JS ставить перед - закрывающимся тэгом &lt;/body&gt;?

Размещение &lt;link&gt; внутри &lt;head&gt;

Размещение &lt;link&gt; внутри тега &lt;head&gt; необходимо при создании оптимизированного веб-сайта. Когда страница загружается впервые, HTML и CSS анализируются одновременно; HTML создает DOM (объектную модель документа), а CSS создает CSSOM (объектную модель CSS). И то, и другое необходимо для создания визуальных элементов на веб-сайте, что позволяет быстро определить время «первого значимого рисования». Этот прогрессивный рендеринг является категорией оптимизации сайтов, которые измеряются в их показателях эффективности. Размещение таблиц стилей в нижней части документа - это то, что препятствует прогрессивной загрузке страницы во многих браузерах. Некоторые браузеры блокируют рендеринг, чтобы избежать перерисовки элементов страницы, если ее стили изменятся. Все это время пользователь будет пялиться на пустую белую страницу. В других случаях может возникать мерцание нестилизованного содержимого (FOUC), на котором может отображаться веб-страница без применения стилей.

Размещение &lt;script&gt; прямо перед &lt;/body&gt;

Теги &lt;script&gt; блокируют отрисовку HTML на то время, пока они скачиваются и исполняются. Размещение скриптов внизу позволяет сперва распарсить и показать пользователю весь HTML.

Исключением является случай, когда в вашем скрипте содержится document.write(). Но на сегодняшний день его использование не считается хорошей практикой. К тому же, расположение скриптов внизу разметки означает, что браузер не может начать их скачивать до тех пор, пока не отрисован весь документ. Единственным рабочим способом, при котором &lt;script&gt; будет расположен внутри &lt;head&gt;, является добавление атрибута defer.
