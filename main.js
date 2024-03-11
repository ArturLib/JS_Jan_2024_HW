// - Масиви та об'єкти:
//   - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль;
// let someArr = [10, false, 'string', {name: 'Anna', age: 18}, NaN, -999, 'o', 'hello', true, 0];
// console.log('=============================')
//     console.log(someArr[0]);
//     console.log(someArr[1]);
//     console.log(someArr[2]);
//     console.log(someArr[3]);
//     console.log(someArr[4]);
//     console.log(someArr[5]);
//     console.log(someArr[6]);
//     console.log(someArr[7]);
//     console.log(someArr[8]);
//     console.log(someArr[9]);
// console.log('=============================');
// for (const someArrElement of someArr) {
//     console.log(someArrElement);
// }
// console.log('=============================');

//   - Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre.
// let book1 = {title: 'book1', pageCount: 234, genre: 'novel'};
//     console.log(book1);
// let book2 = {title: 'book2', pageCount: 999, genre: 'horror'};
//     console.log(book2);
// let book3 = {title: 'book3', pageCount: 35, genre: 'detective'};
//     console.log(book3);
// console.log('=============================');

//   - Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre, authors.
//     Поле "автори" - являється масивом. Кожен автор має поля name та age.
// let book4 = {title: 'book4', pageCount: 254, genre: 'novel', authors: [{name: 'Name1', age: 45}]};
//     console.log(book4);
// let book5 = {title: 'book5', pageCount: 941, genre: 'horror', authors: [{name: 'Name2', age: 55}]};
//     console.log(book5);
// let book6 = {title: 'book6', pageCount: 355, genre: 'detective', authors: [{name: 'Name3', age: 3}]};
//     console.log(book6);
// console.log('=============================');

//   - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username, password.
//     Вивести в консоль пароль кожного користувача.
// let users = [
//     {name: 'Olja', username: 'Mag', password: 'pas11'},
//     {name: 'Max', username: 'Dos', password: 'pas22'},
//     {name: 'Petro', username: 'Kmit', password: 'pas33'},
//     {name: 'Panas', username: 'Did', password: 'pas44'},
//     {name: 'Bob', username: 'Gubka', password: 'pas55'},
//     {name: 'Mike', username: 'Jonson', password: 'pas66'},
//     {name: 'Nik', username: 'Nak', password: 'pas77'},
//     {name: 'Ira', username: 'Pol', password: 'pas88'},
//     {name: 'Dima', username: 'Doma', password: 'pas99'},
//     {name: 'Kit', username: 'Pes', password: 'pas111'}
// ];
//     console.log(users[0].password);
//     console.log(users[1].password);
//     console.log(users[2].password);
//     console.log(users[3].password);
//     console.log(users[4].password);
//     console.log(users[5].password);
//     console.log(users[6].password);
//     console.log(users[7].password);
//     console.log(users[8].password);
//     console.log(users[9].password);
// console.log('=============================');


// - Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a,
//     що дорівнює 1, 0, -3.
// let x = +prompt('Введіть будь-яке число');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно');
// }

//   - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число (в першу, другу, третю чи четверту частину години).
// let time = +prompt('Введіть число від 0 до 59');
// if (time >= 0 && time < 15) {
//     console.log('Число потрапляє до першої чверті години');
// } else if (time >= 15 && time < 30) {
//     console.log('Число потрапляє до другої чверті години');
// } else if (time >= 30 && time < 45) {
//     console.log('Число потрапляє до третьої чверті години');
// } else if (time >= 45 && time <= 59) {
//     console.log('Число потрапляє до четвертої чверті години');
// } else {
//     console.log('Щось тут відбувається незрозуміле!');
// }

//   - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це
//     число (у першу, другу чи третю).
// let day = +prompt('Введіть якесь число від 1 до 31');
// if (day > 0 && day <= 10) {
//     console.log('Ваше число потрапляє в першу декаду місяця!');
// } else if (day >= 11 && day <= 20) {
//     console.log('Ваше число потрапляє в другу декаду місяця!');
// } else if (day >= 21 && day <= 31) {
//     console.log('Ваше число потрапляє в третю декаду місяця!');
// } else {
//     console.log('Введене вами число не потрапляє в заданий діапазон або ви не ввели число!');
// }

//     - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//       відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let weekday = prompt('Enter the number of the day of the week');
// switch (weekday)  {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('You entered something wrong');
// }

//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.
// let numberOne = +prompt('Введіть перше число');
// let numberTwo = +prompt('Введіть друге число');
// if (numberOne > numberTwo) {
//     console.log(`${numberOne} більше за ${numberTwo}`);
// } else if (numberOne < numberTwo) {
//     console.log(`${numberOne} менше за ${numberTwo}`);
// } else if (numberOne === numberTwo) {
//     console.log('Ви ввели два однакових числа');
// }


//   - Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно).
//     Напишіть код який, за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення
//     змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x;
// if (x === undefined || x === null || x === 0 || x === '' || x === false || isNaN(x)) {
//     x = 'default';
//     console.log(x);
// }


//   - З файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша
//     за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     if (item.monthDuration > 5) {
//         console.log(`${item.title} - Super`);
//     }
// }