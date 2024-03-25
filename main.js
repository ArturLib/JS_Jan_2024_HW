// - Створити блок та:
//   - додати йому класи wrap, collapse, alpha, beta;
//   - додати стилі (довільні значення): колір фону, колір тексту, розмір тексту;
//   - додати цей блок в body;
//   - клонувати його повністю, та додати клон в body.

const divElement = document.createElement('div');

divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');

divElement.style.background = 'silver';
divElement.style.color = 'white';
divElement.style.fontSize = '25px';
divElement.style.margin = '5px';

divElement.innerText = 'Hello';
document.body.append(divElement, divElement.cloneNode(true));
// =================================================================================================================


// - Є масив:
//   ['Main', 'Products', 'About us', 'Contacts']
//   Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let headersElements = ['Main', 'Products', 'About us', 'Contacts'];

let uListElement = document.createElement('ul');
document.body.appendChild(uListElement);

for (const element of headersElements) {
    let liListElement = document.createElement('li');
    liListElement.innerText = `${element}`;
    uListElement.appendChild(liListElement);
}
// =================================================================================================================


// - Є масив
  let coursesAndDurationArray = [
      {title: 'JavaScript Complex', monthDuration: 5},
      {title: 'Java Complex', monthDuration: 6},
      {title: 'Python Complex', monthDuration: 6},
      {title: 'QA Complex', monthDuration: 4},
      {title: 'FullStack', monthDuration: 7},
      {title: 'Frontend', monthDuration: 4}
  ];
//   Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration;
//   Завдання робити через цикли.

for (const course of coursesAndDurationArray) {

    let divCourseElement = document.createElement('div');
    divCourseElement.innerHTML = `КУРС: <strong>${course.title}</strong>, тривалість курсу - <i>${course.monthDuration}</i>`;

    document.body.appendChild(divCourseElement);
}
// =================================================================================================================


// - Є масив
  let coursesAndDurationArray2 = [
      {title: 'JavaScript Complex', monthDuration: 5},
      {title: 'Java Complex', monthDuration: 6},
      {title: 'Python Complex', monthDuration: 6},
      {title: 'QA Complex', monthDuration: 4},
      {title: 'FullStack', monthDuration: 7},
      {title: 'Frontend', monthDuration: 4}
  ];
//   За допомоги скрипта для кожного елементу масиву зробити <div class='item'>, в якому буде <h1 class='heading'>
//   з title елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.

for (const element of coursesAndDurationArray2) {

    let divBlock = document.createElement('div');
    divBlock.classList.add('item');

    let firstOrderHeaderElement = document.createElement('h1');
    firstOrderHeaderElement.classList.add('heading');
    firstOrderHeaderElement.innerHTML = `<i>title</i> - ${element.title}`;

    let paragraphElement = document.createElement('p');
    paragraphElement.classList.add('description');
    paragraphElement.innerHTML = `<i>month duration</i> - ${element.monthDuration}`

    document.body.appendChild(divBlock);
    divBlock.append(firstOrderHeaderElement, paragraphElement)
}
// =================================================================================================================


// - Є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться).
//   Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкту.
//   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв ' +
            'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. ' +
            'У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього ' +
            'учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». ' +
            'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. ' +
            'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — ' +
            'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. ' +
            'Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на ' +
            'оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. ' +
            'Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, ' +
            'детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. ' +
            'Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность ' +
            'не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир.' +
            ' Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны».' +
            'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим ' +
            'умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны».' +
            'Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. ' +
            '19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ' +
            'ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу ' +
            'Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, ' +
            'дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {

    let divElSimpsonMember = document.createElement('div');
    divElSimpsonMember.classList.add('member');

    divElSimpsonMember.innerHTML = `
        <h2>Character:</h2>
        <h3>Name - ${simpson.name}</h3> 
        <h3>Surname - ${simpson.surname}</h3>
        <p>Age - ${simpson.age}</p>
        <p>Info - ${simpson.info}</p>
        `;

    let imgElSimpsonMember = document.createElement('img');
    imgElSimpsonMember.src = simpson.photo;

    document.body.appendChild(divElSimpsonMember);

    divElSimpsonMember.appendChild(imgElSimpsonMember);
}
// =================================================================================================================


//   Цикл в циклі.
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться).
//   Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
//   окремих властивостей, для властивості modules зробити список з елементами.
//   Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом.

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesArrayElement of coursesArray) {
    let divBlock = document.createElement('div');
    let divBlockTitle = document.createElement('div');
    divBlockTitle.innerText = `Title - ${coursesArrayElement.title}`;
    let divBlockMonthDuration = document.createElement('div');
    divBlockMonthDuration.innerText = `Month duration - ${coursesArrayElement.monthDuration}`;
    let divBlockHourDuration = document.createElement('div');
    divBlockHourDuration.innerText = `Hour duration - ${coursesArrayElement.hourDuration}`;

    document.body.appendChild(divBlock);
    divBlock.append(divBlockTitle, divBlockMonthDuration, divBlockHourDuration);

    for (const element of coursesArrayElement.modules) {
        let divBlockModulesLi = document.createElement('li');
        divBlockModulesLi.innerText = `${element}`
        divBlock.appendChild(divBlockModulesLi);
    }
}
// =================================================================================================================