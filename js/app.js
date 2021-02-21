"use strict";
const names = [
    'bag',
    'bathroom',
    'chair',
    'banana',
    'boots',
    'breakfast',
    'bubblegum',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet sweep',
    'scissors',
    'shark',
    'sweep',
];

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-img');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');


function
product(name) {
    this.name = name;
    this.path = `./img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;
    //product.push(this);
    product.all.push(this);
}

product.all = [];
for (let i = 0; i < names.length; i++) {
    new product(names[i]);
}

console.table(product.all);

function render() {
    // left img
    const leftIndex = randomNumber(0, product.all.length - 1);
    console.log('LEFT', leftIndex, product.all[leftIndex].path);
    leftImage.src = product.all[leftIndex].path;
    leftImage.title = product.all[leftIndex].name;
    leftImage.alt = product.all[leftIndex].name;

    // center img 
    const centerIndex = randomNumber(0, product.all.length - 1);
    console.log('center', centerIndex);
    centerImage.src = product.all[centerIndex].path;
    centerImage.title = product.all[centerIndex].name;
    centerImage.alt = product.all[centerIndex].name;

    // right img 
    const rightIndex = randomNumber(0, product.all.length - 1);
    console.log('Right', rightIndex);
    rightImage.src = product.all[rightIndex].path;
    rightImage.title = product.all[rightIndex].name;
    rightImage.alt = product.all[rightIndex].name;


}

imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
    console.log('Target', event.target.id);
    if (event.target.id !== 'images-section') {
        for (let i = 0; i < product.all.length; i++) {
            if (product.all[i].name === event.target.title) {
                product.all[i].votes++;
                product.all[i].votes = product.all[i].votes + 1
            }
        }
        console.log(product.all);
        render();
    }
}
//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();