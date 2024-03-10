const rubTarget = 5;
let rubCount = 0;

const boardElement = document.querySelector('#board');

const jelloonElement = document.querySelector('#image');
jelloonElement.addEventListener('click', handleJelloonClick);

const happyJelloonImage = new Image();
happyJelloonImage.src = 'res/images/happyjelloon.png';

const messageElement = document.querySelector('#message');
messageElement.innerText = 'Rub count: ' + rubCount;

function addRub() {
    rubCount++;
}

function handleJelloonClick(event) {
    addRub();
    messageElement.innerText = 'Rub count: ' + rubCount;

    if (rubCount >= rubTarget) {
        const jelloonElement = document.querySelector('#image');
        jelloonElement.setAttribute('src', 'res/images/happyjelloon.png');
        jelloonElement.classList.replace('jelloon', 'happyjelloon');

        messageElement.innerText = 'Jelloon says thunks :]';

    }
}