function ExOh(str) {

	str = str.split('');

	var countX = str.filter(function(X) {
		return X === 'x';
	});
	var countO = str.filter(function(O) {
		return O === 'o';
	});
	return countX.length === countO.length;

}
function ExOh(str) {

    var strX = str.replace(/[^x]/g, "");

    var strO = str.replace(/[^o]/g, "");

    return strX.length === strO.length;
}

console.log(ExOh("xooxxo")); // true
console.log(ExOh("xooxxxxxxxxxxxxxxxxxxo")); // false