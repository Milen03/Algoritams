// =============================
// Callbacks в JavaScript
// =============================

// Прост пример за callback
function greet(name, callback) {
    console.log('Здравей, ' + name + '!');
    callback();
}

greet('Мария', function () {
    console.log('Callback функцията беше извикана.');
});

// =============================
// Асинхронен callback с setTimeout
// =============================

function fetchData(callback) {
    console.log('Зареждане на данни...');
    setTimeout(() => {
        callback(null, { id: 1, name: 'Продукт A' });
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Грешка:', error);
        return;
    }
    console.log('Получени данни:', data);
});

// =============================
// Callback Hell (анти-паттерн)
// =============================
// Когато имаме много вложени callbacks, кодът става труден за четене.
// Решение: използвайте Promises или async/await.

function step1(callback) {
    setTimeout(() => {
        console.log('Стъпка 1 завършена');
        callback(null, 'Резултат от стъпка 1');
    }, 500);
}

function step2(prevResult, callback) {
    setTimeout(() => {
        console.log('Стъпка 2 завършена с:', prevResult);
        callback(null, 'Резултат от стъпка 2');
    }, 500);
}

function step3(prevResult, callback) {
    setTimeout(() => {
        console.log('Стъпка 3 завършена с:', prevResult);
        callback(null, 'Финален резултат');
    }, 500);
}

// Callback Hell — вложени callbacks
console.log('\n--- Callback Hell пример ---');
step1((err, result1) => {
    if (err) return console.error(err);
    step2(result1, (err, result2) => {
        if (err) return console.error(err);
        step3(result2, (err, result3) => {
            if (err) return console.error(err);
            console.log('Краен резултат:', result3);
        });
    });
});
