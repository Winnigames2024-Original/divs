const bpivDiv = document.querySelector('.bpiv');

if (bpivDiv) {
  bpivDiv.innerHTML = '<h1>BPiv Captcha</h1><p>|>div>CAPTCHA<div|</p>';
} else {
  console.log("Элемент с классом .bpiv не найден.");
}
