# Project Title

Task Manager Web Application

Цей проект — інтерактивний веб-додаток, який розробляється для полегшення
управління завданнями. Користувачам надається можливість створювати, редагувати,
видаляти та відстежувати завдання, а також використовувати календар для
планування.

Основні функції:

- створення завдань
- редагування завдань
- видалення завдань
- відстеження статусу завдань

Введення календарної функціональності для планування та відстеження термінів
завдань. REST API для обміну даними завдяки JSON web server.

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Run Locally

Убедись что на компьютере установлена LTS-версия Node.js.
[Скачай и установи](https://nodejs.org/en/) её если необходимо.

Clone the project

```bash
  git clone https://github.com/Alexuber/wtg.git
```

Go to the project directory

```bash
  cd wtg
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Додаток локально буде доступний за адресою: http://localhost:3000/wtg

JSON server за адресою: http://localhost:4000/

## API Reference

######

Отримати всі завдання

GET /api/tasks Відповідь: json

[ { "id": 1, "title": "Приклад завдання 1", "status": "Виконується", "deadline":
"2024-01-24" }, { "id": 2, "title": "Приклад завдання 2", "status": "На черзі",
"deadline": "2024-01-24" }, { "id": 3, "title": "Приклад завдання 3", "status":
"Виконано", "deadline": "2024-01-24" } ]

######

Створити нове завдання

POST /api/tasks Запит: json

{ "title": "Нове завдання", "status": "Виконується", "deadline": "2024-01-25" }

Відповідь: json

{ "id": 4, "title": "Нове завдання", "status": "Виконується", "deadline":
"2024-01-25" }

######

Оновити інформацію про завдання

PUT /api/tasks/{id} Запит: json

{ "id": "2", "title": "Сходити в магазин", "status": "На черзі", "deadline":
"2024-01-24" }

Відповідь: json

{ "id": 4, "title": "Нове завдання", "status": "Виконано", "deadline":
"2024-01-25" }

######

Видалити завдання

DELETE /api/tasks/{id} Відповідь: json

{ "id": "2", "title": "Сходити в магазин", "status": "На черзі", "deadline":
"2024-01-24" }

## Feedback

If you have any feedback, please reach out to us at alexuberbuber@gmail.com

## Support

For support, email alexuberbuber@gmail.com.
