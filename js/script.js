window.onload = function() {
	working();
};
 
function working() {
	console.log('working');
}

let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
button1.addEventListener('click', createRandomNumber);
button2.addEventListener('click', evenOrOddNumber);
button3.addEventListener('click', loop);
button4.addEventListener('click', whileLoop);
button5.addEventListener('click', simpleLoop);
button6.addEventListener('click', forLoop);
button7.addEventListener('click', chessBoard);
let randomInteger;
function createRandomNumber() {
	let random = Math.floor(Math.random()* 101); // this returns a random number between 0 to 100.
	number = document.getElementById('random');
	randomInteger = random;
	number.innerHTML = randomInteger;
}

function evenOrOddNumber() {
	let answer = document.getElementById('answer');
	
	if (randomInteger % 2 === 0) {
		answer.innerHTML = "it is an even number!"
	} else if (randomInteger % 2 === 1) {
		answer.innerHTML = "it is an odd number!"
	}
}

function loop() {
	let note = document.getElementById('note');
	note.innerHTML = "Take a look inside the console now!";
	let i;
	for (i = 0; i < 100; i ++) {
		let squared = i * i;
		console.log(squared);
	}
}

// function does create number 0 or 1
function createRandom() {
	let randomNumber = Math.floor(Math.random()*2); // create random number between 0 and 1?
	return randomNumber;
}

function whileLoop() {
	textBox.innerHTML = " ";

	let j = 1;

	while (createRandom() === 0){
		let textBox = document.getElementById('textBox');
		let p = document.createElement("p");
		let text = document.createTextNode("You got heads " + j + " times")
		p.appendChild(text);
		textBox.appendChild(p);
		j++;
    }

		let tailP = document.createElement("p");
        // let tails = document.getElementById('tails');
        let tailtext = document.createTextNode("You got tails!")
		tailP.appendChild(tailtext);
        textBox.appendChild(tailP);
}

// convert this into a for(...) loop
function simpleLoop() {
	let number = 1;
	while (number < 10) {
		console.log('#' .repeat(number));
		number++;
	}
}

function forLoop() {
	let look = document.getElementById('look');
	let triangle = document.createTextNode("What an awesome equilateral triangle inside console!");
	look.appendChild(triangle);
	for( i = 0; i < 20; i ++) {
		if (i%2 == 1) {
            console.log(" " .repeat((20-i)/2) + '#'.repeat(i));
		}
	}
}

function chessBoard() {

	for ( i= 0; i < 8; i++) {
		if (i % 2 ==0) {
            console.log('#  '.repeat(8));
		} else {
            console.log('  #'.repeat(8));
            // }
            // if (i < 5) {
            // 	console.log(("#".repeat(5) + " ".repeat(5)).repeat(3));
            // }
            // else if( i > 5 && i <= 10 ) {
            //     console.log((" ".repeat(5) + "#".repeat(5)).repeat(3));
            // }
            // else if(i > 10 && i <= 15) {
            //     console.log(("#".repeat(5) + " ".repeat(5)).repeat(3));
            // }
            // else if(i > 15 && i <= 20) {
            //     console.log((" ".repeat(5) + "#".repeat(5)).repeat(3));
            // }
            // else if(i > 20 && i <= 25) {
            //     console.log(("#".repeat(5) + " ".repeat(5)).repeat(3));
            // }
        }
	}
}
// TRYING INSIDE HTML  and IT DID NOT WORK
// function chessBoard() {
//     for ( i= 0; i < 5; i++) {
//         if (i % 2 == 0) {
//         	let chessBoard = document.getElementById('chessBoard');
//         	let paragraph = document.createElement('p');
//         	// paragraph.innerHTML ='("#".repeat(3) + " ".repeat(3)).repeat(3)';
//             chess1 = document.createTextNode(('#' + "...").repeat(5));
// 			paragraph.appendChild(chess1);
// 			chessBoard.appendChild(paragraph);
// 		} else {
//             let chessBoard = document.getElementById('chessBoard');
//             let paragraph = document.createElement('p');
//             // paragraph.innerHTML ='("#".repeat(3) + " ".repeat(3)).repeat(3)';
//             chess1 = document.createTextNode(('...' + "#").repeat(5));
//             paragraph.appendChild(chess1);
//             chessBoard.appendChild(paragraph);
// 		}
// 	}
// }