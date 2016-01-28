// returning the string true or false. The str parameter 
// will be composed of + and = symbols with several letters between them 
// (ie. ++d+===+c++==a) and for the string to be true each letter must be 
// surrounded by a + symbol. So the string to the left would be false. The 
// string will not be empty and will have at least one letter. 
function SimpleSymbols(str) {

	var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var s = str.toLowerCase().split('');
	var numOfLetters = 0;
	var numOfMatchs = 0;

	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < alpha.length; j++) {
			if (alpha[j] === s[i]) { // find a letter
				numOfLetters++;
				if (s[i - 1] === '+' && s[i + 1] === '+') {
					numOfMatchs++;
				}
			}
		}
	}
	if (numOfLetters === numOfMatchs) {
		return true;
	}
	return false;
}
function SimpleSymbols(str) {

	var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var s = str.toLowerCase().split('');
	var numOfLetters = 0;
	var numOfMatchs = 0;

	s.forEach(function(letter, i, str) {
		alpha.forEach(function(char) {
			if (letter === char) { // find a letter
				numOfLetters++;
				if (str[i - 1] === '+' && str[i + 1] === '+') {
					numOfMatchs++;
				}
			}
		});
	});
	if (numOfLetters === numOfMatchs) {
		return true;
	}
	return false;
}
// Best Practices
function SimpleSymbols(str) {
    
    for (var i = 0, x = str.length; i < x; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }

    return true;
}
console.log(SimpleSymbols('++d+===+c++==+a+'));