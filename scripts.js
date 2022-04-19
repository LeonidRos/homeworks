console.warn('Задание 1------------------------');
// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

console.log('aaa@bbb@ccc'.replace(/@/g, '!'));


console.warn('Задание 2------------------------');
// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let date = new Date('2025-12-31');

let opt = {

    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}

let dateRe = date.toLocaleString('en', opt).toString().replace(/(.{4})\-(.{2})\-(.{2})/, '$3/$2/$1');
console.log(dateRe); 

console.warn('Задание 3------------------------');
// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу javascript!';
console.log(str3.substr(2, 3), str3.substr(5, 11));
console.log(str3.substring(2, 5), str3.substring(5, 16));
console.log(str3.slice(2, 5), str3.slice(5, 16));


console.warn('Задание 4------------------------');
// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

arr4.forEach(element => {
    sum += Math.pow(element, 3);
});

console.log(Math.sqrt(sum));

console.warn('Задание 4------------------------');
// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

const onlyPlus = (a, b) => Math.abs(a - b);

console.log(onlyPlus(3, 5));
console.log(onlyPlus(6, 1));


console.warn('Задание 6------------------------');
// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

let date5 = new Date();

let opt5 = {

    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

date5.setDate(1);

console.log(date5.toLocaleString('en', opt5));

const fixDate = (str) => {

    let arr = str.match(/([0-9]+)/gm);
 
    // arr.map(elem => (+elem < 10) ? elem = '0' + elem : elem);
    // почему-то не работает, как так-то??
 

    for(let i = 0; i < arr.length - 2; i++) if(+arr[i] < 10) arr[i] = '0' + arr[i];
    //а так работает
    
    let fixed = `${arr[0]}/${arr[1]}/${arr[2]}, ${arr[3]}:${arr[4]}:${arr[5]} PM`;

    return fixed;   
 };


console.log(fixDate(date5.toLocaleString('en', opt5)));


console.warn('Задание 7------------------------');
// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

console.log('aa aba abba abbba abca abea'.match(/ab+a/g));

console.warn('Задание 8------------------------');
// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны>( <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

const phoneTest = (str) => {

    if(str.match(/\d/g).length == 12 || str.match(/\d/g).length == 11){

        return (/(^\+?375|^80)([ (]?\d{2}[ )]?|( \(\d{2})\) )(\d{3}[ -]?\d{2}[ -]?\d{2})/gm.test(str));

    }else{
        return false;
    }
};

console.log('+375295880286 - ', phoneTest('+375295880286'));
console.log('375 29 588 02 86 - ', phoneTest('375 29 588 02 86'));
console.log('375 29 588-02-86 - ', phoneTest('375 29 588-02-86'));
console.log('375 (29) 588-02-86 - ', phoneTest('375 (29) 588-02-86'));
console.log('80295880286 - ', phoneTest('80295880286'));
console.log('8029 588 02-- 86 - ', phoneTest('8029 588 02-- 86'));
console.log('80w29 588 02 86 - ', phoneTest('80w29 588 02 86'));
console.log('8029 58f8 02 86 - ', phoneTest('8029 58f8 02 86'));
console.log('+3752950286 - ', phoneTest('+37558886'));
console.log('+37529502222286 - ', phoneTest('+3752922223122232158886'));


console.warn('Классное задание 1------------------------');
// 1. Дан массив . Написать рекурсивную функцию, которая выводит элементы массива в обратном порядке.


const reverseArr = (arr, i = arr.length) => {
    i--;
    console.log(arr[i]);
    
    if(i > 0){

        reverseArr(arr, i);       
    }
}

reverseArr([1, 2, 3, 4, 5]);


console.warn('Классное задание 2------------------------');
// 2. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным значением или нет. Функция первым параметром должна принимать значение элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Нельзя пользоваться методами indexOf (или lastIndexOf), циклами for или while.

const inArray = (value, arr) => arr.includes(value);

console.log(inArray('sox', ['saw', 'sword', 'sox', 'skill']));

console.warn('Классное задание 3------------------------');
// 3. Перепишите код, заменив цикл for на метод map:

// let arr = ["Есть", "жизнь", "на", "Марсе"];

// const arrLength = [];
// for (let i = 0; i < arr.length; i++) {
// 	arrLength.push(arr[i].length);
// }

// console.log(arrLength); // 4,5,2,5

let arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = arr.map(elem => elem = elem.length);

console.log(arrLength); // 4,5,2,5


console.warn('Классное задание 4------------------------');
// 4. Есть 2 массива: arr1 = [1,2,3,4,5,6,7,8] и arr2 = [5, 3, 6, 9, 11]. Напишите функцию, которая принимает 2 массива и возвращает массив элементов, которые есть в обоих массивах. Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.

let arr1 = [1,2,3,4,5,6,7,8],
    arr2 = [5, 3, 6, 9, 11];

const arrayMerge = (arr1, arr2) => [...arr1, ...arr2];

const arrayMerge2 = (arr1, arr2) => {
    
    for(let i = 0; i < arr2.length; i++) arr1.push(arr2[i]);

    return arr1;
};


console.log(arrayMerge(arr1, arr2));
console.log(arrayMerge2(arr1, arr2));

console.warn('Классное задание 5------------------------');
// 5. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. Скопируйте массив vegetables в новый, и добавьте в него любой элемент.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const coryArr = (arr) => { return arrRes = [...arr]};

let arr5cw = coryArr(vegetables);

arr5cw.push('Помидор');
console.log(arr5cw);
console.log(vegetables);

console.log('Second part of task.');

const coryArr2 = (arr) => {

    let arrRes = [];
    arr.forEach(elm => arrRes.push(elm));
    return arrRes;
};

let arr5cw2 = coryArr2(vegetables);
arr5cw2.push('Помидор');
console.log(arr5cw2);
console.log(vegetables);


console.warn('Классное задание 6------------------------');
// 6. Есть массив arr = [0, true, false, true, 1, true, true, false, "true", undefined, "1", null]. Необходимо написать функцию, которая вернет количество true (boolean) элементов.

const trueArreyCounter = (arr, counter = 0) => { 
    
    arr.forEach(elem => (elem === true) ? counter++ : '');
    return counter;
};

console.log(trueArreyCounter([0, true, false, true, 1, true, true, false, "true", undefined, "1", null]));


console.warn('Классное задание 7------------------------');
// 7. Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.

const createArr = function(){
    
    let arr = [],
        value;

    while(value != ''){
        value = prompt('Enter some value.');
        arr.push(value);
    }

    arr.pop();
    return arr;
}

// console.log(createArr());

console.warn('Классное задание 8------------------------');
// 8. Напишите функцию numProducts(num),  которая в зависимости от переданного в нее целочисленного аргумента num, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»). По умолчанию аргумент num должен иметь значение 0.

//не разобрался как это сделать, слишком много условий.

console.warn('Классное задание 9------------------------');
// 9. Создайте функцию "Калькулятор", calc(expression), которая должны уметь вычислять операции: сложение, вычитание, умножение, разность; между положительными целочисленными значениями. Математическое выражение должно передаваться через параметр expression в виде строки, например: "45+8", "4-23". Если параметр не передается, то нужно запросить выражение через promp. Результат вычисления выведите через alert. Используйте регулярные выражения для "парсинг" (обработки) параметра).

const calc = expression => {

    if(expression == undefined)expression = prompt('Введите мат. операцию. Напримнр: "6+5"');
    let regExp2 = /(\d+)/gi,
        regExp3 = /([+-\/*])/gi,
        arrResult = expression.match(regExp2),
        arrResult2 = expression.match(regExp3),
        calcResult = 0;
    
    switch(arrResult2[0]){
        case '+': calcResult = +arrResult[0] + +arrResult[1]; break;
        case '-': calcResult = +arrResult[0] - +arrResult[1]; break;
        case '/': calcResult = +arrResult[0] / +arrResult[1]; break;
        case '*': calcResult = +arrResult[0] * +arrResult[1]; break;
    }
    alert(calcResult);
}
// calc();


console.warn('Классное задание 10------------------------');
// 10. Напиши функцию, которая будет проверять любой объем текста на вхождение плохих (запрещенных) слов, и возвращать новый, прошедший цензуру, текст. Запрещенные слова нужно заменить на символы "#" в зависимости от длины слова. В функцию нужно передавать два параметра: текст, массив запрещенных слов.

let strTask10 = 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные lorem даль вопроса знаках? Реторический послушавшись вершину власти взобравшись злых пояс заманивший одна живет первую залетают лучше, использовало проектах пустился всеми дорогу запятой языком то. Которое своих точках назад безопасную снова дороге диких семантика все большого подпоясал. Страна продолжил большой ее lorem, реторический вопрос, строчка оксмокс текста парадигматическая языкового инициал сбить себя рыбного своих, деревни знаках однажды возвращайся рот переписывается большого. Там назад меня великий осталось власти до журчит диких последний прямо путь, речью за даже маленький всемогущая наш родного дороге скатился реторический! Своих страна, lorem использовало большого назад, алфавит имени, города которой единственное встретил власти? Деревни но всеми наш! Запятой которой вопроса выйти образ, дороге пояс домах языкового дал агентство алфавит переписывается имени щеке, всемогущая, парадигматическая путь залетают то! Прямо напоивший приставка оксмокс послушавшись путь, ее если, вскоре грустный своего вдали речью языкового свой большого злых рот образ это скатился своих? Это, о повстречался рукопись составитель лучше пустился, ты взгляд не текста, предупреждал родного скатился даже последний она все? Скатился языкового lorem которое строчка. Но пояс предупреждал рыбного диких снова приставка безопасную деревни возвращайся рукописи решила проектах пустился пор встретил текста, составитель ему. Мир агентство безопасную образ переписывается?';

let arrCens = ['деревни', 'дороге', 'языкового'];

const textCensor = function(str, arr){

    arr.forEach(elem => {

        let regexp99 = new RegExp(elem, 'gmi');
        str = str.replace(regexp99, '#'.repeat(elem.length));
    });
    return str;
}

console.log(textCensor(strTask10, arrCens));