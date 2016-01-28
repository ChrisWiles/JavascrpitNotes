function formatMoney(number) {

	var dollars = number.toFixed(2).toString().split('');

	if (dollars.length > 4) {
		for (var i = dollars.length - 6; i > 0; i -= 3) {
			dollars.splice(i, 0, ',');
		}
	}
	dollars.splice(0, 0, '$');
	return dollars.join('');
}
console.log(formatMoney(1234123));
