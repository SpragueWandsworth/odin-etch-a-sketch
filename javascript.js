
const mainContainer = document.querySelector('.main-container')

for (let i = 1; i <= 16; i++) {
    let column = document.createElement('div');
    column.textContent = 'test';
    column.classList.add('box');
    mainContainer.appendChild(column);
    for (let i = 1; i<= 15; i++) {
        let box = document.createElement('div');
        box.textContent = 'test';
        box.classList.add('box');
        column.appendChild(box);
    };
};