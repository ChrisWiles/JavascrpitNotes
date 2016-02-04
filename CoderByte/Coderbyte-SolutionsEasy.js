// Easy - 01 - First Reverse.js
// Take the str parameter being passed and return the string in reversed order.

// Using chaining
function FirstReverse(str) {
    return str.split("").reverse().join("");
    // // Note that .reverse only works on arrays (which is why we had to use .split).
}

//
function FirstReverse(str) {
    var string = '';
    for (var i = str.length - 1; i >= 0; i--) {
        string += str.charAt(i);
    }
    return string;
}

function reverse(str) {
    var s = '';
    for (var i = 0, len = str.length - 1; i <= len; i++) {
        s += str[len - i];
    }
    return s;
}
console.log(reverse('Chris'));

// Check if any letter in an input word is repeated
function repeatedChar(string) {
    var memo = {};
    var repeated = false;

    string.forEach(function(letter) {
        if (memo[letter]) {
            repeated = true;
        }
        memo[letter] = true;
    });
    return repeated;
}
console.log(repeatedChar('repeated'));



// Easy - 02 - First Factorial.js
// For this challenge you will be determining the factorial for a given number.
function FirstFactorial(num) {

    // First we declare a for loop starting at the parameter number - 1 (var i = num - 1)
    // We decrease i by 1 each iteration (i--) and stop when i reaches 2 (i > 1)
    for (var i = num - 1; i > 1; i--) {

        // On each pass, we multiply the num by i
        num *= i;

    }
    // The above loop will have the effect of multiplying num by all whole integers between 2 and num-1 inclusive.
    // For instance, if we pass 4 into our function, the loop will run twice, multiplying 4*3 (12) and then 12*2 (24).

    // Finally, we return our answer.
    return num;
}

// Best Practices
function FirstFactorial(num) {

    for (var i = num - 1; i > 1; i--) {
        num *= i;
    }

    return num;
}

// Easy - 03 - Longest Word.js
// For this challenge you will be determining the largest word in a string.
function LongestWord(sen) {

    // First, we declare a variable to hold the longest word (var longestWord = "") and initialize it with an empty string...
    var longestWord = "";
    // ...and another variable to hold the length of the longest word, initializing it to 0.
    var longestLength = 0;

    // Next, we "prep" the input sentence by removing all non-alphanumeric characters
    sen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
    // Note that /[^a-zA-Z0-9\s]/g is a regex expression that matches all characters that are not lowercase letter (a-z), an uppercase letter (A-Z), a number (0-9), and a space (\s)
    // The ^ character negates the set that follows it (think of it like ! in Javascript)
    // http://www.regexr.com/ is a good place to play around with regex expressions and see what each character does

    // Next, we use the split method to turn our input string into an array of its individual words
    // Note that we pass a single space into the method (" ") to split the string at each space
    sen = sen.split(" ");

    // Next, we declare a for loop that iterates through each item in our new array
    // Our if statement checks if the length of the current item is longer than our "longestLength" variable we declared earlier and sets the longestWord variable to the actual word.
    for (var i = 0; i < sen.length; i++) {
        if (sen[i].length > longestLength) {
            longestLength = sen[i].length;
            longestWord = sen[i];
        }
    }
    // Note that since we initialized the longestLength variable to 0, the first word in our array will always become the longest word
    // As per coderbyte's prompt, all ties go to the earliest occuring word, which is why we use > in our if statement and not >=
    // Note that I used "i < sen.length" for the sake of clarity, though best practices would dictate that we declare the length variable at the same time as i to make this loop more efficient.
    // As you can see below, the preferred way to do this would be "for (var i = 0, x = sen.length; i < x; i++)"

    // Finally, we return the variable where we stored the answer
    return longestWord;
}

function LongestWord(string) {
    var word = string.replace(/[^a-zA-Z0-9\s]/g, "").split(' ');
    var longest = '';
    for (var i = 0; i < word.length; i++) {
        if (word[i].length > longest.length) {
            longest = word[i];
        }
    }
    return longest;
}

