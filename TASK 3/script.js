firstArray = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg'];
secondArray = ['img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg'];

const firstRowElement = document.querySelector('.card-image__row-first');
const secondRowElement = document.querySelector('.card-image__row-second');
const commonRowElement = document.querySelectorAll('.card-common');

const myRandom = (min = 2000, max = 5000) => Math.floor(Math.random() * (max - min) + min);

function progress(randomTime, row, callback) {
    const progressBarElement = document.createElement('div');
    progressBarElement.classList.add('progress-bar');
    row.append(progressBarElement);

    const timerElement = document.createElement('span');
    timerElement.textContent = '0 c.'
    row.append(timerElement);

    progressBarElement.style.transform = 'scaleX(0)';

    setTimeout(() => {
        progressBarElement.style.transition = `${randomTime / 1000}s ease-in`;
        progressBarElement.style.transform = 'scaleX(1)';
    }, 0)

    let second = 1;
    const interval = setInterval(() => {
        timerElement.textContent = `${second++} с.`;
    }, 1000)

    setTimeout(() => {
        clearInterval(interval);
        callback();
    }, randomTime);
};

const getImage = (image, row) => {
    image.forEach(element => {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', element);
        row.append(imageElement);
    });
}

function firstArrayPromise() {
    progress(myRandom(), firstRowElement, () => {
        getImage(firstArray, firstRowElement);
    });
}

function secondArrayPromise() {
    progress(myRandom(), secondRowElement, () => {
        getImage(secondArray, secondRowElement);
    });
}

firstArrayPromise();
setTimeout(() => {
    secondArrayPromise();
}, myRandom());


// const firstArrayPromise = () => new Promise((resolve) => {
//     progress(myRandom(), firstRowElement);
//     setTimeout(() => {
//         resolve(firstArray);
//     }, myRandom())
// })

// const secondArrayPromise = () => new Promise((resolve) => {
//     progress(myRandom(), secondRowElement);
//     setTimeout(() => {
//         resolve(secondArray);
//     }, myRandom())
// })

// firstArrayPromise().then((images) => getImage(images, firstRowElement));
// secondArrayPromise().then((images) => getImage(images, secondRowElement));