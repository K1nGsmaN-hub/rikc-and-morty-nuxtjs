# Rick and Morty

## Techstack

[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.10&color=2c8ebb&style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![node](https://img.shields.io/static/v1?label=node&message=14.x&color=026E00&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![nuxt](https://img.shields.io/static/v1?label=nuxt.js&message=2.15.3&color=01C58E&style=for-the-badge&logo=nuxt.js&logoColor=white)](https://ru.nuxtjs.org/)
[![typescript](https://img.shields.io/static/v1?label=typescript&message=4.2.3&color=3278C7&style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![prettier](https://img.shields.io/static/v1?label=prettier&message=2.2.1&color=F7B93E&style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![eslint](https://img.shields.io/static/v1?label=eslint&message=7.23.0&color=4B32C3&style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![babel](https://img.shields.io/static/v1?label=babel&message=7.9.0&color=F9DC3E&style=for-the-badge&logo=babel&logoColor=white)](https://prettier.io/)
## Основые комманды

Для запуска продакш версий веб-приложения

```bash
  yarn serve:prod
```

Для сборки проекта

```bash
  yarn build
```

Для запуска дев версии проекта

```bash
  yarn serve
```

## Структура проекта

В шаблоне все наследуется от стандартного `Nuxt.js`. Однако, в шаблоне присуствуют некоторые архитектурные паттерны:

- `types` - дирректория, которая хранит в себе структуры данных или их типы/интерфейсы/абстракции
- `repositories` - дирректория, которая хранит в себе классы, которые делают запросы по API. Для HTTP запросов внутри есть базовый NetAPI класс, который по DI принимает Http клиент и делает запросы по внешним API. Также есть базовый LocalAPI, который записывает или берет данные с локального хранилища. Для работы с последующими репозиториями, надо наследоваться от одного из базовых классов.
- `services` - дирректория, которая хранит в себе классы, которые производят какие либо вычесления, или служат оберткой для сторонних зависимостей.

Также, в шаблоне структурированы компоненты по Atomic Design. Компоненты деляться на:

- `/atoms/*` – тут расположены примитивные компоненты: кнопки, заголовки, поля ввода и пр.
- `/molecules/*` – тут расположены связки/группы примитивов: группы кнопок, карточки и пр.
- `/organisms/*` – тут расположены связки/группы молекул. То есть компоненты, которая состоит из молекул, которые состоят из примитивов: шапка, списки карточек, модальные окна и пр.
- `/templates/*` – тут расположены шаблоны страницы

Подробнее можно почитать:

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [Atomic Design in practice](https://blog.ippon.tech/atomic-design-in-practice/)
  