// Easy - 04 - Letter Changes.js
// For this challenge you will be manipulating characters in a string based off their positions in the alphabet.
function LetterChanges(str) {

    // First we do a little meta-problem solving by setting up our alpha and newAlpha strings:
    // Each character in alpha has the same index as the character coderbyte wants us to convert it to in newAlpha
    // For instance, since we want all d's in our input string to be converted to e's, and then we want all vowels to be capitalized,
    // we can "cheat" a by making alpha[3] equal to "d" and newAlpha[3] equal to "E".
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";

    // Next, we declare a variable to hold our answer
    var answer = "";

    // After that, we loop through each character in our input string
    for (i = 0; i < str.length; i++) {

        // First, we use the indexOf method to check if the current character in our string is contained in alpha.
        // Note that if the string you pass into indexOf isn't found, it will return -1. Otherwise, it will return the index of the first matching character found.
        // For instance, alpha.indexOf("c") returns 2, while alpha.indexOf("C") returns -1.
        if (alpha.indexOf(str[i]) !== -1) {

            // If we find the character in the alpha string, we declare a variable to hold the index of the character.
            // Note that this is an unnessary step that I do for the purposes of clarity. See the 2nd function for a faster implementation.
            var index = alpha.indexOf(str[i]);

            // Since we set up the characters in alpha to have the same index as the one we want to convert it to in newAlpha,
            // all we have to do is use the charAt method to add the converted character to our answer variable.
            answer += newAlpha.charAt(index);

            // If str[i] doesn't appear in alpha...
        } else {

            // ...we add it to our answer string, leaving any characters we don't want to change untouched and in the same index in our answer variable as they were in our input string.
            answer += str[i];
        }
    }
    // Finally, we return the variable where we stored our answer.
    return answer;

}

// Best Practices
function LetterChanges(str) {

    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
    var answer = "";

    for (i = 0, x = str.length; i < x; i++) {
        if (alpha.indexOf(str[i]) !== -1) {
            answer += newAlpha.charAt(alpha.indexOf(str[i]));
        } else {
            answer += str[i];
        }
    }

    return answer;
}

// Easy - 05 - Simple Adding.js
// For this challenge you will be adding up all the numbers from 1 to a certain argument.
// Step By Step Iterative Solution
function SimpleAdding(num) {
    // Declare a variable to hold our answer
    var sum = 0;

    // Loop through all numbers between num and 1 inclusive...
    for (var i = num; i > 0; i--) {
        // ...adding i to our answer each time.
        sum += i;
    }

    // Return our answer.
    return sum;
}

// Step By Step Recursive Solution
function SimpleAdding(num, sum) {
    // If no argument is passed for sum (Coderbyte will always only pass 1 argument into our function), we set it to 0
    sum = sum | 0;

    // Next, we set our base case to stop the function from recursing when our input number equals 0...
    if (num === 0) {
        // ...and return our answer
        return sum;
    }

    // Each time we recurse through our function, we add the number to our sum variable (sum += num)...
    sum += num;
    // ...and decrease num by 1 using the decrement operator
    num--;

    // We return the function again and continue to add num to curSum and decrement num by 1 until num reaches 0.
    return SimpleAdding(num, sum);
}

// Easy - 06 - Letter Capitalize.js
// For this challenge you will be capitalizing certain characters in a string.
// Step By Step
function LetterCapitalize(str) {
    // First, we use the split method to divide the input string into an array of individual words
    // Note that we pass a string consisting of a single space into the method to "split" the string at each space
    str = str.split(" ");

    // Next, we loop through each item in our new array...
    for (i = 0; i < str.length; i++) {
        // ...and set each word in the array to be equal to the first letter of the word (str[i][0]) capitalized using the toUpperCase method.
        // along with a substring of the remainder of the word (passing only 1 arg into the substr method means that you start at that index and go until the end of the string)
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    // Finally, we join our array back together...
    str = str.join(" ");

    // ...and return our answer.
    return str;
}
// mine
function LetterCapitalize(str) {

    var words = str.split(' ');

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // words[i][0]
    }

    return words.join(' ');

}
//console.log(LetterCapitalize('okay lets see if i can make these caps'));
var s = 'word';
console.log(s.slice(1));


