
const ToDoList = function(){

    let cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', 'todolist/style.css');
    document.head.append(cssLink);

    let fontsLink = document.createElement('link');
    fontsLink.setAttribute('rel', 'stylesheet');
    fontsLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
    document.head.append(fontsLink);

    let toDoList = document.createElement('div');
    toDoList.classList.add('nots');
    document.body.append(toDoList);

    let title = document.createElement('input');
    title.classList.add('nots__title');
    title.setAttribute('placeholder', 'new list');
    toDoList.append(title);
    let titleVal;
    
    title.addEventListener('keydown', function(event){
    
        (event.key == 'Enter') ? titleVal = title.value : '';
    });

    let addNewList = document.createElement('div');
    addNewList.classList.add('addNewList');
    toDoList.append(addNewList);

    addNewList.addEventListener('click', ToDoList);

    let input = document.createElement('input');
    input.classList.add('nots__new');
    input.setAttribute('placeholder', 'Type your task');
    toDoList.append(input);
    let inputVal;

    input.addEventListener('keydown', function(event){
    
        if(this.value == '' || this.value == null || this.value == undefined)return;
        if(event.key == 'Enter') {
            inputVal = input.value;
            newNote(inputVal);
        } 
    });


    let btnNewNote = document.createElement('button');
    btnNewNote.classList.add('btnNewNote');
    btnNewNote.innerHTML = 'ADD';
    toDoList.append(btnNewNote);

    btnNewNote.addEventListener('click', function(){
        if(input.value == '' || input.value == null || input.value == undefined)return;
        inputVal = input.value;
        newNote(inputVal);
    })

    const newNote = function(txt){

        let note = document.createElement('div');
        note.classList.add('nots__addNewNote');
        toDoList.append(note);
        note.innerHTML = txt;
    }


}

ToDoList();