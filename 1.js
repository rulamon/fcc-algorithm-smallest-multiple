//function to create array of sequential numbers between and including parameters
const seqNum = (arr) => {
	//store lowest and highest parameters in variable and create a new, empty array to push sequential between parameters numbers into
	let lowest = Math.min(...arr)
	let highest = Math.max(...arr)
	let seqArr = []
	//push all sequential numbers between and including the parameters into new array
	for (let num = lowest; num <= highest; num++) {
		seqArr.push(num)
	}
	return seqArr;
}

function smallestCommons(arr) {
	//call seqArr to get array of sequential numbers
	let seqArr = seqNum(arr);
	//create basis = product of last two numbers in array
	let basis = seqArr[seqArr.length - 1] * seqArr[seqArr.length - 2];
	let result = basis;
	//add basis to result until modulus with all numbers in array equals 0
	while (seqArr.some(el => result % el != 0)) {
		result += basis;
	}
	return result
}

console.log(smallestCommons([5, 10]))