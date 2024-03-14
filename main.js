// - Створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б.
function areaOfRectangle(a, b) {
    return console.log(a*b)
}
areaOfRectangle(2, 5);


// - Створити функцію яка обчислює та повертає площу кола з радіусом r.
function areaOfCircle(r) {
    return console.log(Math.round(Math.PI*Math.pow(r, 2)))
}
areaOfCircle(5);


// - Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r.
function areaOfCylinder(r, h) {
    return console.log(Math.round(2*Math.PI*Math.pow(r, 2) + 2*Math.PI*h))
}
areaOfCylinder(10, 20);


// - Створити функцію яка приймає масив та виводить кожен його елемент.
function outputsArrayElement(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
let someArr = [{name: 'Alex', age: 23}, 19, 'string'];
outputsArrayElement(someArr);


// - Створити функцію яка створює параграф з текстом. Текст задати через аргумент.
function returnsParagraph(text) {
    document.write(`<p>${text}</p>`)
}
returnsParagraph('Hello World');


// - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
function returnsList(text) {
    return document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`);
}
returnsList('foo bar');


// - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
function returnsList2(text, items) {
    document.write(`<ul>`)
    for (let i = 0; i < items; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
returnsList2('some text', 3);


// - Створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список.
function listBuilding(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
let someArrToList = [22, 33, 'foo', 'bar', false]
listBuilding(someArrToList);


// - Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
function objectConstruction(arr) {
    for (const element of arr) {
        document.write(`<div>ID - ${element.id}: name - ${element.name}, age - ${element.age}</div>`)
    }
}
let arrObject = [
    {id: 1, name: 'Olga', age: 23},
    {id: 2, name: 'Petro', age: 3},
    {id: 3, name: 'Max', age: 21},
    {id: 4, name: 'Oleg', age: 18}
]
objectConstruction(arrObject);


// - Створити функцію яка повертає найменше число з масиву.
function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return console.log(min);
}
min([23, 2, -3, 100]);


// - Створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1, 2, 10]) //-> 13.
function sum(arr) {
    let number = 0;
    for (const item of arr) {
        number += item
    }
    return number
}
console.log(sum([1, 2, 10]));


// - Створити функцію swap(arr, index1, index2). Функція міняє місцями значення у відповідних індексах.
//   Приклад  swap([11, 22, 33, 44], 0, 1) //=> [22, 11, 33, 44].
function swap(arr, index1, index2) {
    if (index1 <= arr.length-1 && index2 <= arr.length-1) {
        let newArr = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = newArr;
    } else {
        console.log('Індекс, або індекси які ти хочеш поміняти місцями є поза межами масиву')
    }
    return console.log(arr);
}
swap([11, 22, 33, 44], 0, 1);


// - Написати функцію обміну валюти exchange(sumUAH, currencyValues, exchangeCurrency).
//   Приклад exchange(10000,[{currency: 'USD', value:40}, {currency: 'EUR', value: 42}],'USD') // => 250.
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        let result = sumUAH/currencyValues[0].value
        console.log(result);
    } else if (exchangeCurrency === 'EUR') {
        let result = sumUAH/currencyValues[1].value
        console.log(result);
    }
}
exchange(10000,[{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],'EUR')

// - 2 спосіб
function exchange2(sumUAH, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            let result = sumUAH/item.value
            console.log(result);
        }
    }
}
exchange2(10000,[{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],'USD')