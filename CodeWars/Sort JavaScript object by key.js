// javaScript objects are not ordered. It is meaningless to try to "sort" them. 
// If you want to iterate over an object's properties, you can sort the keys
// and then retrieve the associated values:

var myObj = {
        'b': 'asdsadfd',
        'c': 'masdasaf',
        'a': 'dsfdsfsdf'
    },
    keys = [],
    k, i, len;

for (k in myObj) {
    if (myObj.hasOwnProperty(k)) {
        keys.push(k);
    }
}

keys.sort();

len = keys.length;

for (i = 0; i < len; i++) {
    k = keys[i];
    console.log(k + ':' + myObj[k]);
}