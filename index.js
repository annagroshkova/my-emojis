let myEmojis = [];
const emojiContainer = document.querySelector('.emojiContainer');
const addButton = document.querySelector('.push-btn');
const popButton = document.querySelector('.pop-btn');
const unshiftButton = document.querySelector('.unshift-btn');
const shiftButton = document.querySelector('.shift-btn');
const emojisInput = document.querySelector('.emoji-input');
const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"));


function renderEmojis() {
  emojiContainer.innerHTML = '';
  const emojis = document.createElement('span');
  myEmojis.forEach((item) => {
    emojis.textContent += item;
    emojiContainer.append(emojis)
  })
}

if(emojisFromLocalStorage) {
  myEmojis = emojisFromLocalStorage;
  renderEmojis()
}

addButton.addEventListener('click', () => {
  if(emojisInput.value) {
  myEmojis.push(emojisInput.value);
  emojisInput.value = '';
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
  renderEmojis()
  }
})

unshiftButton.addEventListener('click', () => {
  if(emojisInput.value) {
    myEmojis.unshift(emojisInput.value);
    emojisInput.value = '';
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis()
  }
})

shiftButton.addEventListener('click', () => {
    myEmojis.shift();
    localStorage.clear();
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis()
})

popButton.addEventListener('click', () => {
    myEmojis.pop();
    localStorage.clear();
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis()
})

