const gallery = function(elem){

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'js/gallery/gallery.css');
    document.head.append(link);

    let parentElem = document.querySelector(`#${elem}`);
    if(!parentElem)return;
    parentElem.classList.add('parentElem');
    
    let aElems = parentElem.querySelectorAll('[href]');
    if(!aElems)return;

    aElems = Array.from(aElems);

    let showElem = document.createElement('div');
    showElem.classList.add('show_elem');

    const btnElem = parentElem.querySelector('button');
    btnElem.classList.add('btn__close');

    const show = function(src){

        showElem.innerHTML = `

        <img src="${src}" alt="">

        `;

        parentElem.append(showElem);
        showElem.append(btnElem);
    }

    aElems.forEach(elem => {

        elem.addEventListener('click', function(event){
            event.preventDefault();
            let href = elem.getAttribute('href');
            if(!href) return; 

           show(href);
        });

    });

    btnElem.addEventListener('click', () => showElem.remove());
}