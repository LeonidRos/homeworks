const filter = function(idElem){

    if(!idElem)return;

    let id = document.querySelector(`#${idElem}`);
    let btnsElems = id.querySelector('#filter_btns');
    let contentElems = id.querySelector('#filter_content');

    if(!btnsElems || !contentElems)return;

    btnsElems = Array.from(btnsElems.children);
    contentElems = Array.from(contentElems.children);

    if(btnsElems.length == 0 || contentElems.length == 0)return;

    const active = function(event){
        
        if(event.target.dataset.filter == 'all')
        contentElems.forEach(elem => elem.classList.remove('hide'));
        else
        contentElems.forEach(elem => {
            elem.classList.remove('hide');
            if(elem.dataset.filter != event.target.dataset.filter)
            elem.classList.add('hide');
        });

        btnsElems.forEach(elem => elem.classList.remove('active'));
        event.target.classList.add('active');
    };

    btnsElems.forEach(elem => elem.addEventListener('click', active));
};