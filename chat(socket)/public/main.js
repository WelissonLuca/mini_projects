const socket = io();
let username = '';
let userList = [];

let loginPage = document.querySelector('#loginPage');
let chatPage = document.querySelector('#chat');

let loginInput = document.querySelector('#loginNameInput');
let textInput = document.querySelector('#chatTextInput');
console.log(loginInput,loginPage,chatPage,textInput)
loginPage.style.display = 'flex';
chatPage.style.display = 'none';

loginInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let name = loginInput.value.trim();
    if (name != '') {
      username = name;
      document.title = 'chat ('+username+')'
    }
  }
})