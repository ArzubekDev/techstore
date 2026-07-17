# tech-store

Pet-проект: мини-маркетплейс на Next.js (App Router). Каталог товаров, карточки, детальные страницы.
Цель проекта — практика паттернов, которые используются на реальных фронтенд-проектах: FSD-архитектура, серверные компоненты, кэширование запросов, обработка ошибок, типизация DTO.

---

## Технологии

| Слой               | Пакеты                                                               |
| ------------------ | -------------------------------------------------------------------- |
| **Фреймворк**      | Next.js 16, React 19, TypeScript                                     |
| **UI**             | Ant Design, `@ant-design/nextjs-registry`                            |
| **Стили**          | Sass, CSS Modules                                                    |
| **Данные / формы** | TanStack Query, React Hook Form, Zod                                 |
| **Утилиты**        | `classnames`, `dayjs`, `usehooks-ts`, Swiper, `isomorphic-dompurify` |
| **Линтинг**        | ESLint (flat config), Stylelint, Prettier                            |
| **CI**             | GitHub Actions                                                       |

---

## Быстрый старт

**Требования:** Node.js 20+ (LTS).

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

---

## Скрипты

| Команда                  | Назначение                                    |
| ------------------------ | --------------------------------------------- |
| `npm run dev`            | Дев-режим (Turbopack)                         |
| `npm run dev:webpack`    | Дев-режим на Webpack (для практики/сравнения) |
| `npm run build`          | Production-сборка                             |
| `npm run start`          | Запуск production-сборки                      |
| `npm run lint`           | Проверка ESLint                               |
| `npm run lint:fix`       | Автофикс ESLint                               |
| `npm run lint:style`     | Проверка Stylelint                            |
| `npm run lint:style:fix` | Автофикс Stylelint                            |
| `npm run format`         | Prettier по всему проекту                     |

---

## Структура проекта (FSD, упрощённо)

- `src/app/` — роутинг и layout'ы (App Router), провайдеры (React Query, AntD registry), глобальные стили.
- `src/widgets/` — крупные самостоятельные блоки: `Header`, `Footer`, `ProductGrid`.
- `src/features/` — пользовательские действия с бизнес-ценностью: `AddToCartButton`, фильтры каталога, поиск.
- `src/entities/` — бизнес-сущности: `product` (типы, API-запросы, `useProductsQuery`), `cart`.
- `src/shared/` — переиспользуемая инфраструктура:
  - `shared/ui/` — свой UI-кит поверх Ant Design.
  - `shared/api/` — клиент для `https://crud.elcho.dev/` (fetch-обёртка, обработка ошибок).
  - `shared/lib/` — хелперы, кастомные хуки.
  - `shared/config/` — константы, пути (`PATHS`).
  - `shared/types/` — общие типы (пагинация, `TNullable` и т.п.).

Правила импорта: `shared` ничего не знает о верхних слоях; `entities` знает только `shared`; `features` использует `entities` + `shared`; `widgets` собирает всё вместе. Нарушение — риск циклических зависимостей.

---

## Соглашения по именованию

| Тип             | Пример файла          | Имя / префикс                                      |
| --------------- | --------------------- | -------------------------------------------------- |
| Компонент       | `ProductCard.tsx`     | `ProductCard`                                      |
| Константы, моки | `productConstants.ts` | `PRODUCT_LIMIT`                                    |
| Утилиты         | `format-price.ts`     | `formatPrice`                                      |
| Хуки            | `useProductsQuery.ts` | `useProductsQuery`                                 |
| Типы            | —                     | `TProductDTO`, `IProductFilters`, `EProductStatus` |

---

## ADR (архитектурные решения)

- **Почему TanStack Query, а не просто fetch в useEffect?**
  Кэширование, автоматическая ревалидация, встроенные состояния loading/error без бойлерплейта — важно для практики паттернов, которые реально используются в проде.
- **Почему crud.elcho.dev?**
  Даёт реалистичный REST API (пагинация, фильтры, категории) без необходимости поднимать свой бэкенд — фокус на фронтенд-логике.
- **Почему Ant Design + SCSS Modules?**
  AntD закрывает базовые компоненты (таблицы, формы, модалки), SCSS Modules — для кастомной стилизации карточек/каталога без конфликта глобальных стилей.

---

## CI

GitHub Actions: lint + typecheck + build на каждый PR в `main` (см. `.github/workflows/`).
