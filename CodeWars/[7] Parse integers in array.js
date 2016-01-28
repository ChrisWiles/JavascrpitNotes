function parseNumbers(intStrs) {
	return intStrs.map(function(n) {
		return parseInt(n);
	});
}

// parseInt vs +  
// +x is more like parseFloat
function parseNumbers(arr) {
  return arr.map(function(n) {
  	return +(+(n).toFixed(0));
  });
}

