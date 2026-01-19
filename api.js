document.addEventListener('DOMContentLoaded', function() {
    const bpivContainer = document.querySelector('.bpiv');

    if (bpivContainer) {
        const newElement = document.createElement('p');

        newElement.innerHTML = '<strong><h1>BPiv Captcha</h1></strong>|<div>CAPTCHA<div|';

        bpivContainer.appendChild(newElement);

    } else {
        console.error("Элемент с классом 'bpiv' не найден.");
    }
});
