//Draw a triangle of hash symbols Version 2

let hash = "#";
for (let n = 1; n <= 7; n++) {
	console.log(hash.repeat(n));
}

//Draw a triangle of has symbols Version 2

for (let hash = "#"; hash.length <= 7; hash += "#") {
	console.log(hash);
}

//FizzBuzz

for (let n = 1; n <= 100; n++) {
	if (n % 5 == 0 && n % 3 == 0) {
		console.log("FizzBuzz");
	}
	else if (n % 3 == 0) {
		console.log("Fizz");
	}
	else if (n % 5 == 0) {
		console.log("Buzz");
	}
	else console.log(n);
}

//FizzBuzz SMART WAY

for (let n = 1; n <= 100; n++) {
	let result = "";
	if (n % 3 == 0) result += "Fizz";
	if (n % 5 == 0) result += "Buzz";
	console.log(result || n);
}

// Chessboard

let chessBoard = "";
let size = 8;

for (let x = 1; x <= size; x++) {

	for (y = 1; y <= size; y++) {

		if ((x + y) % 2 == 0) {
			chessBoard += " ";
		}

		else {
			chessBoard += "#";
		}
	}

	chessBoard += "\n";
}

console.log(chessBoard);