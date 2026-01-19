document.addEventListener('DOMContentLoaded', function() {
    const bpivContainer = document.querySelector('.winniCaptcha');

    if (bpivContainer) {
        const newElement = document.createElement('p');

        newElement.innerHTML = '<div class="wcaptcha"></div>';
        

        bpivContainer.appendChild(newElement);

    } else {
        console.error("Элемент с классом 'bpiv' не найден.");
    }
});
