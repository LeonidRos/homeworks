
console.warn('Задание 1------------------------');

let strT1 = '';

for(let i = 0; i <= 50; i++){

    strT1 += i + ' ';
}

console.log(strT1);

strT1 = '';

for(let i = 38; i >= 0; i--){

    strT1 += i + ' ';
}

console.log(strT1);


console.warn('Задание 2------------------------');

let t2Counter = 89;

while(t2Counter >= 11){

    document.write(t2Counter + '<br />');
    t2Counter--;
}


console.warn('Задание 3------------------------');

let t3Sum = 0;
for(let i = 0; i <= 100; i++){

    t3Sum += i;

}

console.log(t3Sum);


console.warn('Задание 4------------------------');

let t4Sum = 0;

for(let i = 1; i <= 5; i++){

    t4Sum += i;
    console.log('сумма числа ' + i + ' = ' + t4Sum);
}

console.warn('Задание 5------------------------');

let arrT5 = [],
    t5Counter = 8;

for(; t5Counter <= 56; t5Counter += 2){

    arrT5.push(t5Counter);
}
console.log('for ', arrT5);

arrT5.splice(0);

t5Counter = 8;

while(t5Counter <= 56){

    arrT5.push(t5Counter);
    t5Counter += 2;
}
console.log('while ', arrT5);

console.warn('Задание 6------------------------');

let a = 2,
    c = 0;

for(let i = 2; i <= 10; i++){


    for(let j = 2; j <= 10; j++){

        c = a * j;
        console.log(a + ' * ' + j + ' = ' + c);
    }
    console.log('...');
    a++;
}

console.warn('Задание 7------------------------');

let n = 1000,
    num = 0;

while(true){

    n /= 2;
    num++;
    if(n < 50)break;
}

console.log('Полученное число - ' + +n + ' количество итераций - ' + +num);

console.warn('Задание 8------------------------');

let t7 = 0,
    t7Sum = 0,
    t7AvSum = 0,
    t7Counter = 0;

while(true){

    t7 = +prompt('Задание 9. Введите число.');
    t7Sum += t7;
    t7Counter++;
    t7AvSum = t7Sum / t7Counter;
    if(t7 == '' || t7 == 0)break;
}

alert('Общая сумма = '+ t7Sum + '. Cреднее арифметическое = ' + t7AvSum);

console.warn('Задание 9------------------------');

let strT9 = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 8 1 36 8 57',
    maxN = -Infinity,
    minN = Infinity,
    arrT9 = strT9.split(' ');

console.log(arrT9);

for(let i = 0; i < arrT9.length; i++){

    if(maxN < +arrT9[i]) maxN = +arrT9[i];
    if(minN > +arrT9[i]) minN = +arrT9[i];
}

console.log('Самое большое число в строке = ' + maxN + '\n' + 'Самое маленькое число в строке = ' + minN);


console.warn('Задание 9------------------------');

let t10 = prompt('Задание 10. Введите число n'),
    strT10 = t10 + '';
    let arrT10 = 0;
    let arrT10Buffer = [];

for(let i = 0; i < strT10.length; i++){

    arrT10 += +strT10[i];
}
arrT10Buffer = strT10.split('');

let arrReverse = arrT10Buffer.reverse().join('');

console.log('цифр в числе = ' + strT10.length + '; сумма = ' + arrT10 + '; обратный порядок = ' + +arrReverse);