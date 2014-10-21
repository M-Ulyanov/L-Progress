L-Progress
==========

Простой плагин прогресса загрузки

###Параметры
<table>
    <tr>
      <th>Параметр</th>
      <th>Назначение</th>
	  <th>По умолчанию</th>
    </tr>
	<tr>
		<td>loadReady</td>
		<td>Старт при загрузки страницы</td>
		<td>false</td>
	</tr>
	<tr>
		<td>startValue</td>
		<td>Начальное значение</td>
		<td>0</td>
	</tr>
	<tr>
		<td>maxValue</td>
		<td>Максимальное значение</td>
		<td>100</td>
	</tr>
	<tr>
		<td>animateSpeed</td>
		<td>Скорость изменения в мс</td>
		<td>1200</td>
	</tr>
	<tr>
		<td>decimals</td>
		<td>Количество знаков после запятой</td>
		<td>0</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Ширина прогрессбара</td>
		<td>300</td>
	</tr>
	<tr>
		<td>color</td>
		<td>Цвет полосы</td>
		<td>64B82D</td>
	</tr>
</table>

###Использование
1.Подключить jQuerу<br>
2.Вызвать плагин и задать нужные параметры:<br>
`
$('elem').lprogress({
	loadReady: true
});
`

###Кроссбраузерность
Все современные дескопные браузеры<br>
IE8+<br>
Мобильные устройства<br>

###Демонстрация
Пример работы можно увидеть <a target="_blank" href="http://m-ulyanov.github.io/l-progress/">здесь</a>

###Связаться с автором
Предложения по улучшению и исправлению ошибок - <a href="mailto:web.ulyanov@gmail.com">web.ulyanov@gmail.com</a>
