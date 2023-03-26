let container = document.getElementById('grid-container');
for(let i = 1; i <= 400; i++) {
        let div = document.createElement('div');
        div.classList.add('one');
        container.appendChild(div);
    } 
//The above code is currently commented out so that I can reuse it if needed

//Setting up a function which changes the color of the divs to black when
//user clicks and hovers their mouse over the grid

function divColorBlack() {
    const divCell = document.querySelectorAll('.one');
    let mouseDown = false;

    divCell.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            mouseDown = true;
            cell.style.backgroundColor = 'black';
        });

        cell.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        cell.addEventListener('mouseover', () => {
            if(mouseDown) {
                cell.style.backgroundColor = 'black';
            }
        });
    });
}


function addWhite() {
    const divCell = document.querySelectorAll('.one');
    divCell.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

//The below function erases the grid back to its original color

function eraseGrid() {
    const eraser = document.getElementById('eraser-btn')
    eraser.addEventListener('click', () => {
        addWhite();
    });
}


//creating a function that will randomly return an rgb value
function rgbRandomizer() {
    //need to get three values between 0 - 255
    const randomItem = () => {
        return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    }
        const r = randomItem();
        const g = randomItem();
        const b = randomItem();

        const randomRGB = `rgb(${r}, ${g}, ${b})`;
    
    return randomRGB;
}

//function to add the random color to div after user selects randomizer

function addRandom() {
    const divCell = document.querySelectorAll('.one');
    let mouseDown = false;

    divCell.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            mouseDown = true;
            cell.style.backgroundColor = rgbRandomizer();
        });

        cell.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        cell.addEventListener('mouseover', () => {
            if(mouseDown) {
                cell.style.backgroundColor = rgbRandomizer();
            }
        });
    });
}

//Creating a function that will call the addRandom and add 
//event listener to the randomizer button which will turn
//divs into random color only if user clicks and drags over and not just mouseover

function divColorRandomizer(){
    const random = document.querySelector('.rainbow-btn');
    random.addEventListener('click', addRandom);
}

//let's make a function for adding grey to div
/* function addGrey() {
    const divCell = document.querySelectorAll('.one');
    
} */

eraseGrid();
divColorBlack();
divColorRandomizer();

