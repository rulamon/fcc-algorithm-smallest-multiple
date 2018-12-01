//function to create array of sequential numbers between and including parameters
const seqNum = (arr) => {
	//store lowest and highest parameters in variable and create a new, empty array to push sequential between parameters numbers into
	arr.sort((a, b) => a + b);
	let seqArr = [];
	//push all sequential numbers between and including the parameters into new array
	for (let num = arr[1]; num <= arr[0]; num++) {
		seqArr.unshift(num);
	}
	return seqArr;
}

function smallestCommons(arr) {
	//call seqArr to get array of sequential numbers
	let seqArr = seqNum(arr);
	//create start = product of last two numbers in array
	let start = seqArr[0] * seqArr[1];
	let result = start;
	//add start to result until modulus with all numbers in array equals 0
	while (seqArr.some(el => result % el != 0)) {
		result += start;
	}
	return result;
}

console.log(smallestCommons([5, 10]))