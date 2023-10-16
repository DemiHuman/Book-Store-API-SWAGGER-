# Тест сервиса Book Store API(SWAGGER)
#### Для запуска тестов требуется:
##### Установить [Node.js](https://nodejs.org/)
##### Установить зависимости
```
npm install
npx playwright install
```

##### Запуск тестов
Все
```
npx playwright test tests
```
Только UI
```
npx playwright test tests/ui
```
Только API
```
npx playwright test tests/api
```