# Aston React App

Приложение для просмотра автоновостей и возможности их добавления.

### 1 уровень (обязательный - необходимый минимум)

**React**

-   [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**. [LoginPage](https://github.com/chistiakovnikita/aston-project/blob/main/src/components/pages/LoginPage/LoginPage.jsx)
-   [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
-   [x] Есть разделение на **умные и глупые компоненты**. не выполнен
-   [x] Есть **рендеринг списков**. [HomePage](https://github.com/chistiakovnikita/aston-project/blob/main/src/components/pages/HomePage/HomePage.jsx)
-   [x] Реализована хотя бы одна **форма**. [CreatePostForm](https://github.com/chistiakovnikita/aston-project/blob/main/src/components/Forms/CreatePostForm/CreatePostForm.jsx)
-   [x] Есть применение **Контекст API**. не выполнен
-   [x] Есть применение **предохранителя**. [HomePage](https://github.com/chistiakovnikita/aston-project/blob/main/src/components/pages/HomePage/HomePage.jsx)
-   [x] Есть хотя бы один **кастомный хук**. не выполнен
-   [x] Хотя бы несколько компонентов используют **PropTypes**. не выполнен
-   [x] Поиск не должен триггерить много запросов к серверу (**debounce**). не выполнен
-   [x] Есть применение **lazy + Suspense**. [App](https://github.com/chistiakovnikita/aston-project/blob/main/src/App.js)

**Redux**

-   [x] Используем **Modern Redux with Redux Toolkit**. [store](https://github.com/chistiakovnikita/aston-project/blob/main/src/redux/store.js)
-   [x] Используем **слайсы**. [authSlice](https://github.com/chistiakovnikita/aston-project/blob/main/src/redux/slices/authSlice.js)

## Дополнительно:

-   использована библиотека [react-hook-form](https://www.react-hook-form.com/) для форм регистрации и входа
-   использована библиотека [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) для предохранителя

## Запуск приложения:

-Необходимо запустить сервер при помощи команд npm run start или npm run dev
