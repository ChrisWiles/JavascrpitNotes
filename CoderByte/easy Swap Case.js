function SwapCase(str) {
	str = str.split('');
	var swapCase = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			swapCase.push(str[i].toUpperCase());
		} else if (str[i] === str[i].toUpperCase()) {
			swapCase.push(str[i].toLowerCase());
		} else {
			swapCase.push(str[i]);
		}
	}
	
	return swapCase.join('');
}
console.log(SwapCase("Hello-LOL")); // "hELLO-lol"