"use strict";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = [
    'bag.jpg',
    'bathroom.jpg',
    'chair.jpg',
    'banana.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg',
    'tauntaun.jpg'
];
// let imgs = [];
// let cuntr = 0;


const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-img');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');
const resultsBtn = document.getElementById('btn');

let laps = 25;
let imgs = [];





function
Product(name) {
    this.name = name;
    this.path = `./img/${name}`;
    this.votes = 0;
    this.views = 0;
    //Product.push(this);
    Product.all.push(this);
}

Product.all = [];
// JOSN 
for (let i = 0; i < Product.length; i++) {
    new Product(Product[i]);
}

function updateList() {
    const upList = JSON.stringify(Product.all);
    localStorage.setItem("voteProducts", upList);
}


function getList() {
    const gList = localStorage.getItem("voteProduct");
    if (gList) {
        Product.all = JSON.parse(gList);
        render();
    }
}

for (let i = 0; i < Product.length; i++) {
    new Product(Product[i]);
}




function getList() {
    var gList = localStorage.getItem("productVotes");
    if (gList) {
        Vote.all = JSON.parse(gList);
        render();
    }
}

for (let i = 0; i < names.length; i++) {
    new Product(names[i]);
}

console.table(Product.all);


let dontRepet = []

function render() {
    let leftIndex = randomNumber(0, Product.all.length - 1);
    let centerIndex = randomNumber(0, Product.all.length - 1);
    let rightIndex = randomNumber(0, Product.all.length - 1);

    // don't repet 
    while (dontRepet.includes(rightIndex) || (rightIndex === centerIndex || rightIndex === leftIndex)) {
        rightIndex = randomNumber(0, Product.all.length - 1);
        console.log('first');
        console.log(dontRepet);
    }

    while (dontRepet.includes(centerIndex) || (centerIndex === rightIndex || centerIndex === leftIndex)) {
        centerIndex = randomNumber(0, Product.all.length - 1);
        console.log('second');
    }

    while (dontRepet.includes(leftIndex) || (leftIndex === centerIndex || leftIndex === rightIndex)) {
        leftIndex = randomNumber(0, Product.all.length - 1);
        console.log('last');
    }

    dontRepet = [rightIndex, centerIndex, leftIndex];



    // left imge
    leftImage.src = Product.all[leftIndex].path;
    leftImage.title = Product.all[leftIndex].name;
    leftImage.alt = Product.all[leftIndex].name;
    Product.all[leftIndex].views++

        // center imge
        centerImage.src = Product.all[centerIndex].path;
    centerImage.title = Product.all[centerIndex].name;
    centerImage.alt = Product.all[centerIndex].name;
    Product.all[centerIndex].views++
        // right imge
        rightImage.src = Product.all[rightIndex].path;
    rightImage.title = Product.all[rightIndex].name;
    rightImage.alt = Product.all[rightIndex].name;
    Product.all[rightIndex].views++
        for (let i = 0; i < Product.length; i++) {

            switch (i) {
                case rightIndex:
                    Product.all[i].views++;
                    break;

                case centerIndex:
                    Product.all[i].views++;
                    break;

                case leftIndex:
                    Product.all[i].views++;

                    break;

                default:
                    break;
            }

        }

}


render()

imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
    laps--;

    if (laps === 0) {
        imagesSection.removeEventListener('click', handleClick);
        createChart();
    } else {
        if (event.target.id !== 'images-section') {
            console.log(event.target);
            for (let i = 0; i < Product.all.length; i++) {
                if (Product.all[i].name === event.target.title) {
                    Product.all[i].votes++;
                }
            }
            render();
            console.log(Product.all);
        }
    }
}
render();

function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const productviews = [];
    const productNames = [];
    const productVotes = [];
    for (let i = 0; i < Product.all.length; i++) {
        productNames.push(Product.all[i].name);
        productVotes.push(Product.all[i].votes);
        productviews.push(Product.all[i].views);
    }
    console.log('Votes', productVotes);
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: productNames,
            datasets: [{
                barPercentage: 0.5,
                // barThickness: 6,
                borderWidth: 5,
                label: '# of votes:',
                backgroundColor: 'rgb(100, 125, 50)',
                borderColor: 'rgb(0, 0, 0)',
                data: productVotes,
            }, ],
        },

        // Configuration options go here
        options: {},
    });
}



function resultBtn(event) {
    resultsBtn.removeEventListener('click', resultBtn);
    const listsec = document.getElementById('list');
    const ul = document.createElement('ul');
    listsec.appendChild(ul);
    for (let i = 0; i < Product.all.length; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.all[i].name.toUpperCase()} had "${Product.all[i].likes}" likes and was shown "${Product.all[i].views}" times.`;
    }

}
render();
imagesSection.addEventListener('click', handleClick);

updateList()
getList()



//lab 11

// function render() {
//     // left img
//     const leftIndex = randomNumber(0, Product.all.length - 1);
//     console.log('LEFT', leftIndex, Product.all[leftIndex].path);
//     leftImage.src = Product.all[leftIndex].path;
//     leftImage.title = Product.all[leftIndex].name;
//     leftImage.alt = Product.all[leftIndex].name;
//     Product.all[leftIndex].views++
//         let centerIndex = leftIndex;
//     while (centerIndex === leftIndex) {
//         const centerIndex = randomValue(leftIndex, imgs.length - 1);
//         if (centerIndex !== leftIndex) {
//             break;
//         }
//     }

//     // center img 
//     centerIndex = randomNumber(0, Product.all.length - 1);
//     console.log('center', centerIndex);
//     centerImage.src = Product.all[centerIndex].path;
//     centerImage.title = Product.all[centerIndex].name;
//     centerImage.alt = Product.all[centerIndex].name;
//     Product.all[centerIndex].views++
//         let rightIndex;
//     while (centerIndex !== leftIndex) {
//         rightIndex = randomValue(0, imgs.length - 1);
//         if (rightIndex === leftIndex || rightIndex === centerIndex);
//         rightIndex = randomValue(imgs.length - 1); {
//             {
//                 break;
//             }

//         }


//     }


//     // right img 
//     rightIndex = randomNumber(0, Product.all.length - 1);
//     console.log('Right', rightIndex);
//     rightImage.src = Product.all[rightIndex].path;
//     rightImage.title = Product.all[rightIndex].name;
//     rightImage.alt = Product.all[rightIndex].name;
//     Product.all[rightIndex].views++


// }

// imagesSection.addEventListener('click', handleClick);

// function handleClick(event) {
//     console.log('Target', event.target.id);
//     if (event.target.id !== 'images-section') {
//         for (let i = 0; i < Product.all.length; i++) {
//             if (Product.all[i].name === event.target.title) {
//                 Product.all[i].votes++;
//                 Product.all[i].votes = Product.all[i].votes + 1
//             }
//         }
//         console.log(Product.all);
//         render();
//     }
//     cuntr = cuntr + 1;
//     if (cuntr === laps) {
//         imagesSection.removeEventListener('click', handleClick);
//         const resBtn = document.createElement('button');
//         resultsBtn.appendChild(resBtn);
//         resBtn.textContent = 'View Results';
//         resBtn.className = 'btn';
//         resultsBtn.addEventListener('click', resultBtn);
//     }
// }
// //helper functions
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }