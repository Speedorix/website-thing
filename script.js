const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');

function exclimationMark(){
heading.textContent += '!!!';
paragraph.textContent += '!!!';
}
/*const button = document.getElementById('clickMe');
button.addEventListener('click', exclimationMark);*/

function heylo(){
alert('heylo');
}
heylo();

function printWelcome(){
	
  let name = prompt('Enter your name');
  let welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'Welcome, ' + name + '!';
  document.body.appendChild(welcomeMessage);
  
}

const button = document.getElementById('helloButton');
button.addEventListener('click', printWelcome);