// Best Practices
function LetterCapitalize(str) {

    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}


// Easy - 07 - Simple Symbols.js
// For this challenge you will be determining whether or not certain characters are in correct positions.
// Step By Step
function SimpleSymbols(str) {

    // First, we declare a variable to hold a regex expression to match all upper and lowercase letters
    var alphaTest = /[a-zA-Z]/;

    // Next, we loop through each character in the string...
    for (var i = 0; i < str.length; i++) {
        // ... and use the our previously declared regex expression and the .test method to see if the character is a letter
        if (alphaTest.test(str[i])) {
            // If our test returns true, we check if either of the adjacent characters are not +'s
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                // If one of them isn't, we return false.
                return false;
            }
        }
    }

    // If our program is able to check all of the characters and hasn't returned false, we know the string obeys all of the problem's rules and can return true.
    return true;
}

// Best Practices
function SimpleSymbols(str) {

    for (var i = 0, x = str.length; i < x; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }

    return true;
}

// Easy - 08 - Check Nums.js
// Step By Step
function CheckNums(num1, num2) {

    // We check if the first number is less than the second...
    if (num1 < num2) {
        // ...if so, we return true
        return true;
        // If the first number is greater than the second...
    } else if (num1 > num2) {
        // ...we return false
        return false;
        // If neither of the above conditions are true, we know that the numbers are equal...
    } else {
        // ...and so we return the string -1.
        return "-1";
    }

}

//  Best Practices
function CheckNums(num1, num2) {

    if (num1 < num2) {
        return true;
    } else if (num1 > num2) {
        return false;
    } else {
        return "-1";
    }

}

// Easy - 09 - Time Convert.js
// With step by step instructions
function TimeConvert(num) {

    // First, we divide our number by 60 and then use math.floor to "round down" and get the number of hours.
    // Note that Math.floor returns the nearest whole integer less than or equal to the input number.
    var hours = Math.floor(num / 60);

    // Next, we use the modulus operator to figure out the number of minutes (the remainder of num/60).
    // For instance, 125 % 60 would return 5.
    var minutes = num % 60;

    // Finally, we return our answer as a string with ":" inserted between the hours and minutes.
    return hours + ":" + minutes;
}

// Best practices
function TimeConvert(num) {

    return Math.floor(num / 60) + ":" + num % 60;
}
// Easy - 10 - Alphabet Soup.js
// Step By Step
function AlphabetSoup(str) {

    // Use .split to turn the string into an array...
    str = str.split("");

    // .sort to alphabatize the new array...
    str = str.sort();

    // and .join to turn it back into a string.
    str = str.join("");

    // Finally, we return our answer.
    return str;
}

// Best Practices
function AlphabetSoup(str) {

    return str.split("").sort().join("");
}
//Easy - 11 - AB Check.js
// determine if two characters are separated a specific way in the string.

function ABCheck(str) {

    // First, we declare two regex expressions to match if a and b ever occur three characters apart.
    // Note that . is a "wildcard" metacharacterin regex that matches almost any character.
    var testOne = /a...b/;
    var testTwo = /b...a/;

    // Next, we use the test method in conjunction with the regex expressions to see if our string contains any matching characters
    var aThenB = testOne.test(str);
    var bThenA = testTwo.test(str);

    // Finally, we return our answer
    return aThenB || bThenA;
}

// Best Practices
function ABCheck(str) {

    return (/a...b/).test(str) || (/b...a/).test(str);
}

//Easy - 12 - Vowel Count.js
// Step By Step
function VowelCount(str) {

    // First, we Remove all characters in the string that aren't vowels with the .replace method.
    // Note that ^ in Regex means "all characters not in the set", so placing it in front of aeiou means "Match everything that isn't a vowel"
    // Enclosing a set in [] means that our string matches any individual character in that set
    // Ending with our /g tag signifies that we want to do a global search and lets our engine know to going through the entire string.
    str = str.replace(/[^aeiuo]/g, "");

    // Finally, we return the length of the string to "count" how many vowels are left.
    return str.length;
}

