var H1 = document.getElementsByTagName ('h1')[0]
var p1 = window.document.getElementsByTagName('p')[0]
var msg = document.getElementById('msg')
var text = document.getElementById('#test')
//window.document.write(`aqui é o JS ${p1.innerText}`)
//msg.innerText = 'estou estudando'
var msg = document.querySelector('div#msg')
msg.innerText = 'ola'
msg.style.color = 'black'
window.document.getElementById('#test');


const button = document.querySelector('button');
button.addEventListener('click', updateButton);
function updateButton() {
    if (button.value === 'enviar') {
        button.value = 'enviado';
    } else {
        button.value = 'enviar';
    }
}

