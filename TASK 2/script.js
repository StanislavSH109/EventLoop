const time = 3000;

function progress(time) {
    const progressBarElement = document.querySelector('.container');
    const timerElement = document.createElement('span');
    const barElement = document.querySelector('.progress-bar');
    
    barElement.style.transition = `${time / 1000}s ease-in`;
    barElement.style.transform = 'scaleX(1)';
    timerElement.textContent = '0 с.';
    let timer = 1;

    const interval = setInterval(() => {
        timerElement.textContent = `${timer++} с.`;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, time)

    progressBarElement.append(timerElement);
}

progress(time);
