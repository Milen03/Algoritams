// =============================
// Async/Await в JavaScript
// =============================

// Помощна функция — симулира асинхронна операция
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// =============================
// Основен пример за async/await
// =============================

async function fetchProduct(id) {
    await delay(300);
    return { id, name: `Продукт ${id}`, price: id * 10 };
}

async function basicExample() {
    console.log('--- Основен async/await ---');
    const product = await fetchProduct(1);
    console.log('Получен продукт:', product);
}

// =============================
// Обработка на грешки с try/catch
// =============================

async function riskyOperation() {
    await delay(200);
    throw new Error('Нещо се обърка!');
}

async function errorHandlingExample() {
    console.log('\n--- Обработка на грешки ---');
    try {
        const result = await riskyOperation();
        console.log(result);
    } catch (error) {
        console.error('Хваната грешка:', error.message);
    } finally {
        console.log('Finally блокът винаги се изпълнява.');
    }
}

// =============================
// Последователно изпълнение (бавно)
// =============================

async function sequentialExecution() {
    console.log('\n--- Последователно изпълнение ---');
    const start = Date.now();

    const p1 = await fetchProduct(1); // Чака ~300ms
    const p2 = await fetchProduct(2); // Чака ~300ms
    const p3 = await fetchProduct(3); // Чака ~300ms

    const elapsed = Date.now() - start;
    console.log('Продукти:', [p1, p2, p3]);
    console.log(`Време: ~${elapsed}ms (последователно)`);
}

// =============================
// Паралелно изпълнение (бързо)
// =============================

async function parallelExecution() {
    console.log('\n--- Паралелно изпълнение ---');
    const start = Date.now();

    const [p1, p2, p3] = await Promise.all([
        fetchProduct(1),
        fetchProduct(2),
        fetchProduct(3),
    ]);

    const elapsed = Date.now() - start;
    console.log('Продукти:', [p1, p2, p3]);
    console.log(`Време: ~${elapsed}ms (паралелно)`);
}

// =============================
// Async функция винаги връща Promise
// =============================

async function getValue() {
    return 42;
}

async function returnValueExample() {
    console.log('\n--- Async връща Promise ---');
    const result = getValue();
    console.log('Без await:', result);          // Promise { 42 }
    console.log('С await:', await getValue());   // 42
}

// Изпълнение на всички примери
async function main() {
    await basicExample();
    await errorHandlingExample();
    await sequentialExecution();
    await parallelExecution();
    await returnValueExample();
}

main();
