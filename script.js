function changeText() {
    const message = document.getElementById('message');
    message.textContent = "You've changed the text!";
  }
  
  function changeColor() {
    const message = document.getElementById('message');
    message.style.color = 'crimson';
    message.style.fontSize = '28px';
    message.style.fontWeight = 'bold';
  }
  
  function toggleElement() {
    const element = document.getElementById('extraElement');
    element.classList.toggle('hidden');
  }
  