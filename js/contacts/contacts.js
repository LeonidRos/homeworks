const Contacts = function(){

    let data = [],
        dataMT18 = [],
        id = 1;

    let checkAge = function(){

        dataMT18 = [];
        data.forEach(elem => {

            if(+elem.age < 18)dataMT18.push(elem);

        });
    };
    
    this.add = function(newData){
        
        if(!newData.name && !newData.age)return;
        if(newData.name == '' && newData.age == '')return; 
        newData.id = id;
        id++;
        data.push(newData);
        checkAge();
    };

    this.remove = function(id){

        if(!id)return;

        let dataTmp = data.filter(elem =>{

            return elem.id != id;

        });
        data = dataTmp;
        return dataTmp;
    }

    this.edit = function(id, newData){

        if(!id)return;

       data = data.map(elem =>{

            if(elem.id == id){
    
                elem = {...elem, ...newData};

                return elem; 
            }

            return elem;
            
        });

    }
    
    this.show = function(index){

        if(!index)return data;

        return data[index];
        
    };

    this.showMT = function(index){

        if(!index)return dataMT18;

        return dataMT18[index];
        
    };
};

let contacts = new Contacts();


const DOM = function(){

    this.create = function(tagName){

        return document.createElement(tagName);
    }

    this.attr = {
    }

    this.search = function(element = null, selector){

        if(element != null)element.querySelectorAll(selector);
            
        else document.body.querySelectorAll(selector);
    }
    
    this.addClass = function(element, className){

        element.classList.add(className);
    }

    this.removeClass = function(element, className){

        element.classList.remove(className);
    }

    this.toggleClass = function(element, className){

        element.classList.toggle(className);
    }

    this.hasClass = function(element, className){

       return element.classList.contains(className);
    }

    this.append = function(element, newElement, beforeElement = null){

        if(beforeElement != null)beforeElement.before(newElement);
        else element.append(newElement);
    }

    this.on = function(element, eventName, funcName){

        element.addEventListener(eventName, funcName);
    }

    this.in = function(elem, inner){

        elem.innerHTML = inner;
    }
}

const dom = new DOM();