// Best Practices
function VowelCount(str) {

    return str.replace(/[^aeiou]/g, "").length;
}

// Easy - 13 - Word Count.jj
function WordCount(str) {

    return str.split(" ").length;
}
// Easy - 14 - Ex Oh.js
// Step By Step
function ExOh(str) {

    // First, we declare two variables:
    // One which remove all characters in the string that aren't x's...
    var strX = str.replace(/[^x]/g, "");

    // ...and and the second which removes all characters that aren't o's
    var strO = str.replace(/[^o]/g, "");

    // Next, we get the length of each of these new variables to determine how many x's and o's are in the string...
    var xNumber = strX.length;
    var oNumber = strO.length;

    // ...and return the truth value of comparing the two.
    return xNumber === oNumber;
}

// Best Practices
function ExOh(str) {

    return str.replace(/[^x]/g, "").length === str.replace(/[^o]/g, "").length;
}

// Easy - 15 - Palindrome.js
// Step By Step
// ♫ I put my string down flip it and reverse it ♫
function Palindrome(str) {

    // First, we prep the string by using the .replace method to take out all spaces.
    // Note that [\s] will match all whitespace in the string.
    str = str.replace(/[\s]/g, "");

    // Next, we declare a new variable to hold the reversed string and use the .split, .reverse, and .join methods to modify it.
    // You should remember this section from the very first problem (check out my solution in this repository if you need a refresher).
    strRev = str.split("").reverse().join("");

    // Finally, we return the truth value of comparing the two strings.
    return str == strRev;
}

// Best Practices
// Note that while this problem doesn't use any inputs with uppercase letters, you can add in .toLowerCase() to account for inputs that do.
function Palindrome(str) {

    return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
}

//Easy - 16 - Arith Geo.js
// Step By Step
function ArithGeo(arr) {

    // First, we declare two empty arrays to hold the differences and quotients of each item in our input array
    var arrDif = [];
    var arrQuo = [];

    // Next, we declare two booleans as "flags" for whether or not our array follows an arithmetic or geometric pattern
    // As we're going to turn these false if the input array doesn't follow an arithmetic or geometric pattern, we initialize them to true.
    var ariFlag = true;
    var geoFlag = true;

    // Next, we loop through each item in our input array and use the .push method to send...
    for (var i = 0; i < arr.length - 1; i++) {
        // ...the difference of each item to our arrDif array.
        arrDif.push(arr[i + 1] - arr[i]);
        // ...the  quotient of each item to our arrQuo array.
        arrQuo.push(arr[i + 1] / arr[i]);
    }
    // Note that since this loop "looks ahead" one item during each pass, we end it 1 iteration earlier than we normally would (i < arr.length - 1 instead of i < arr.length)

    // After that, we use a single loop to check if each item in our newly populated arrDif and arrQuo arrays are equal to each other.
    // Note that we can set the loop length using the length of arrDif because we know both arrDif and arrQuo are the same length.
    for (var j = 0; j < arrDif.length - 1; j++) {
        // This if statement checks to see if each item in our array of differences is equal to the next item in the array, and if not, sets our ariFlag to false.
        if (arrDif[j] != arrDif[j + 1]) {
            ariFlag = false;
        }
        // We do the same thing for our array of quotients.
        if (arrQuo[j] != arrQuo[j + 1]) {
            geoFlag = false;
        }
    }

    // Finally, we return "Arithmetic" if the ariFlag is set to true, "Geometric" if the geoFlag is set to true, and -1 if neither are set to true.
    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}

