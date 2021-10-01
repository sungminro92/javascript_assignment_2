window.onload = function() {
    log('working');
};
 
function log(text) {
	console.log(text);
}

const numberOfButtons = 7;
let i = 1;
const functions = [createRandomNumber, evenOrOddNumber, loop, whileLoop, simpleLoop, forLoop, chessBoard];
while (i <= numberOfButtons) {
    const button = document.getElementById(`${i}`);
    button.addEventListener('click', functions[i-1]);
    i++;
}

function createRandomNumber() {
	// let random = Math.floor(Math.random()* 101); // this returns a random number between 0 to 100.
	const randomNumber = createRandom(101);
	const randomElement = document.getElementById('random');
    randomElement.innerHTML = '' + randomNumber;
}

function evenOrOddNumber() {
	let answer = document.getElementById('answer');
    const randomInteger = document.getElementById('random').innerHTML;
    if (randomInteger === '') {
    	return;
	}
	if (randomInteger % 2 === 0) {
		answer.innerHTML = 'it is an even number!';
	} else if (randomInteger % 2 === 1) {
		answer.innerHTML = 'it is an odd number!';
	}
}

function loop() {
	let note = document.getElementById('note');
	note.innerHTML = 'Take a look inside the console now!';
	for (let i = 0; i < 100; i ++) {
		let squared = i * i;
		log(squared);
	}
}

function createRandom(number) {
	return Math.floor(Math.random() * number);
}

function whileLoop() {
	let textBox = document.getElementById('textBox');
	textBox.innerHTML = '';
	let j = 1;
	while (createRandom(2) === 0){
		let p = document.createElement('p');
		let text = document.createTextNode('You got heads ' + j + ' times');
		p.appendChild(text);
		textBox.appendChild(p);
		j++;
    }
	let tailTextP = document.createElement('p');
	// let tails = document.getElementById('tails');
	let tailText = document.createTextNode('You got tails!');
    tailTextP.appendChild(tailText);
	textBox.appendChild(tailTextP);
}

// convert this into a for(...) loop
function simpleLoop() {
	let number = 1;
	while (number < 10) {
		log('#'.repeat(number));
		number++;
	}
}

function forLoop() {
//     document
	let rn = createRandom(30);
    document.getElementById('look').innerHTML = '';
	let look = document.getElementById('look');
	let triangle = document.createTextNode('What an awesome equilateral triangle inside console!');
	look.appendChild(triangle);
	for(let i = 0; i < rn; i ++) {
		if (i % 2 === 1) {
            log(' '.repeat((rn-i)/2) + '#'.repeat(i));
		}
	}
}

function chessBoard() {

	for (let i= 0; i < 8; i++) {
		if (i % 2 === 0) {
            log('#  '.repeat(8));
		} else {
            log('  #'.repeat(8));
            // }
            // if (i < 5) {
            // 	console.log(('#'.repeat(5) + ' '.repeat(5)).repeat(3));
            // }
            // else if( i > 5 && i <= 10 ) {
            //     console.log((' '.repeat(5) + '#'.repeat(5)).repeat(3));
            // }
            // else if(i > 10 && i <= 15) {
            //     console.log(('#'.repeat(5) + ' '.repeat(5)).repeat(3));
            // }
            // else if(i > 15 && i <= 20) {
            //     console.log((' '.repeat(5) + '#'.repeat(5)).repeat(3));
            // }
            // else if(i > 20 && i <= 25) {
            //     console.log(('#'.repeat(5) + ' '.repeat(5)).repeat(3));
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
//         	// paragraph.innerHTML ='('#'.repeat(3) + ' '.repeat(3)).repeat(3)';
//             chess1 = document.createTextNode(('#' + '...').repeat(5));
// 			paragraph.appendChild(chess1);
// 			chessBoard.appendChild(paragraph);
// 		} else {
//             let chessBoard = document.getElementById('chessBoard');
//             let paragraph = document.createElement('p');
//             // paragraph.innerHTML ='('#'.repeat(3) + ' '.repeat(3)).repeat(3)';
//             chess1 = document.createTextNode(('...' + '#').repeat(5));
//             paragraph.appendChild(chess1);
//             chessBoard.appendChild(paragraph);
// 		}
// 	}
// }