const NewContacts = function(){
    Contacts.apply(this);

    let parentElem = dom.create('div'),
        parentBtnElem = dom.create('div'),
        inputNameElem = dom.create('input'),
        inputAgeElem = dom.create('input'),
        inputPhoneElem = dom.create('input'),
        inputMailElem = dom.create('input'),
        btnAddElem = dom.create('button');
        btnShowElem = dom.create('button');
        contMainElem = dom.create('div');
        
    inputNameElem.placeholder = 'Name';
    inputAgeElem.placeholder = 'Age';
    inputPhoneElem.placeholder = 'Phone number';
    inputMailElem.placeholder = 'E-mail';

    dom.addClass(parentElem, 'contacts__parent');
    dom.addClass(contMainElem, 'cont__main');
    dom.addClass(parentBtnElem, 'contacts__btns');
    dom.addClass(inputNameElem, 'contacts__inputs');
    dom.addClass(inputAgeElem, 'contacts__inputs');
    dom.addClass(inputPhoneElem, 'contacts__inputs');
    dom.addClass(inputMailElem, 'contacts__inputs');
    dom.addClass(btnAddElem, 'contacts__btn');
    dom.addClass(btnShowElem, 'contacts__btn');


    dom.in(btnAddElem, 'Add contact');
    dom.in(btnShowElem, 'Show all');

    document.body.append(parentElem, contMainElem);

    parentElem.append(inputNameElem, inputAgeElem, inputPhoneElem, inputMailElem, parentBtnElem);
    parentBtnElem.append(btnAddElem, btnShowElem);

    const onRemove = event =>{

        event.target.parentElement.remove();

        this.remove(event.target.parentElement.lastChild.innerHTML);
    }


    const onEdit = event =>{

        const updateEdit = () => {
            editOkElem.remove();
            editCancelElem.remove();
            dom.removeClass(parentElem, 'contacts__parent_active');
        }
    

        let editOkElem = dom.create('button'),
        editCancelElem = dom.create('button');
        dom.addClass(parentElem, 'contacts__parent_active');

        dom.in(editOkElem, 'OK');
        dom.in(editCancelElem, 'Cancel');
        
        dom.addClass(editOkElem, 'contacts__btn');
        dom.addClass(editOkElem, 'edit__btn_ok');
        dom.addClass(editCancelElem, 'contacts__btn');
        dom.addClass(editCancelElem, 'edit__btn_cancel');

        parentBtnElem.append(editOkElem, editCancelElem);

        editOkElem.addEventListener('click', ()=>{

            let data = {};
    
            if(inputNameElem.value)data.name = inputNameElem.value;
            if(inputAgeElem.value)data.age = inputAgeElem.value.match(/\d+/g).join('');
            if(inputPhoneElem.value)data.phone = inputPhoneElem.value;
            if(inputMailElem.value)data.email = inputMailElem.value;
    

            this.edit(event.target.parentElement.lastChild.innerHTML, data);

            updateEdit();
            reboot();
        });

        editCancelElem.addEventListener('click', () => {
            updateEdit()
            reboot();

        });

    }

    const update = () => contMainElem.innerHTML = '';

    const reboot = function(){

        inputNameElem.value = null;
        inputAgeElem.value = null;
        inputPhoneElem.value = null;
        inputMailElem.value = null;
      
    };

    const render = function(dataArr){

        update();
        dataArr.forEach(newData => {

            let contParentElem = dom.create('div'),
            contNameElem = dom.create('div'),
            contAgeElem = dom.create('div'),
            contPhoneElem = dom.create('div'),
            contEmailElem = dom.create('div'),
            contID = dom.create('div'),
            contBtnRemoveElem = dom.create('button'),
            contBtnEditElem = dom.create('button');


        dom.addClass(contParentElem, 'cont__parent');
        dom.addClass(contNameElem, 'cont__child');
        dom.addClass(contAgeElem, 'cont__child');
        dom.addClass(contPhoneElem, 'cont__child');
        dom.addClass(contEmailElem, 'cont__child');
        dom.addClass(contBtnRemoveElem, 'contacts__btn');
        dom.addClass(contBtnEditElem, 'contacts__btn');
        dom.addClass(contID, 'hide');

        contBtnRemoveElem.innerHTML = 'X';
        contBtnEditElem.innerHTML = 'Edit';

        contMainElem.append(contParentElem);

        if(newData.name)contNameElem.innerHTML = `name: ${newData.name}`;
        if(newData.age)contAgeElem.innerHTML = `age: ${newData.age}`;
        if(newData.phone)contPhoneElem.innerHTML = `phone: ${newData.phone}`;
        if(newData.email)contEmailElem.innerHTML = `email: ${newData.email}`;
        if(newData.id)contID.innerHTML = newData.id;
        contParentElem.append(contNameElem, contAgeElem, contPhoneElem, contEmailElem, contBtnRemoveElem, contBtnEditElem, contID);

        contBtnRemoveElem.addEventListener('click', onRemove);
        contBtnEditElem.addEventListener('click', onEdit);

        });

    }

    btnAddElem.addEventListener('click', event =>{

        let data = {};

        if(!inputNameElem.value)return;

        if(inputNameElem.value)data.name = inputNameElem.value;
        if(inputAgeElem.value)data.age = inputAgeElem.value.match(/\d+/g).join('');
        if(inputPhoneElem.value)data.phone = inputPhoneElem.value;
        if(inputMailElem.value)data.email = inputMailElem.value;


        this.add(data);
        reboot();
    });

    btnShowElem.addEventListener('click', event => render(this.show()));

    let timerID = setInterval(() => render(this.show()), 1000);

};

let newContacts = new NewContacts();




newContacts.add({
    name: 'blinchick',
    age: 21,
    phone: '37529588022341',
    email: 'blinchicck@gmail.com'
});

newContacts.add({
    name: 'varg vik',
    age: 66,
    phone: '66564654656',
    email: 'varg__vik@gmail.com'
});

newContacts.add({
    name: 'Leonid Ros',
    age: '25',
    phone: '375295880286',
    email: 'leonidros@gmail.com'
});

newContacts.add({
    name: 'Handsome Jack',
    age: '33',
    phone: '21415223747',
    email: 'jasfwa@gmail.com'
});

newContacts.add({
    name: 'kirill "backdoor"',
    age: 28,
    phone: '1231253575',
    email: 'kiridasf@gmail.com'
});

newContacts.add({
    name: 'zubochistka',
    age: '12',
    phone: '2131242151',
    email: 'zubochistka@gmail.com'
});


newContacts.add({
    name: 'sladkoeshka',
    age: 1,
    phone: '124125rt2',
    email: 'sladkoeshka@gmail.com'
});
