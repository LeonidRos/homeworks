
//1 задание--------------------------------------------

let name1 = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город?'),
    phone = prompt('Номер вашего телефона?'),
    email = prompt('Адрес эл.почты?'),
    company = prompt('Название вашей компании?');

document.getElementById('name').innerHTML = name1;
document.getElementById('age').innerHTML = age;
document.getElementById('city').innerHTML = city;
document.getElementById('phone').innerHTML = phone;
document.getElementById('email').innerHTML = email;
document.getElementById('company').innerHTML = company;


//2 задание-----------------------------------------

let name2 = name1;
let year = 2022 - age;
document.getElementById('name2').innerHTML = name2;
document.getElementById('year').innerHTML = year;


//3 задание----------------------------------------

task_3_btn.onclick = function() {
    let val = document.getElementById('val').value,
        first3n = val / 1000;
        first3n = Math.floor(first3n),
        last3n = val - first3n * 1000;

    if(first3n == last3n){

        document.getElementById('answer').innerHTML = 'Вы ввели: ' + first3n + ' и ' + last3n + ' Да!';
    }else{

        document.getElementById('answer').innerHTML = 'Вы ввели: ' + first3n + ' и ' + last3n + ' Нет!';
    }
}

//4 задание----------------------------------------

let a = [1, 0, -3];
for(let i = 0; i < 3;){

    if(a[i] > 0){

        document.getElementById('task_4_asw' + i).innerHTML = a[i] +' - Верно!';
    }else{

        document.getElementById('task_4_asw' + i).innerHTML = a[i] +' - Неверно!';
    }

    i++;
}


//5 и 6 задание----------------------------------------

let sum = 0,
    sqSum = sum,
    znak = '+';

task_5_btn.onclick = function() {

    let aa = document.getElementById('id_aa').value;
    let bb = document.getElementById('id_bb').value;


    if(11 > aa && aa > 2){ 
        
            bool1 = true;
      }else{
  
            bool1 = false;
      }
  
      if(14 > bb && bb >= 6){
  
            bool2 = true;
      }else{
    
            bool2 = false;
      }
  
      if(bool1 || bool2){
  
          document.getElementById('task_6_asw_aa').innerHTML = aa + ' и ' + bb + ' Верно';
      }else{
  
          document.getElementById('task_6_asw_aa').innerHTML = aa + ' и ' + bb + ' Неверно';
      }

    let sum = 0,
    sqSum = sum,
    znak = ' ';

    for(let i = 0; i < 5; i++){

        switch(i){
    
            case 0:
            sum = Number(aa) + Number(bb);
            znak = ' + ';
            sqSum = Math.pow(sum, 2);
            if(sum > 0){

                document.getElementById('id_task_5_asw0').innerHTML = aa + znak + bb + ' = ' + sum + ' квадрат суммы = ' + sqSum;
            }else{
    
                document.getElementById('id_task_5_asw0').innerHTML = aa + znak + bb + ' = ' + sum;
            }
            break;
    
            case 1:
            sum = aa - bb;
            znak = ' - ';
            sqSum = Math.pow(sum, 2);
            if(sum > 0){

                document.getElementById('id_task_5_asw1').innerHTML = aa + znak + bb + ' = ' + sum + ' квадрат суммы = ' + sqSum;
            }else{
    
                document.getElementById('id_task_5_asw1').innerHTML = aa + znak + bb + ' = ' + sum;
            }
            break;
    
            case 2: 
            sum = aa * bb;
            znak = ' * ';
            sqSum = Math.pow(sum, 2);
            if(sum > 0){

                document.getElementById('id_task_5_asw2').innerHTML = aa + znak + bb + ' = ' + sum + ' квадрат суммы = ' + sqSum;
            }else{
    
                document.getElementById('id_task_5_asw2').innerHTML = aa + znak + bb + ' = ' + sum;
            }
            break;
    
            case 3: 
            sum = aa / bb;
            znak = ' / ';
            sqSum = Math.pow(sum, 2);
            if(sum > 0){

                document.getElementById('id_task_5_asw3').innerHTML = aa + znak + bb + ' = ' + sum + ' квадрат суммы = ' + sqSum;
            }else{
    
                document.getElementById('id_task_5_asw3').innerHTML = aa + znak + bb + ' = ' + sum;
            }
            break;
        }
    
        
    }  
}