// Best Practices
function ArithGeo(arr) {

    var arrDif = [];
    var arrQuo = [];
    var ariFlag = true;
    var geoFlag = true;

    for (var i = 0; i < arr.length - 1; i++) {
        arrDif.push(arr[i + 1] - arr[i]);
        arrQuo.push(arr[i + 1] / arr[i]);
    }

    for (var j = 0; j < arrDif.length - 1; j++) {
        if (arrDif[j] != arrDif[j + 1]) {
            ariFlag = false;
        }
        if (arrQuo[j] != arrQuo[j + 1]) {
            geoFlag = false;
        }
    }

    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}
// Easy - 17 - Array Addition.js
// Not my original solution, as this was one of the only Easy problems that exceeded my knowledge of JS at the time I first attempted it
// All credit to Lindsey Smith at Leaena.com
// http://leaena.com/2013/08/solver-of-problems/
function ArrayAdditionI(arr) {

    arr.sort(function(a, b) {
        return a - b;
    });
    var largest = arr.pop();
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === largest) {
            return true;
        }

        for (var j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
                if (sum === largest) {
                    return true;
                }
            }
        }
        for (var k = 0; k < arr.length; k++) {
            if (i !== k) {
                sum -= arr[k];
                if (sum === largest) {
                    return true;
                }
            }
        }
        sum = 0;
    }

    return false;
}

// Easy - 18 - Letter Count I.js
function LetterCountI(str) {

    var words = str.split(" ");
    var largestDif = 0;
    var answer;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var currentWordLength = words[i].length;
        var currentWordSorted = words[i].split("").sort();
        for (var j = 0; j < (words[i].length - 1); j++) {
            if (currentWordSorted[j] === currentWordSorted[j + 1]) {
                currentWordSorted.splice(j, 1);
            }
            var currentDif = (currentWordLength - currentWordSorted.length);
            if (currentDif > largestDif) {
                largestDif = currentDif;
                answer = currentWord;
            }
        }
    }

    if (largestDif > 0) {
        return answer;
    } else {
        return -1;
    }

}
// Easy - 19 - Second GreatLow.js
function SecondGreatLow(arr) {

    // Use the sort function and pass in a callback to sort from smallest to largest

    arr = arr.sort(function(a, b) {
        return a - b;
    });

    // Loop through each item in the array and check if the adjacent array item is the same.
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) {
            // If it is, we use the .splice method to remove it.
            arr.splice(i, 1);
        }
    }

    if (arr.length > 2) {
        // If our array is longer than two items, we return the 2nd and 2nd to last item in the array.
        return arr[1] + " " + arr[arr.length - 2];
    } else if (arr.length == 2) {
        // If our array is exactly two items long, we return the 2nd and the first item
        return arr[1] + " " + arr[0];
    } else {
        // If our array is only one item, we return the only element twice.
        return arr[0] + " " + arr[0];
    }

}
// Easy - 20 - Division Stringified.js
// Step By Step

function DivisionStringified(num1, num2) {

    // First, we use the Math.round method to calculate our product...
    // ...and then use the .toString method to convert the reusltant number into a string.
    var result = Math.round(num1 / num2).toString();

    // Next, we use the .split method to convert our result variable into an array so it can be further manipulated.
    // Note that we pass in an empty string ("") into the .split method to split the result variable at every character.
    var resultArr = result.split("");

    // Next, we check if our result is greater than 1000.
    if (result >= 1000) {

        // If it is, we loop through each item in our result array...
        // ...starting at the third character from the end (i = result.length - 3)...
        // ...moving back three charactres each time (i -= 3)...
        // ...and stopping when we get to the start of the string (i > 0)
        for (var i = result.length - 3; i > 0; i -= 3) {

            // At every third character we use the .splice method to insert a comma.
            // Note that the first arguement of the .splice is where the method inserts things into the array (i),
            // ...the second controls how many array items are removed (0),
            // ...and the third controls what is inserted (",").
            resultArr.splice(i, 0, ",");
        }
    }

    // Finally, we return our result array with the .join method to covert it into a string.
    return resultArr.join("");
}

