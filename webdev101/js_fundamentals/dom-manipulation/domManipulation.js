// a <p> with red text that says “Hey I’m red!”
const container = document.querySelector("#container");

const red = document.createElement('p');
red.textContent = "Hey I\'m red";
red.style.color = 'red';

// an <h3> with blue text that says “I’m a blue h3!”
const blue = document.createElement('h3');
blue.textContent = "I\'m a blue h3!";
blue.style.color = 'blue'

// a <div> with a black border and pink 
// background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
const blackAndPink = document.createElement('div');
const divInADiv = document.createElement('h1');
const pInADiv = document.createElement('p');

blackAndPink.style.borderColor = 'black';
blackAndPink.style.backgroundColor = 'pink';
divInADiv.textContent = "I\'m in a div";
pInADiv.textContent = "ME TOO!";

blackAndPink.appendChild(divInADiv);
blackAndPink.appendChild(pInADiv);

container.appendChild(red);
container.appendChild(blue);
container.appendChild(blackAndPink);

// Select regular button
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello world");

// Select separate js 
const btn_ev = document.querySelector('#btn_ev');
btn_ev.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
})

// Named function
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
  
// METHOD 2
namedBtn.onclick = alertFunction;
  
// METHOD 3
NamedBtn_ev.addEventListener('click', alertFunction);