let container = document.getElementById('grid-container');
for(let i = 1; i <= 400; i++) {
        let div = document.createElement('div');
        div.classList.add('one');
        container.appendChild(div);
    } 
//The above code is currently commented out so that I can reuse it if needed

//Setting up a function which changes the color of the divs when
//user clicks and hovers their mouse over the grid

(function divColorChanger() {
    const gridCell = document.querySelectorAll('.one');
    const gridColor = document.querySelector('.color-box');

    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
    return gridCell;
})();

//The below function erases the grid back to its original color

(function eraseGrid() {
    const eraser = document.getElementById('eraser-btn')
    const gridCell = document.querySelectorAll('.one');

    eraser.addEventListener('click', () => {
        gridCell.forEach((cell) => {
            cell.style.backgroundColor = 'white';
        });
    });
})();

//creating a function that will randomly return an rgb value
function rgbRandomizer() {
    //need to get three values between 0 - 255
    /* const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min; */

    const randomItem = () => {
        return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    }
        const r = randomItem();
        const g = randomItem();
        const b = randomItem();

        const randomRGB = `rgb(${r}, ${g}, ${b})`;
    
    return randomRGB;
}

//function to add the random color to div after selecting randomizer

function addRandom() {
    const divCell = document.querySelectorAll('.one');
    divCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = rgbRandomizer();
        })
    })
    return divCell;
}

//Creating a function that will randomly add color to divs

(function divColorRandomizer(){
    const random = document.querySelector('.rainbow-btn');
    random.addEventListener('click', addRandom);
})();