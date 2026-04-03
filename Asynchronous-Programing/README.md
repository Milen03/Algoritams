# Асинхронно програмиране в JavaScript

## Какво е асинхронно програмиране?

JavaScript е **еднонишков** (single-threaded) език — изпълнява само една операция в даден момент.
Асинхронното програмиране позволява на програмата да стартира дълготрайни операции (HTTP заявки, четене на файлове, таймери) и да продължи изпълнението на друг код, докато чака резултата.

---

## 1. Callbacks (Обратни извиквания)

Callback е функция, подадена като аргумент на друга функция, която се извиква, когато асинхронната операция приключи.

```js
function fetchData(callback) {
    setTimeout(() => {
        callback('Данните са заредени');
    }, 1000);
}

fetchData((result) => {
    console.log(result); // "Данните са заредени"
});
```

**Проблем:** При вложени callbacks се получава т.нар. „Callback Hell" — код, който е труден за четене и поддържане. Виж `callback-example.js` за пример.

---

## 2. Promises (Обещания)

Promise е обект, който представлява бъдещия резултат от асинхронна операция. Има три състояния:

| Състояние   | Описание                                  |
|-------------|-------------------------------------------|
| `pending`   | Операцията все още се изпълнява           |
| `fulfilled` | Операцията завърши успешно (`resolve`)     |
| `rejected`  | Операцията завърши с грешка (`reject`)     |

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Готово!');
    }, 1000);
});

promise
    .then(result => console.log(result))   // "Готово!"
    .catch(error => console.error(error));
```

### Полезни методи на Promise

- **`Promise.all([])`** — Изчаква всички Promise-и да завършат. Ако един от тях бъде отхвърлен, целият резултат е отхвърлен.
- **`Promise.race([])`** — Връща резултата от първия завършил Promise.
- **`Promise.allSettled([])`** — Изчаква всички Promise-и и връща статуса на всеки (fulfilled или rejected).

Виж `promise-methods.js` за примери.

---

## 3. Async/Await

`async/await` е синтактична захар върху Promises, която прави асинхронния код да изглежда като синхронен.

- **`async`** пред функция означава, че тя винаги връща Promise.
- **`await`** спира изпълнението на `async` функцията, докато Promise-ът не бъде разрешен.

```js
async function loadData() {
    try {
        const result = await fetch('https://api.example.com/data');
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error('Грешка:', error);
    }
}
```

### Последователно vs Паралелно изпълнение

```js
// Последователно — бавно (всяка заявка чака предишната)
const a = await fetchA();
const b = await fetchB();

// Паралелно — бързо (заявките се изпълняват едновременно)
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

Виж `async-await-example.js` за повече примери.

---

## Файлове в тази папка

| Файл                      | Описание                                                        |
|---------------------------|-----------------------------------------------------------------|
| `callback-example.js`     | Пример за callbacks и callback hell                             |
| `promise-methods.js`      | Примери за `Promise.all`, `Promise.race`, `Promise.allSettled`  |
| `async-await-example.js`  | Async/await с обработка на грешки и паралелно изпълнение        |
| `asyng-funcion.js`        | Пример за async/await с Promise (предложение за брак)           |
| `feache.html`             | Fetch API — зареждане на GitHub repos                           |
| `remoData.html`           | Fetch API — изпращане и получаване на съобщения                 |
