// =============================
// Promise методи в JavaScript
// =============================

// Помощна функция, която симулира асинхронна заявка
function fetchUser(id, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Грешка при зареждане на потребител ${id}`));
            } else {
                resolve({ id, name: `Потребител ${id}` });
            }
        }, delay);
    });
}

// =============================
// Promise.all
// =============================
// Изчаква ВСИЧКИ Promise-и да завършат успешно.
// Ако поне един бъде отхвърлен — целият резултат е отхвърлен.

async function demonstratePromiseAll() {
    console.log('--- Promise.all ---');
    try {
        const users = await Promise.all([
            fetchUser(1, 300),
            fetchUser(2, 200),
            fetchUser(3, 100),
        ]);
        console.log('Всички потребители заредени:', users);
    } catch (error) {
        console.error('Promise.all грешка:', error.message);
    }
}

// =============================
// Promise.race
// =============================
// Връща резултата от ПЪРВИЯ завършил Promise (независимо дали е resolve или reject).

async function demonstratePromiseRace() {
    console.log('\n--- Promise.race ---');
    try {
        const fastest = await Promise.race([
            fetchUser(1, 300),
            fetchUser(2, 100),
            fetchUser(3, 200),
        ]);
        console.log('Най-бърз резултат:', fastest);
    } catch (error) {
        console.error('Promise.race грешка:', error.message);
    }
}

// =============================
// Promise.allSettled
// =============================
// Изчаква ВСИЧКИ Promise-и да завършат (и успешните, и неуспешните).
// Връща масив от обекти с { status, value/reason }.

async function demonstratePromiseAllSettled() {
    console.log('\n--- Promise.allSettled ---');
    const results = await Promise.allSettled([
        fetchUser(1, 200),
        fetchUser(2, 300, true), // Тази ще се провали
        fetchUser(3, 100),
    ]);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1}: Успех —`, result.value);
        } else {
            console.log(`Promise ${index + 1}: Грешка —`, result.reason.message);
        }
    });
}

// Изпълнение на всички демонстрации
async function main() {
    await demonstratePromiseAll();
    await demonstratePromiseRace();
    await demonstratePromiseAllSettled();
}

main();
