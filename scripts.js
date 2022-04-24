let html = document.querySelector('html');
html.setAttribute('leng', 'ru');

let headTitile = document.createElement('title');
headTitile.innerHTML = 'Choose Your Option';
document.head.append(headTitile);

let headMeta = document.createElement('meta');
headMeta.setAttribute('charset', 'utf-8');
document.head.append(headMeta);

let linkHead = document.createElement('link');
linkHead.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat&family=Open+Sans&display=swap');
linkHead.setAttribute('rel', 'stylesheet');
document.head.append(linkHead);

let mainElem = document.createElement('div');
mainElem.classList.add('main');
document.body.append(mainElem);
mainElem.style.display = 'flex';
mainElem.style.justifyContent = 'center';
mainElem.style.flexDirection = 'column';
mainElem.style.alignItems = 'center';
mainElem.style.fontFamily = `Arvo, serif`;

let h2Elem = document.createElement('h2');
h2Elem.classList.add('header2');
h2Elem.innerHTML = 'Choose Your Option';
h2Elem.style.fontSize = '36px';
mainElem.append(h2Elem);

let spanElem1 = document.createElement('span');
spanElem1.classList.add('monss');
spanElem1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
spanElem1.style.fontSize = '16px';
spanElem1.style.fontFamily = 'Open Sans, sans-serif';
spanElem1.style.color = '#9FA3A7';
mainElem.append(spanElem1);

let divContent = document.createElement('div');
divContent.classList.add('main__content');
divContent.style.margin = '30px 0';
divContent.style.display = 'flex';
mainElem.append(divContent);

let divLeftElem = document.createElement('div');
divLeftElem.classList.add('left_side');
divLeftElem.style.height = '480px';
divLeftElem.style.width = '400px';
divLeftElem.style.display = 'flex';
divLeftElem.style.justifyContent = 'space-evenly';
divLeftElem.style.flexDirection = 'column';
divLeftElem.style.alignItems = 'center';
divLeftElem.style.textAlign = 'center';
divLeftElem.style.borderLeft = '1px solid #ededed';
divLeftElem.style.borderTop = '1px solid #ededed';
divLeftElem.style.borderBottom = '1px solid #ededed';
divLeftElem.style.borderRadius = '8px 0 0 8px';
divLeftElem.style.textAlign = 'center';
divLeftElem.style.textAlign = 'center';
divLeftElem.style.padding = '50px 50px';
divContent.append(divLeftElem);

let spanElem2 = document.createElement('span');
spanElem2.classList.add('opens');
spanElem2.innerHTML = 'freelanser';
spanElem2.style.fontSize = '16px';
spanElem2.style.fontFamily = 'Montserrat, sans-serif';
spanElem2.style.color = '#9FA3A7';
spanElem2.style.fontWeight = 'bold';
spanElem2.style.textTransform = 'uppercase';
spanElem2.style.letterSpacing = '2.4px';
divLeftElem.append(spanElem2);

let h3Elem = document.createElement('h3');
h3Elem.classList.add('header3');
h3Elem.innerHTML = 'Initially designed to ';
h3Elem.style.fontSize = '36px';
h3Elem.style.padding = '0 60px';
divLeftElem.append(h3Elem);

let spanElem3 = document.createElement('span');
spanElem3.classList.add('opens');
spanElem3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
spanElem3.style.fontSize = '16px';
spanElem3.style.fontFamily = 'Open Sans, sans-serif';
spanElem3.style.color = '#9FA3A7';
spanElem3.style.padding = '0 60px';
spanElem3.style.lineHeight = '26px';
divLeftElem.append(spanElem3);

let btnElem1 = document.createElement('button');
btnElem1.classList.add('btn1');
btnElem1.innerHTML = 'start here';
btnElem1.style.border = '3px solid #FFC80A';
btnElem1.style.borderRadius = '30px';
btnElem1.style.padding = '15px 30px';
btnElem1.style.backgroundColor = 'white';
btnElem1.style.textTransform = 'uppercase';
btnElem1.style.fontFamily = 'Montserrat, sans-serif';
btnElem1.style.letterSpacing = '2.4px';
btnElem1.style.fontWeight = 'bold';
btnElem1.style.cursor = 'pointer';
divLeftElem.append(btnElem1);

let divRightElem = document.createElement('div');
divRightElem.classList.add('left_side');
divRightElem.style.height = '480px';
divRightElem.style.width = '400px';
divRightElem.style.display = 'flex';
divRightElem.style.justifyContent = 'space-evenly';
divRightElem.style.flexDirection = 'column';
divRightElem.style.alignItems = 'center';
divRightElem.style.textAlign = 'center';
divRightElem.style.borderRight = '1px solid #ededed';
divRightElem.style.borderTop = '1px solid #ededed';
divRightElem.style.borderBottom = '1px solid #ededed';
divRightElem.style.borderRadius = '0 8px 8px 0';
divRightElem.style.textAlign = 'center';
divRightElem.style.textAlign = 'center';
divRightElem.style.padding = '50px 50px';
divRightElem.style.backgroundColor = '#8F75BE';
divContent.append(divRightElem);

let spanElem8 = document.createElement('span');
spanElem8.classList.add('opens');
spanElem8.innerHTML = 'studio';
spanElem8.style.fontSize = '16px';
spanElem8.style.fontFamily = 'Montserrat, sans-serif';
spanElem8.style.color = '#FFC80A';
spanElem8.style.fontWeight = 'bold';
spanElem8.style.textTransform = 'uppercase';
spanElem8.style.letterSpacing = '2.4px';
divRightElem.append(spanElem8);

let h3Elem1 = document.createElement('h3');
h3Elem1.classList.add('header3');
h3Elem1.innerHTML = 'Initially designed to ';
h3Elem1.style.fontSize = '36px';
h3Elem1.style.padding = '0 60px';
h3Elem1.style.color = 'white';
divRightElem.append(h3Elem1);

let spanElem33 = document.createElement('span');
spanElem33.classList.add('opens');
spanElem33.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
spanElem33.style.fontSize = '16px';
spanElem33.style.fontFamily = 'Open Sans, sans-serif';
spanElem33.style.color = '#fff';
spanElem33.style.padding = '0 60px';
spanElem33.style.lineHeight = '26px';
divRightElem.append(spanElem33);

let btnElem2 = document.createElement('button');
btnElem2.classList.add('btn1');
btnElem2.innerHTML = 'start here';
btnElem2.style.border = '3px solid #FFC80A';
btnElem2.style.borderRadius = '30px';
btnElem2.style.padding = '15px 30px';
btnElem2.style.backgroundColor = 'transparent';
btnElem2.style.textTransform = 'uppercase';
btnElem2.style.fontFamily = 'Montserrat, sans-serif';
btnElem2.style.letterSpacing = '2.4px';
btnElem2.style.fontWeight = 'bold';
btnElem2.style.color = 'white';
btnElem2.style.cursor = 'pointer';
divRightElem.append(btnElem2);