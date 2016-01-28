// Bonfire: Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
// Divide the number by 1000 and multiply the result by 1000, substract 
// Speical handling for 900
// Divide number by 500, ditto
// Special handling for 400
// Divide number by 100, ditto
// Special handling for 90
// Divide number by 50, ditto
// Special handling for 40
// Divide number by 10, ditto
// Special handling for 9
// Divide number by 5, ditto
// Special handling for 4
// Divide number by 1, ditto
// Using switch each time, build the string using concat
// 



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

// Print 1-1000
for(var i = 0; i < 1001; i++) {
	console.log(i + ' ' + convert(i));
}
