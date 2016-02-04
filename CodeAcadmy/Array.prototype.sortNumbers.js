// Sorting Arrays of Numbers
Array.prototype.sortNumbers = function() {
    return this.sort(function(a,b) {
       return a - b;
    });
};

function randomArray() {
    var temp = [];
    for(var i = 0; i < 25; i++) {
        temp.push(Math.floor(Math.random() * 1000));
    }
    return temp;
}
var ran = randomArray();

console.log( ran.join(' '), ran.sortNumbers().join(' '));
