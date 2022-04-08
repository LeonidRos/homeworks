console.warn('Задание 1------------------');

function task1(a, b ,c){

    console.log((a - b)/ c);
}

task1(18, 2, 4);

console.warn('Задание 2------------------');

function cubeAndSqare(a, pow){

    let b = 0;

    if(pow == 2)b = a*a; 
    else if(pow == 3)b = a*a*a;
    else{
        console.log('Error: out of bounds');
    }
    return b;
}

console.log(cubeAndSqare(4, 2));
console.log(cubeAndSqare(4, 3));


console.warn('Задание 3------------------');

function minMax(a, b){
    // a > b ? return a : return b; error 

    if(a > b)return a; else return b;
}

console.log(minMax(5, 88));

console.warn('Задание 4------------------');

function createArray(){

    let countArreyCells = prompt('Enter the number of array cells: '),
        rangeStart = prompt('Enter the start range: '),
        rangeEnd = prompt('Enter the end range: '),
        array = [];

    for(let i = 0; i < countArreyCells; i++){
        array.push(Math.floor(Math.random() * (+rangeEnd - +rangeStart + 1) + +rangeStart));
    }
    return array;
}

let arr = createArray();

function showArray(array){

    console.log(`Your array: ${array}`);
}

showArray(arr);


console.warn('Задание 5------------------');

function isEven(num){

    num /= 2;
    let int = parseInt(num);

    if(+int === +num){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(4040141));


console.warn('Задание 6------------------');

function isEvenArray(arr){

    let arrEven = [];
    for(let i = 0; i < arr.length; i++){

        if(isEven(arr[i])){
            arrEven.push(arr[i]);
        }
    }

    return arrEven;
}

console.log(isEvenArray([1, 2, 6, 99, 88, 4, 5, 9]));


console.warn('Задание 7------------------');

function drawPyromid(rows){

    for(let i = 0; i <= rows; i++){

        let columns = '';

        for(let j = 0; j < i; j++){
            
            if(arguments[1] == undefined)columns += i;    
            else if(arguments[1] != ' ')columns += arguments[1];;
        }

        if(arguments[1] == ' '){

            console.error('Error: don\'t use space');
            break;
        }
        console.log(columns);
    }
}

drawPyromid(9);
drawPyromid(9, ' ');
drawPyromid(9, '@');


console.warn('Задание 8------------------');

//Первая часть была в прошлой дамашке, поэтому написал только вторую часть.

function drawTriangleReverse(){


    let rows = prompt('Задание 10. Введите кол-во рядов треугольника...');

    let triSpace = 0,
        triChar = 0;

    for(let i = rows; i > 0; i--){

        triChar = i * 2 - 1;
        triSpace = rows - i;
        console.log(' '.repeat(triSpace), '*'.repeat(triChar));
    }
}

drawTriangleReverse();


console.warn('Задание 9------------------');

function pushArrayFibb(){

    let f0 = 0,
        f1 = 1,
        f2 = 0,
        arrFib = [];

    arrFib.push(0, 1);

    while(arrFib[arrFib.length - 1] <= 1000){

        f2 = f0 + f1;
        arrFib.push(f2);

        f0 = f1;
        f1 = f2;
    }
    return arrFib;
}

console.log(pushArrayFibb());  


console.warn('Задание 10------------------');

function lessThanNine(int){

    int += '';
    let less9 = 0;

    for(let i = 0; i < int.length; i++){

        less9 += +int[i];  
    }

    if(less9 > 9)lessThanNine(less9);
    else return less9;
}
console.log(lessThanNine(44554));
console.log(`почему-то возвращается undefined если 
передавать в функцию 3-х и более значное число... 
я тыркался, тыркался... но так и не разобрался`);

console.warn('Задание 11------------------');

function testRecursion(array){

    if(arguments[1] == undefined)arguments[1] = 0;

    if(array.length > arguments[1]){

        console.log(array[arguments[1]]);
        testRecursion(array, arguments[1] + 1);
    }
}

testRecursion([1, 5, 44, 'oh sh*t', true, 'this is a ghoust', 9]);

console.warn('Задание 12------------------');

function getName(){

    let fname = prompt('Задание 12. Введите ваше имя'),
        sname = prompt('Введите вашу фамилию'),
        fathname = prompt('Введите ваше отчество'),
        group = prompt('Введите номер вашей группы'),

        row1 = 'Домашняя работа: «Функции»',
        row2 = 'Выполнил: студент гр. ' + group,
        row3 = '  ' + sname + fname + fathname,
        maxN = -Infinity,
        arr = [];

    arr.push(row1.length, row2.length, row3.length);


    for(let i = 0; i < 3; i++){

        if(maxN < arr[i])maxN = arr[i];
    }

    console.log('*'.repeat(maxN + 4));
    console.log(`* Домашняя работа: «Функции» ${' '.repeat(maxN - row1.length)}*`);
    console.log(`* Выполнил: студент гр. ${group} ${' '.repeat(maxN - row2.length)}*`);
    console.log(`* ${sname} ${fname} ${fathname} ${' '.repeat(maxN - row3.length)}*`);
    console.log('*'.repeat(maxN + 4));  
}

getName();

// Курс «JS».
// 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.