// Best Practices
function DivisionStringified(num1, num2) {

    var result = Math.round(num1 / num2).toString(),
        resultArr = result.split("");

    if (result >= 1000) {
        for (var i = result.length - 3; i > 0; i -= 3) {
            resultArr.splice(i, 0, ",");
        }
    }

    return resultArr.join("");
}
//////////Format Money
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
//////////////////////////////////

// Easy - 21 - Counting Minutes I.js
function CountingMinutesI(str) {

    var timeArray = str.split("-");
    var startTime = timeArray[0];
    var endTime = timeArray[1];
    var startTimeArr = startTime.split(":");
    var startTimeHour = parseInt(startTimeArr[0]);
    var startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ""));
    var startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, "");
    var endTimeArr = endTime.split(":");
    var endTimeHour = parseInt(endTimeArr[0]);
    var endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ""));
    var endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, "");

    if ((startTimeHour !== 12) && (startTimeAMPM === "pm")) {
        startTimeHour += 12;
    }
    if ((endTimeHour !== 12) && (endTimeAMPM === "pm")) {
        endTimeHour += 12;
    }
    if ((startTimeHour === 12) && (startTimeAMPM === "am")) {
        startTimeHour -= 12;
    }
    if ((endTimeHour === 12) && (endTimeAMPM === "am")) {
        endTimeHour -= 12;
    }

    if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
        return (1440 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
    } else {
        return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
    }
}

// Easy - 22 - Mean Mode.js
// Step By Step
function MeanMode(arr) {

    // First, we declare:
    // an empty array to hold the number of times each item in the input array occurs,
    var modeArr = [];
    // a variable to hold the actual mode,
    var mode = 0;
    // a variable to hold the number of times the mode occurs,
    var modeCount = 0;
    // and a variable to hold the sum of the items in the array (to calculate the mean),
    var sum = 0;

    // Next, we loop through each item in the input array and...
    for (var i = 0; i < arr.length; i++) {

        // ...add each value to our sum variable
        sum += arr[i];

        // ...check if each value is present in our frequency count array
        if (modeArr[arr[i]]) {
            // If it is, we increase its value by 1.
            modeArr[arr[i]]++;
        } else {
            // If it isn't, we set its value to 1.
            modeArr[arr[i]] = 1;
        }

        // ...and check if the count for the item's position in our mode array is greater than our current mode's count.
        if (modeArr[arr[i]] > modeCount) {
            // If it is, we set the mode to the current item in our input array...
            mode = arr[i];
            // ...and set the number of times the mode has occured to the current item's value in our mode array.
            modeCount = modeArr[arr[i]];
        }
    }

    // Next, we calculate the mean by dividing the sum by the total number of items in the array.
    var mean = sum / arr.length;

    // If the mean and the mode are the same, we return 1, otherwise we return 0.
    if (mean == mode) {
        return 1;
    } else {
        return 0;
    }

}

// Best Practices
function MeanMode(arr) {

    var modeArr = [];
    var mode = 0;
    var modeCount = 0;
    var sum = 0;

    for (var i = 0, x = arr.length; i < x; i++) {

        sum += arr[i];

        if (modeArr[arr[i]]) {
            modeArr[arr[i]]++;
        } else {
            modeArr[arr[i]] = 1;
        }
        if (modeArr[arr[i]] > modeCount) {
            mode = arr[i];
            modeCount = modeArr[arr[i]];
        }
    }

    var mean = sum / arr.length;

    if (mean == mode) {
        return 1;
    } else {
        return 0;
    }

}

// Easy - 23 - Dash Insert.js
// Step By Step
function DashInsert(num) {

    // First, we convert the input number into a string
    // This allows us to add the character to our answer rather than summing the two.
    num = num.toString();
    // Next, we declare and initialize a variable to hold our answer string.
    var answer = "";

    // After that, we loop through each character in our input number...
    for (var i = 0; i < num.length; i++) {
        // ...and for every character after the first, we check if the current and previous character are odd.
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            // If both are, we add a dash to our answer.
            answer += "-";
        }
        // No matter whether or not we add a dash, we add the current number to our answer string.
        answer += num[i];
    }

    // Finally, we return our answer.
    return answer;
}

