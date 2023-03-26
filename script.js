let container = document.getElementById('grid-container');
for(let i = 1; i <= 400; i++) {
        let div = document.createElement('div');
        div.classList.add('one');
        container.appendChild(div);
    } 

let currentDrawingMode = 'black';          // global variable to set drawing mode

//Setting up a function which changes the color of the divs when
//user clicks and hovers their mouse over the grid

function applyColor() {
    const divCell = document.querySelectorAll('.one');
    let mouseDown = false;

    divCell.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            mouseDown = true;
            applyColorToCell(cell);
        });

        cell.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        cell.addEventListener('mouseover', () => {
            if(mouseDown) {
                applyColorToCell(cell);
            }
        });
    });
}

//Below function checks the current drawing mode and applies the cell 
//color 

function applyColorToCell(cell) {
    if(currentDrawingMode === 'black') {
        cell.style.backgroundColor = 'black';
    } else if (currentDrawingMode === 'random') {
        cell.style.backgroundColor = rgbRandomizer();
    } else if (currentDrawingMode === 'grey') {
        addGrey(cell);
    }
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

//let's make a function for adding grey to div
function addGrey(cell) {
    let bgColor = cell.style.backgroundColor;     //get color of cell
    let rgb;           //to finally set the final rgb value

    if (bgColor === "white" || bgColor === "") {       //so that the rgb array is set to white if no color or even if 
        rgb = [255, 255, 255];                         //the background is white, the array has to be initialized
    } else {
        let leftParenIndex = bgColor.indexOf("(");
        let rightParenIndex = bgColor.indexOf(")");
        let rgbString = bgColor.slice(leftParenIndex + 1, rightParenIndex);              //slice -> rgb(x , y, z) -> "x, y, z"
        rgb = rgbString.split(",").map(Number)                                           // "x, y, z" -> [x, y, z]
    }

    let greyDecrementer = 25.5;            //10% of 255

    for(let i = 0; i < 3; i++) {                    //iterate thrice to go from rgb index 0 to less than 3
        rgb[i] -= greyDecrementer;                 // whatever value in that index decrease by grey
        if(rgb[i] < 0) {                           //if lets say, it goes to -ve, set it to 0 again
            rgb[i] = 0;
        }
    }
    cell.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;               //cell object passed as reference will retain properties
    
}

//The below function sets the background of cells to white when eraseButton is called

function addWhite() {
    const divCell = document.querySelectorAll('.one');
    divCell.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

//function to set the drawing mode to random 

function addRandom() {
    currentDrawingMode = 'random';
}

function applyGrey() {
    currentDrawingMode = 'grey';
}

//Creating a function that will call the addRandom and add 
//event listener to the randomizer button which will turn
//divs into random color only if user clicks and drags over and not just mouseover

function divColorRandomizer(){
    const random = document.querySelector('.rainbow-btn');
    random.addEventListener('click', addRandom);
}

//The below function will add a click event listener to Add some grey button

function greyButton () {
    const grey = document.querySelector('.grey-inc');
    grey.addEventListener('click', applyGrey);
}

//The below function erases the grid back to its original color

function eraseButton() {
    const eraser = document.getElementById('eraser-btn')
    eraser.addEventListener('click', () => {
        addWhite();
        currentDrawingMode = 'black';
    });
}


applyColor();
eraseButton();
divColorRandomizer();
greyButton();

