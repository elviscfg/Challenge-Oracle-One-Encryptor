var chaves = ["enter", "imes", "ai", "ober", "ufat"];
var letras = ["e", "i", "a", "o", "u"];

function ciptografia() {
    
    var texto = document.getElementById('text-area1').value;

    if (isTextlower(texto)) {
        for (var i = 0; i < letras.length; i++) {
            texto = texto.replaceAll(letras[i], chaves[i]);
        }
        mostrarResultado(texto);
    }
}

function descriptografia() {
    
    var texto = document.getElementById('text-area1').value;

    if(isTextlower(texto)) {
        for (var i = 0; i < letras.length; i++) {
            texto = texto.replaceAll(chaves[i], letras[i]);
        }
        mostrarResultado(texto);
    }

}

function mostrarResultado(texto) {
    var mostrar = document.getElementById('text-area2');
    mostrar.textContent = texto;

}

function copy() {
    let copyText = document.querySelector("#text-area2");
    copyText.select();
    document.execCommand("copy");
  }


function createCriptografarButton () {
    var button = document.createElement('button');
    button.textContent = 'Criptografar';
    button.classList.add('buttons-cript', 'color-ciptografar');
    button.addEventListener('click', ciptografia)
    

    return button;
}

function createDescriptografarButton () {
    var button = document.createElement('button');
    button.textContent = 'Descriptografar';
    button.classList.add('buttons-cript', 'color-descriptografar');

    button.addEventListener('click', descriptografia)

    return button;
}

function createCopiarButton () {
    var button = document.createElement('button');
    button.textContent = 'Copiar';
    button.classList.add('button-copy');

    button.addEventListener('click', copy);

    return button;
}


function renderButtons() {
    var divButtons = document.querySelector('.box-buttons');
    divButtons.innerHTML = '';
    var divButtonCopy = document.querySelector('.copy-button-box');
    divButtonCopy.innerHTML = '';

    var buttonCriptografar = createCriptografarButton();
    var buttonDescriptografar = createDescriptografarButton();
    var buttonCopiar = createCopiarButton();
    
    divButtons.appendChild(buttonCriptografar);
    divButtons.appendChild(buttonDescriptografar);
    divButtonCopy.appendChild(buttonCopiar);

 
}

function isTextlower (texto) {
    var change = document.getElementById('warning');
    var start;

    if(!/[^a-z\s]/.test(texto)) {
        change.style.color ='#0A3871';
        change.style.outlineStyle = 'none';
        start = true;
    } else {
        change.style.color ='red';
        change.style.outlineStyle = 'auto';
        start = false;
    }
    return start;
    
}

renderButtons();