// Best Practices
function DashInsert(num) {

    num = num.toString();
    var answer = "";

    for (var i = 0, x = num.length; i < x; i++) {
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            answer += "-";
        }

        answer += num[i];
    }

    return answer;
}

// Easy - 24 - Swap Case.js
function SwapCase(str) {

    var answer = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i];
        }
    }

    return answer;
}

// Easy - 25 - Number Addition.js
// Step By Step
function NumberAddition(str) {
    // First we charge our input string into an array by splitting it at every alphabetic character.
    // Note that this regex expression will match any capital or lowercase letter.
    str = str.split(/[a-zA-Z]/);
    // Next, we declare a sum variable to hold our answer.
    var sum = 0;

    // After that, we loop through each element in our modified array...
    for (var i = 0; i < str.length; i++) {
        // ...and if it isn't an empty string...
        if (str[i] !== "") {
            // ...we parse its value with parseInt and add it to our answer.
            sum += parseInt(str[i]);
        }
    }

    // Finally, we return our answer
    return sum;
}

// Best Practices
function NumberAddition(str) {

    str = str.split(/[a-zA-Z]/);
    var sum = 0;

    for (var i = 0, x = str.length; i < x; i++) {
        if (str[i] !== "") {
            sum += parseInt(str[i]);
        }
    }

    return sum;
}

// Easy - 26 - Third Greatest.js
function ThirdGreatest(strArr) {

    strArr = strArr.sort(function(a, b) {
        return b.length - a.length;
    });
    return strArr[2];

}

// Easy - 27 - Powers of Two.js
function PowersofTwo(num) {

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = Math.floor(num / 2);
    }
    return true;
}

// Easy - 28 - Additive Persistence.js
function AdditivePersistence(num) {

    var addPer = 0;

    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (var i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }

    function add(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = add(num);
        addPer++;
    }

    return addPer;
}

// Easy - 29 - Multiplicative Persistence.js
function MultiplicativePersistence(num) {

    var multiPer = 0;

    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }

    function mult(array) {
        var product = 1;
        for (i = 0; i < array.length; i++) {
            product *= array[i];
        }
        return product;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = mult(num);
        multiPer++;
    }

    return multiPer;
}
// Easy - 30 - Off Line Minimum.js
function OffLineMinimum(strArr) {

    var numTest = /[1234567890]/;
    var numArr = [];
    var answerArr = [];
    var lowest = 10;
    var lowestInd = 0;

    for (var i = 0; i < strArr.length; i++) {
        if (numTest.test(strArr[i])) {
            numArr.push(strArr[i]);
        } else {
            for (var j = 0; j < numArr.length; j++) {
                if (numArr[j] < lowest) {
                    lowest = numArr[j];
                    lowestInd = numArr.indexOf(lowest);
                }
            }
            answerArr.push(lowest);
            lowest = 10;
            numArr.splice(lowestInd, 1);
        }
    }

    return answerArr.join(",");
}

function LetterChanges(str) {

    var string = str.toLowerCase().split('');

    for (var i = 0; i < string.length; i++) {
        if (isAlpha(string[i])) {
            var charCode = string[i].toString().charCodeAt(string[i]);
            if (string[i] !== 'z') {
                string[i] = String.fromCharCode(charCode + 1);
            } else if (string[i] === 'z') {
                string[i] = 'a';
            }
        }
    }

    for (var j = 0; j < string.length; j++) {
        if (vowels(string[j])) {
            string[j] = string[j].toUpperCase();
        }
    }

    function isAlpha(char) {
        var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
        for (var i = 0; i < alpha.length; i++) {
            if (char === alpha[i]) {
                return true;
            }
        }
        return false;
    }
    return string.join('');

    function vowels(char) {
        var v = ['a', 'e', 'i', 'o', 'u'];
        for (var i = 0; i < v.length; i++) {
            if (char === v[i]) {
                return true;
            }
        }
        return false;
    }
}
console.log(LetterChanges("abcdefghijklmnopqrstuvwxyz"));
