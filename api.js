// 1. Находим элемент
const bpivDiv = document.querySelector('.bpiv');

// 2. Проверяем, существует ли элемент
if (bpivDiv) {
  // 3. Вставляем HTML-код
  bpivDiv.innerHTML = '<h1>BPiv Captcha</h1><p>|>div>CAPTCHA<div|</p>';
} else {
  console.log("Элемент с классом .bpiv не найден.");
}
