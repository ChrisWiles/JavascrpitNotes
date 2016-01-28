// Bonfire: Falsey Bouncer
// Falsey values in javascript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
	return arr.filter(function(element) {
		return element !== '' && element !== false && element !== 0 && element !== null && element !== NaN && element !== undefined;
	});
}

console.log(bouncer([7, 'ate', '', false, 9])); // [ 7, 'ate', 9 ]