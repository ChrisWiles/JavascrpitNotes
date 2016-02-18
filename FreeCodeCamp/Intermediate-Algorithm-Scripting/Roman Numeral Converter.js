// Roman Numeral Converter
// Convert the given number into a roman numeral
function convert(num) {
	var roman = '';
	if (num < 1) {
		return '';
	}
	if (num >= 1000) {
		return 'M' + convert(num - 1000);
	}
	if (num >= 900) {
		return 'CM' + convert(num - 900);
	}
	if (num >= 500) {
		return 'D' + convert(num - 500);
	}
	if (num >= 400) {
		return 'CD' + convert(num - 400);
	}
	if (num >= 100) {
		return 'C' + convert(num - 100);
	}
	if (num >= 90) {
		return 'XC' + convert(num - 90);
	}
	if (num >= 50) {
		return 'L' + convert(num - 50);
	}
	if (num >= 40) {
		return 'XL' + convert(num - 40);
	}
	if (num >= 10) {
		return 'X' + convert(num - 10);
	}
	if (num >= 9) {
		return 'IX' + convert(num - 9);
	}
	if (num >= 5) {
		return 'V' + convert(num - 5);
	}
	if (num >= 4) {
		return 'IV' + convert(num - 4);
	}
	if (num >= 1) {
		return 'I' + convert(num - 1);
	}
	return '';
}

var convert = function(num) {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // Create a copy of num to work on and an empty string variable for the final roman number
  var numCopy = num;
  var romanized = '';

  // While the decimal number is greater than 0,
  while (numCopy > 0) {
    // Loop through the indices of the decimalValue array.
    for (var index = 0; index < decimalValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number.
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        // Add the Roman numeral & decrease numCopy by the decimal equivalent.
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }

  return romanized;
};
