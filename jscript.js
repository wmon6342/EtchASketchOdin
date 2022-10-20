// let i be the result of user input


// we want a function that takes i as an argument and returns a div i x i large and i^2 of them
// We want all these divs contained in the body of the HTML

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

const button = document.createElement('button');
button.textContent = 'Enter the number of squares per side you want: ';
document.body.appendChild(button);
button.style.margin = '24px';


const div = document.createElement('div');
div.classList.add('.kingdiv');
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.width = '960px';
div.style.height = '960px';
div.style.border = '2px solid black';
document.body.appendChild(div);

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function removeChildNodes() {
    k = div.querySelectorAll()
    div.removeChild(k);
}

function addSquareColour(div) {
    let c = 0;
    if (c < 225) {
        div.addEventListener('mouseover', () => {
            let x = randomNumber();
            let y = randomNumber();
            let z = randomNumber();
            x = x - c;
            y = y - c;
            z = z - c;
            div.style.backgroundColor = `rgb(${x},${y},${z})`;
            c = c + 25;
    });
}
}
 

function removeSquareColour(div) {
    div.addEventListener('mouseover', (event) => {
        if(event.ctrlKey) {
            div.style.backgroundColor = '';
        }
    });
}


function removeSquares() {
    while(div.children) {
        i = div.querySelector('div');
        div.removeChild(i);
        }
}

button.addEventListener('click', () => {
    removeSquares();
});

button.addEventListener('click', () => {
    let j = prompt('Enter number of squares per side: ');
    if(j > 100) {
        alert('Cannot be more than 100x100');
        return;
    } else {
        for (let i = 0; i < (j**2); i++) {     
            const k = document.createElement('div');
            k.style.display = 'flex';
            k.style.flexFlow = 'row wrap';
            k.style.flex = '1 0 auto';
            k.style.width = (((960 / j)-2) + 'px');
            k.style.height = (((960 / j)-2) + 'px');
            k.style.border = '1px solid black';
            div.appendChild(k);
        }
    }
    king = div.querySelectorAll('div');
    king.forEach(addSquareColour);
    king.forEach(removeSquareColour);
});


