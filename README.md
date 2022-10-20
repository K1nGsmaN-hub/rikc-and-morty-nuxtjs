
# ROCKETFRONT-HYBRID V2

Шаблон для PWA/SSR/SSG/Hybrid приложений на основе Nuxt.js

## Преимущества

- Расширение архитектуры Nuxt.js MVVM + Clean Architecture
- Использования DI для доступа к модулям
- Поддержка TypeScript
- Встроенный CLI для генерации документации
- Поддержка Docker для разработки и продакшна
- Интеграция с Capacitor.js для сборки гибридных приложении
- Библиотека компонентов Rocket Firm UI

## Докуемнтация

Ознакомиться с докуемнтацией данного шаблона можено в Rocket WIKI по [ссылке](https://wiki.rocketfirm.com/books/rocketfront-hybrid)

## Techstack

[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.10&color=2c8ebb&style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![node](https://img.shields.io/static/v1?label=node&message=14.x&color=026E00&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![nuxt](https://img.shields.io/static/v1?label=nuxt.js&message=2.15.3&color=01C58E&style=for-the-badge&logo=nuxt.js&logoColor=white)](https://ru.nuxtjs.org/)
[![vue-styleguidist](https://img.shields.io/static/v1?label=vue-styleguidist&message=4.26.1&color=354A5E&style=for-the-badge)](https://vue-styleguidist.github.io/)
[![typescript](https://img.shields.io/static/v1?label=typescript&message=4.2.3&color=3278C7&style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![jest](https://img.shields.io/static/v1?label=jest&message=26.6.3&color=F75001&style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![prettier](https://img.shields.io/static/v1?label=prettier&message=2.2.1&color=F7B93E&style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![eslint](https://img.shields.io/static/v1?label=eslint&message=7.23.0&color=4B32C3&style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![babel](https://img.shields.io/static/v1?label=babel&message=7.9.0&color=F9DC3E&style=for-the-badge&logo=babel&logoColor=white)](https://prettier.io/)
[![docker](https://img.shields.io/static/v1?label=docker&message=19.03.13&color=0086CC&style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
## Основые комманды

Для запуска проекта в докер контейнере в режиме разработки

```bash
  yarn docker:dev
```

Для запуска продакш версий веб-приложения

```bash
  yarn serve:prod
```

Для запуска документации

```bash
  yarn serve:docs
```

Для сборки проекта

```bash
  yarn build
```

Для запуска iOS версий в XCode

```bash
  yarn run:ios
```

Для запуска Android версий в Android Studio

```bash
  yarn run:android
```

Для сборки Android версий

```bash
  yarn build:android
```

Для сборки проекта

```bash
  yarn build
```

## Команды генерации

В шаблоне присутствуют команды для генерации boilerplate файлов для ускорения процесса создания:

Для генерации Vue компонентов

```bash
  yarn create-component
```

Так как в шаблоне используется компонентная структура Atomic Design, то команда запросить какого типа компонент требуется сгенерировать.


Для генерации компоненты-страницы

```bash
  yarn create-page
```

## Структура проекта

В шаблоне все наследуется от стандартного `Nuxt.js`. Однако, в шаблоне присуствуют некоторые архитектурные паттерны:

- `models` - дирректория, которая хранит в себе структуры данных или их типы/интерфейсы/абстракции
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

## Правила документирования проекта

Использовать [VueStyleGuidist](https://vue-styleguidist.github.io/docs/Documenting.html)

пример оформления документирование компонента:

```vue
<template>
  <button class="Button" @click="handler">
    <!-- @slot default slot for button content -->
    <slot></slot>
  </button>
</template>

<script>
/**
 * The only true button.
 * @displayName BestButton
 */
export default {
  name: 'Button',
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: '#333',
    },
    /**
     * The size of the button
     * @values small, normal, large
     */
    size: {
      type: String,
      default: 'normal',
    },
  },
  methods: {
    handler(e) {
      /** click event */
      this.$emit('click', e)
    },
  },
}
</script>
```

Для того чтобы запустить документацию используйте команду: `yarn serve:docs` или `yarn build:docs` для билда

---

## Docker

Проект обернут в докер для сборки и запуска продакшн версий проекта на сервере, то есть для облегчения деплоя посредством CI/CD

Команды для запуска контейнера:

- `docker-compose build --no-cache` - сборка контейнера без использования кэша
- `docker-compose up` - поднятия контейнера

---

## CI/CD

В корне можно найти пример конфигурации GitLab CI/CD в файле `.gitlab-ci.example.yml`

Для корректной работы надо в репозиторий GitLab надо иметь следуюшие переменные:

- `$PRIVATE_KEY` - ключ для ssh доступа к серверу
- `$DEV_USER` - имя пользователя для доступа
- `$DEV_HOST` - имя хоста

## Авторы

- [@armankuanysh](https://t.me/armankuanysh)

  