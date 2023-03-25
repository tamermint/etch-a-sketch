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

