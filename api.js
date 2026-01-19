document.addEventListener('DOMContentLoaded', function() {
    //Divs Initalizer
    const bpivContainer = document.querySelector('.winniCaptcha');

    if (bpivContainer) {
        const newElement = document.createElement('p');

        newElement.innerHTML = '<div class="wcaptcha"></div>';
        

        bpivContainer.appendChild(newElement);

    } else {
        console.error("Элемент с классом 'winniCaptcha' не найден.");
    }
    
    // End Divs Initalizer
    // WinniCaptcha Div
    
    const wcaptchaDiv = document.querySelector('.wcaptcha');
    
    if (wcaptchaDiv) {
        const newElement2d = document.createElement('code');

        newElement2d.innerHTML = '<h1>!!!WinniCaptcha Is not Working in Your Region!!!</h1>';
        

        bpivContainer.appendChild(newElement);

    } else {
        console.error("Элемент с классом 'winniCaptcha' не найден.");
    }
    
    // End WinniCaptcha Div
});
