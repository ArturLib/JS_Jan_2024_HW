// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б.
let areaOfRectangle = (a, b) => console.log(a*b);
areaOfRectangle(2, 5);


// - створити функцію яка обчислює та повертає площу кола з радіусом r.
let areaOfCircle = (r) => console.log(Math.round(Math.PI*Math.pow(r, 2)));
areaOfCircle(5);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r.
let areaOfCylinder = (r, h) => console.log(Math.round(2*Math.PI*Math.pow(r, 2) + 2*Math.PI*h));
areaOfCylinder(10, 20);


// - створити функцію яка приймає масив та виводить кожен його елемент.
let outputsArrayElement = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
};
let someArr = [{name: 'Alex', age: 23}, 19, 'string'];
outputsArrayElement(someArr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент.
let returnsParagraph = (text) => document.write(`<p>${text}</p>`);
returnsParagraph('Hello World!!!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
let returnsList = (text) => {
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`);
};
returnsList('foo bar');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
let returnsList2 = (text, items) => {
    document.write(`<ul>`)
    for (let i = 0; i < items; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
returnsList2('some text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список.
let listBuilding = (arr) => {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
};
let someArrToList = [22, 33, 'foo', 'bar', false];
listBuilding(someArrToList);


// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
let objectConstruction = (arr) => {
    for (const element of arr) {
        document.write(`<div>ID - ${element.id}: name - ${element.name}, age - ${element.age}</div>`)
    }
};
let arrObject = [
    {id: 1, name: 'Olga', age: 23},
    {id: 2, name: 'Petro', age: 3},
    {id: 3, name: 'Max', age: 21},
    {id: 4, name: 'Oleg', age: 18}
];
objectConstruction(arrObject);


// - створити функцію яка повертає найменше число з масиву.
let min = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return console.log(min);
};
min([23, 2, -3, 100]);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let number = 0;
    for (const item of arr) {
        number += item
    }
    return number
};
console.log(sum([1, 2, 10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//   Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    if (index1 <= arr.length-1 && index2 <= arr.length-1) {
        let newArr = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = newArr;
    } else {
        console.log('Індекс, або індекси які ти хочеш поміняти місцями є поза межами масиву')
    }
    return console.log(arr);
};
swap([11, 22, 33, 44], 1, 2);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//   Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            let result = sumUAH/item.value
            console.log(result);
        }
    }
};
exchange(10000,[{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],'USD');