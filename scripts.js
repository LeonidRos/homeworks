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

