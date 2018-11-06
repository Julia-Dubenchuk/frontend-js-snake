# Условие задания

Задание на создание некоторых модулей из знаменитой игры "Змейка" ("Snake"). Создать нужно только 4 модуля на JavaScript:

- базовый элемент игры
- еда
- змея
- сегмент змеи

## Формат задания

Это будут 4 файла JS, которые и будут являться результатом выполнения задания. В каждом файле нужно запрограммировать по одному классу (функции-конструктору) соответственно. В итоге не будет получена полноценная игра "Змейка", её не будет видно на экране. Но созданные модули могут быть использованы, для того, чтобы создать её полностью.

Для каждого модуля дана спецификация. Правильность выполнения должна пройти проверку авто-тестами, которые написаны по спецификации. Используйте заготовку проекта для старта. Рабочие файлы находятся в папке **/src/classes/**, но они пустые. Их надо реализовать.

Тесты запускайте через `npm test`. Больше информации по настройке проекта находится в файле [HELP.md](./HELP.md)

Файл **index.js** можно использовать в своих целях. Он не будет проверяться тестами. Так же он нужен для сборки всех модулей в пакет в будущем.

## Спецификация

### Базовый элемент

**base.element.js** - конструктор, который принимает ``{x: Number, y: Number, visible: Boolean}`` с опциями конфигурации создания.

- *.x* - координата по горизонтали начиная с верхнего левого угла. По умолчанию 0
- *.y* - координата по вертикали начиная с верхнего левого угла. По умолчанию 0
- *.visible* - логическое значение видимости или невидимости элемента. По умолчанию ``true``

Все эти свойства должны стать свойствами экземпляра.

### Еда

**food.js** - конструктор, который принимает в качестве аргумента объект ``{...}`` с опциями конфигурации создания, точно такими же как и у **base.element.js**. Наследуется от **base.element.js**. Добавляет в экземпляры:

- *.feed()* - метод делает элемент невидимым, т.е. ставит свойство *visible = false*

### Сегмент змеи

**snake.part.js** - конструктор, который принимает ``{..., direction: String}`` с опциями конфигурации создания. Поддерживает все свойства аргумента что и **base.element.js** и наследуется от него. Добавляет в экземпляры:

- *.direction* - свойство, содержащее всегда одно из 4 возможных значений: "left", "right", "up", "down". По умолчанию равно "right".
- *.move(steps)* - метод изменяющий координаты (*.x*, *.y*) этого элемента в зависимости от направления (*.direction*). Имеет аргумент количества шагов сдвига. По умолчанию аргумент - 0 (элемент не сдвинется).

### Змея

**snake.js** - конструктор, который принимает ``{length: Number, direction: String}`` с опциями конфигурации создания. Не наследует никакие интерфейсы. Собственный интерфейс:

- *.parts* - массив частей змеи. Каждая часть это экземпляр **snake.part.js**
- *.head* - всегда указывает на голову змеи - первый элемент в массиве *.parts*
- *.length* - длина змеи. Совпадает с длиной массива *.parts*. При создании хвост оказывается в координатах [0; 0], а голова оказывается на указанной длине от хвоста. Позиция головы зависит от направления *.direction*. (Подсказка: это направление присваивается голове при создании змеи и обновляется при вызове *snake.eat()*)
- *.direction* - направление головы змеи, т.е. направление всегда совпадает с направлением элемента *.head*. Использует одно из 4 возможных значений: "left", "right", "up", "down". По умолчанию равно "right". (Подсказка: это направление присваивается голове при создании змеи и обновляется при вызове *snake.move()*)
- *.eat()* - кормит змею, от чего её длина должна увеличиться на 1 сегмент. Новый сегмент добавляется в конец змеи и имеет то же направление , что и предыдущий последний сегмент.
- *.move(steps)* - сдвигает змею на определённое количество шагов по её направлению. Каждый сегмент змеи имеет собственное направление, которое должно правильно меняться на поворотах. Если *steps* не определён, то по умолчанию 1.

## Что нужно знать

- функции-конструкторы;
- наследование и классы;
- **this** в JavaScript;
- методы массива;
- итерация по массиву;
- способ задания значения аргументов функции по умолчанию;
- оператор **switch-case**.

## Полезные ссылки

- [Игра про волка и яйца в браузере](https://github.com/shtange/catch-the-egg)

## Запуск и настройка проекта

Информация по настройке проекта находится в файле [HELP.md](./HELP.md)
