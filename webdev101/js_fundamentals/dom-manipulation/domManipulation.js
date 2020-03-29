// a <p> with red text that says “Hey I’m red!”
const container = document.querySelector("#container");

const red = document.createElement('p');
red.textContent = "Hey I\'m red";
red.style.color = 'red';

// an <h3> with blue text that says “I’m a blue h3!”
const blue = document.createElement('h3');
blue.textContent = "I\'m a blue h3!";
blue.style.color = 'blue'

container.appendChild(red);
container.appendChild(blue);