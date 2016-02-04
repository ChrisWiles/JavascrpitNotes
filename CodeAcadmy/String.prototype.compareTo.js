// Define a prototypal compareTo() function for strings. The function should accept another
// string as the first parameter which will be compared to the main string. The second
// parameter, which by default is false, should indicate whether or not the comparison is
// case-sensitive. If the main string is less than the one passed in, a negative number is
// returned. If the main string is greater than the one passed in, a positive number is
// returned. In all other cases, 0 is returned.
// comparing ASCII values of each of the characters

String.prototype.compareTo = function(str, caseSensitive) {

	var s = this.toString();

	if(!caseSensitive) {
	    s = s.toUpperCase();
	    str = str.toUpperCase();
	}

	if(s < str) {
	    return -1;
	} else if (s > str) {
	    return 1;
	} else {
	    return 0;
	}
};
"String".compareTo("string", false);    //0
"Strings".compareTo("string", false);   //1
"Strings".compareTo("stringys", false); //-1
"Cool".compareTo("cool", false); // 0
