firstArray = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg'];
secondArray = ['img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg'];

const firstRowElement = document.querySelector('.card-image__row');


const myRandom = (min = 2000, max = 5000) => Math.floor(Math.random() * (max - min) + min);

const getImage = (image) => {
    image.forEach(img => {
       const imgElement = document.createElement('img');
       imgElement.setAttribute('src', img);
       firstRowElement.append(imgElement);
    });
}

const promiseImageFirstArray = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(firstArray);
    }, myRandom());
});

const promiseImageSecondArray = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(secondArray);
    }, myRandom())
})


promiseImageFirstArray().then(getImage);
promiseImageSecondArray().then(getImage);
