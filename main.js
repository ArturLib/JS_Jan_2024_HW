//✓ todo - Створити змінні.
//         Присвоїти кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//         Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
    console.log(hello);
let owu = 'owu';
    console.log(owu);
let com = 'com';
    console.log(com);
let ua = 'ua';
    console.log(ua);
let one = 1;
    console.log(one);
let ten = 10;
    console.log(ten);
let number = -999;
    console.log(number);
let number2 = 123;
    console.log(number2);
let pi = 3.14;
    console.log(pi);
let number3 = 2.7;
    console.log(number3);
let number4 = 16;
    console.log(number4);
let booleanTrue = true;
    console.log(booleanTrue);
let booleanFalse = false;
    console.log(booleanFalse);


//✓ todo - Створити 3 змінних firstName, middleName, lastName.
//         Наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Arthur';
let middleName = 'Bohdanovich';
let lastName = 'Liber';

let person = `${firstName} ${middleName} ${lastName}`;
    console.log(person);


//✓ todo - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//         let a = 100; let b = '100'; let c = true;
let a = 100;
    console.log(typeof a);
let b = '100';
    console.log(typeof b);
let c = true;
console.log(typeof c);


//✓ todo - Додаткове для тих хто цікавився prompt`oм
//         За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім`ям, По-Батькові та роками.
//         Та вивести в консоль
let firstNamePrompt = prompt('Enter you first name');
let middleNamePrompt = prompt('Enter you middle name');
let lastNamePrompt = prompt('Enter you last name');
let personPrompt = `${firstNamePrompt} ${middleNamePrompt} ${lastNamePrompt}`
    console.log(personPrompt);
    alert(`You name is - ${personPrompt}`);