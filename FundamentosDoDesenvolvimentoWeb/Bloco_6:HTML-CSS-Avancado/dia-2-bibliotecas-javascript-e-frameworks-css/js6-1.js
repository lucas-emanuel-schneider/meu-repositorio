function stopButton() {
  const button = document.querySelector('#sendButton');
  button.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
stopButton();
