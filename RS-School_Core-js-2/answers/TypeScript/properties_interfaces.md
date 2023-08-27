Свойства могут быть помечены как опциональные (необязательные) путем добавления вопросительного знака (?) после их названий:

```TypeScript
interface PaintOptions {
 shape: Shape
 xPos?: number
 yPos?: number
}

function paintShape(opts: PaintOptions) {
 // ...
}

const shape = getShape()
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, yPos: 100 })
paintShape({ shape, xPos: 100, yPos: 100 })
```

Все вызовы функции в приведенном примере являются валидными. Опциональность означает, что если свойство установлено, оно должно иметь указанный тип.

Мы можем получать значения таких свойств. Однако, при включенной настройке strictNullChecks, мы будем получать сообщения о том, что потенциальными значениями опциональных свойств является undefined

Свойства могут быть помечены как доступные только для чтения с помощью ключевого слова readonly. Такие свойства не могут перезаписываться в процессе проверки типов:

```TypeScript
interface SomeType {
 readonly prop: string
}

function doSomething(obj: SomeType) {
 // Мы может читать (извлекать значения) из 'obj.prop'.
 console.log(`prop has the value '${obj.prop}'.`)

 // Но не можем изменять значение данного свойства
 obj.prop = 'hello'
 // Cannot assign to 'prop' because it is a read-only property.
 // Невозможно присвоить значение 'prop', поскольку оно является доступным только для чтения
}
```

[Подробно](https://habr.com/ru/companies/macloud/articles/562054/)
