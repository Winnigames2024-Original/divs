document.addEventListener('DOMContentLoaded', function() {
    const bpivContainer = document.querySelector('.winniCaptcha');

    if (bpivContainer) {
        const newElement = document.createElement('p');

        newElement.innerHTML = '<script scr="https://winnigames2024-original.github.io/divs/captcha.js"></script> <div class="wcaptcha"></div>;
        

        bpivContainer.appendChild(newElement);

    } else {
        console.error("Элемент с классом 'bpiv' не найден.");
    }
});