//7 задание----------------------------------------

let n = Math.floor(Math.random() * 59);

if(n <= 14){

    document.getElementById('task_7_asw').innerHTML = n + ' - ' + ' первая четверть часа.';
    
}else if(n >= 15 && n <= 29){

    document.getElementById('task_7_asw').innerHTML = n + ' - ' + ' вторая четверть часа.';
}else if(n >= 30 && n <= 44){

    document.getElementById('task_7_asw').innerHTML = n + ' - ' + ' третья четверть часа.';
}else if(n >= 44 && n <= 59){

    document.getElementById('task_7_asw').innerHTML = n + ' - ' + ' четвертая четверть часа.';
}



//8 задание----------------------------------------

let day = Math.floor(Math.random() * (32 - 1) + 1);

if(day <= 10){

    document.getElementById('task_8_asw').innerHTML = day + ' - ' + ' первая декада.';
    
}else if(day >= 11 && day <= 20){

    document.getElementById('task_8_asw').innerHTML = day + ' - ' + ' вторая декада.';
}else if(day >= 21 && day <= 31){

    document.getElementById('task_8_asw').innerHTML = day + ' - ' + ' третья декада.';
}


//9-10 задание----------------------------------------

let dayN,
    yearN,
    monthN,
    weekN,
    hourN,
    minuteN,
    secN,
    seasonN;

task_9_btn.onclick = function(){

    dayN = document.getElementById('task_9_input').value;

    yearN = dayN / 365;
    if(yearN < 1){

        document.getElementById('task_9_asw_years').innerHTML = 'Меньше года';
    }else{

        document.getElementById('task_9_asw_years').innerHTML = yearN + ' - года.';
    }

    monthN = dayN / 31;
    if(monthN < 1){

        document.getElementById('task_9_asw_month').innerHTML = 'Меньше месяца';
    }else{

        document.getElementById('task_9_asw_month').innerHTML = monthN + ' - месяцев.';
    }

    weekN = dayN / 7;
    if(weekN < 1){

        document.getElementById('task_9_asw_week').innerHTML = 'Меньше недели';
    }else{

        document.getElementById('task_9_asw_week').innerHTML = weekN + ' - недель.';
    }

    hourN = dayN * 24;
    minuteN = dayN * 1440;
    secN = dayN * 86400;

    document.getElementById('task_9_asw').innerHTML = hourN + ' - часов. <br/>' + minuteN + ' - минут. <br/>' + secN + ' - секунд.';

    (0 <= dayN && dayN <=31) ? seasonN = 1: '';
    (32 <= dayN && dayN <=59) ? seasonN = 2: '';
    (60 <= dayN && dayN <=90) ? seasonN = 3: '';
    (91 <= dayN && dayN <=120) ? seasonN = 4: '';
    (121 <= dayN && dayN <=151) ? seasonN = 5: '';
    (152 <= dayN && dayN <=181) ? seasonN = 6: '';
    (182 <= dayN && dayN <=212) ? seasonN = 7: '';
    (213 <= dayN && dayN <=243) ? seasonN = 8: '';
    (244 <= dayN && dayN <=273) ? seasonN = 9: '';
    (274 <= dayN && dayN <=304) ? seasonN = 10: '';
    (305 <= dayN && dayN <=334) ? seasonN = 11: '';
    (335 <= dayN && dayN <=365) ? seasonN = 12: '';
    (365 < dayN) ? seasonN = 13: '';
    
    
    switch(seasonN){

        case 1:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Январь. Зима';
            break;
        
        case 2:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Февраль. Зима';
            break;

        case 3:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Март. Весна';
            break;
        
        case 4:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Апрель. Весна';
            break;

        case 5:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Май. Весна';
            break;
        
        case 6:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Июль. Лето';
            break;

        case 7:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Июнь. Лето';
            break;
        
        case 8:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Август. Лето';
            break;

        case 9:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Сентябрь. Осень';
            break;
        
        case 10:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Октябрь. Осень';
            break;
                
        case 11:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Ноябрь. Осень';
            break;
    
        case 12:
            document.getElementById('task_10_asw').innerHTML = seasonN + ' - месяц Декабрь. Зима';
            break;  
        
        case 13:
            document.getElementById('task_10_asw').innerHTML = 'Ошибка. Вы вышли за границы!';
            break;  
    }
    
}