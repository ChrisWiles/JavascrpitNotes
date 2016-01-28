var maxSpeed = {
	car: 300,
	bike: 60,
	motorbike: 200,
	airplane: 1000,
	helicopter: 400,
	rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
	sortable.push([vehicle, maxSpeed[vehicle]]);
}
sortable.sort(function(a, b) {
	return a[1] - b[1];
});

//[["bike", 60], ["motorbike", 200], ["car", 300],
//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

var list = {
	"you": 100,
	"me": 75,
	"foo": 116,
	"bar": 15
};
keysSorted = Object.keys(list).sort(function(a, b) {
	return list[a] - list[b];
});
console.log(keysSorted); // bar,me,you,foo