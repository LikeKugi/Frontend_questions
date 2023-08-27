# enums

ип enum или перечисление позволяет определить набор именнованных констант, которые описывают определенные состояния.

Для определения перечисления применяется ключевое слово enum. Например, объявим следующее перечисление:

```TypeScript
enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
};
```

По умолчанию константы перечисления, как в примере выше, представляют числовые значения. То есть это так называемое числовое перечисление, в котором каждой константе сопоставляется числовое значение.

Так, созданное выше в примере перечисление фактически эквивалентно следующему:

```TypeScript
enum Season {
  Winter=0,
  Spring=1,
  Summer=2,
  Autumn=3,
};
```

Кроме числовых перечислений в TypeScript есть строковые перечисления, константы которых принимают строковые значения:

```TypeScript
enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето
```

[Подробно](https://metanit.com/web/typescript/2.11.php)

[Подробно](http://typescript-lang.ru/docs/Basic%20Types.html#Enum)

[Подробно](http://typescript-lang.ru/docs/Enums.html)
