

const Car = function(){ 

    let typeFuel, fuel, weight, engVol, fuelcoff;

    this.setFuelType = function(t = 'Дизель'){

        if(!isNaN(t)){
            console.log('Введите тип топлива. "Бензин", "Дизель", "Пропан", "Метан"');
            return;
        }
        typeFuel = t;
        fuelcoff = this.getFuelCoff(t);
    }

    this.setFuel = function(f = 10){

        if(isNaN(f)){
            console.log('Введите кол-во топлива в литрах.');
            return;
        }
        fuel = +f;
    }

    this.setWeight = function(w = 1350){

        if(isNaN(w)){
            console.log('Введите вес авто в кг.');
            return;
        }
        weight = +w;
    }

    this.setEngeVol = function(e = 2.0){

        if(isNaN(e)){
            console.log('Введите объем двигателя в литрах.');
            return;
        }
        engVol = +e;
    }
    
    this.getResult = function(){

        
        let result = fuel * (fuelcoff) / (weight / 1000) / (engVol / 40);
  
        console.log(`
       
        Объем двигателя: ${engVol}л.
        Вес авто: ${weight}кг.
        Тип топлива: ${typeFuel}.
        Кол-во топлива: ${fuel}л.
        Вы сможете проехать около: ${result}км.

        `);
    }
    
    this.getFuelCoff = function(typeFuel){

        if(typeFuel == 'Бензин')return fuelcoff = 0.7;
        else if(typeFuel == 'Дизель')return fuelcoff = 1.2;
        else if(typeFuel == 'Пропан')return fuelcoff = 1.4;
        else if(typeFuel == 'Метан')return fuelcoff = 1.5;
    }

};

let car = new Car();
car.setEngeVol();
car.setFuel();
car.setWeight();
car.setFuelType();
car.getResult();

//Формула не работает. Слишком много переменных сложно подобрать правильную зависимость.