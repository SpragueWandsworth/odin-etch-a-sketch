//remove outlines at the end

const mainContainer = document.querySelector('.main-container');
const promptButton = document.querySelector('.prompt-button');

function createGrid(rows) {
    if (rows > 100) return;
    for (let i = 1; i <= rows; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        mainContainer.appendChild(column);
        for (let i = 1; i<= rows; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            column.appendChild(box);
            box.addEventListener("mouseover", () => box.style.backgroundColor = 'red');
        };
    };
};

//let pro = prompt('How many rows do you want?');
createGrid(16);
