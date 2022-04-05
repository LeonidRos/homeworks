console.warn('Задание 1------------------------');

let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length; i++){

    console.log(arr1[i]);
}


console.warn('Задание 2------------------------');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr2.length; i++){

    if(arr2[i] > -10 && arr2[i] < -3){
    console.log(arr2[i]);
    }
}


console.warn('Задание 3------------------------');

let arr3For = [],
    arr3While = [],
    count3 = 0,
    result = 0;

for(let i = 23; i <= 57; i++){

    arr3For.push(i);
    result += arr3For[count3];

    count3++;
}

count3 = 23;

while(count3 <= 57){

    arr3While.push(count3);
    count3++;
}

console.log('Array with for ' + arr3For);
console.log('Array with while ' + arr3While);
console.log('Result ' + result);


console.warn('Задание 4------------------------');

let arr4 = ['10', '20', '30', '50', '235', '300', '3234', '44', '6565', '555'],
    int4Buff = [];

for(let i = 0; i < arr4.length; i++){

    int4Buff = arr4[i].split('');
    (+int4Buff[0] === 1) ? console.log(arr4[i]) : '';
    (+int4Buff[0] === 2) ? console.log(arr4[i]) : '';
    (+int4Buff[0] === 5) ? console.log(arr4[i]) : '';
    
}


console.warn('Задание 5------------------------');

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i = 0; i < arr5.length; i++){


    if(i === 5 || i === 6){

        document.write('<b> ' + arr5[i] + '</b>');
    }else{
        document.write(arr5[i] + ' ');
    }
}

console.warn('Задание 6------------------------');

// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

let arr6 = [1, 2, 44, 22, 232, 'gre', true, 404];

arr6.push('makaba');

let elem6 = arr6[arr6.length - 1];

console.log(arr6);
console.log('Last element of this array: ' + elem6);

