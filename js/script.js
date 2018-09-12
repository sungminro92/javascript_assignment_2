window.onload = function() {
	working();
}
 
function working() {
	console.log('working');	
}

button1 = document.getElementById('randomNumber');
button2 = document.getElementById('oddOrEven');

button1.addEventListener('click', createRandomNumber);
button2.addEventListener('click', evenOrOddNumber);

let random;

function createRandomNumber() {
	random = Math.floor(Math.random()* 101); // rthis returns a random number between 0 to 100.
	number = document.getElementById('random');
	number.innerHTML = random;
}

function evenOrOddNumber() {
	answer = document.getElementById('answer');
	
	if (random % 2 == 0) {
		answer.innerHTML = "it is an even number!"
	} else if (random % 2 == 1) {
		answer.innerHTML = "it is an odd number!"
	}
}
