// Prendo container in html 
const container = document.querySelector('.container');
const button = document.getElementById('play-button');
// console.log(button);
const select = document.getElementById('difficulty');
// console.log(select);

let row = 0;
let col = 0;

button.addEventListener('click',
function () {
    container.innerHTML = '';
    if (select.value == 'easy') {
        row = 10;
        col = 10;
        console.log(select.value);
    } else if (select.value == 'hard') {
        row = 9;
        col = 9;
        console.log(select.value);
    } else if (select.value == 'crazy') {
        row = 7;
        col = 7;
        console.log(select.value);
    }
    
    const numberBox = row * col;

    for (let i = 0; i < numberBox; i++) {
        const square = document.createElement('div');
        square.classList.add('box');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        console.log(square);
        container.append(square); 
        
        square.addEventListener('click', function () {
           square.classList.add('clicked'); 
        });
    }

});






