
const mainContainer = document.querySelector('.main-container');
const promptButton = document.querySelector('.prompt-button');

let gridSize

promptButton.addEventListener('click', () => createGrid(gridSize = prompt('How many squares do you want per side?')));

function createGrid(rows) {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    };
    if (rows > 100) return;
    for (let i = 1; i <= rows; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        mainContainer.appendChild(column);
        for (let i = 1; i<= rows; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            column.appendChild(box);
            //convert to rgb
            box.addEventListener("mouseover", () => box.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`);
            box.addEventListener("mouseover", () => box.style.opacity = String(Number(box.style.opacity) + 0.1));
        };
    };
};
createGrid(16);
