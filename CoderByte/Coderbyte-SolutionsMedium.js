// Medium - 01 - Prime Time.js
function PrimeTime(num) {
    if (num === 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Medium - 02 - Run Length.js
function RunLength(str) {

    str = str.split("");
    var count = 1;

    var answer = "";

    for (var i = 0, length = str.length; i < length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            answer += count.toString() + str[i].toString();
            count = 1;
        }

    }

    return answer;

}
// Medium - 03 - Prime Mover.js
function PrimeMover(mynum) {

    function test(num) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }

    var primeArr = [2];
    var cur = 3;
    
    while (primeArr.length < mynum) {
        if (test(cur)) {
            primeArr.push(cur);
        }
        cur++;
    }

    return primeArr.pop();

}

// Medium - 04 - Palindrome Two.js
function PalindromeTwo(str) { 

  
  return str.replace(/[^a-zA-Z]/g, "").toLowerCase() === str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase(); 
         
}

// Medium - 05 - Division.js
function Division(num1, num2) {
    var largestFactor = 1;
    var smallerNum;
    
    if (num1 > num2) {
        smallerNum = num2;
    } else {
        smallerNum = num1;
    }

    for (i = 1; i <= smallerNum; i++) {
        if ((num1 % i === 0) && (num2 % i === 0) && (i > largestFactor)) {
            largestFactor = i;
        }
    }
    return largestFactor;
}

// Medium - 06 - String Scramble.js
function StringScramble(str1,str2) { 

  for (i=0;i<str2.length;i++) {
       if (str1.indexOf(str2[i]) === -1) {
       return false;
       }
       else {
       str1 = str1.replace(str2[i], "");
       }
  }
  
  return true;
         
}

// Medium - 07 - Arith Geo II.js
function ArithGeoII(arr) { 
  var diffArr = [];
  var geoArr = [];
  var geoFlag = true;
  var arithFlag = true;
  for (i=0;i<arr.length-1;i++) {
  diffArr.push(arr[i+1]-arr[i]);
  geoArr.push(arr[i+1]/arr[i]);
  }
  for (i=0;i<diffArr.length-1;i++) {
    if (diffArr[i] !== diffArr[i+1]) {
    arithFlag = false;
    }
    if (geoArr[i] !== geoArr[i+1]) {
    geoFlag = false;    
        }
  }

  if (arithFlag) {
  return "Arithmetic";
  }
  else if (geoFlag) {
  return "Geometric";
  }
  else {
  return -1;
  }
  
          
}

// Medium - 08 - Array Addition.js
function ArrayAddition(arr) { 

  var largest = arr.sort(function(a,b){return a-b}).pop();
  var sum = 0;
  
  for (i=0;i<arr.length;i++) {
    sum += arr[i];
    if (sum===largest) {
    return true;
    }
    
    for (j=0;j<arr.length;j++) {
      if (j!==i) {
      sum += arr[j];
      }
      if (sum===largest) {
    return true;
    }
    }
    for (k=0;k<arr.length;k++) {
      if (k!==i) {
      sum -= arr[k];
      }
      if (sum===largest) {
    return true;
    }
    }
    sum = 0;
  }
  
 return false;      
}

// Medium - 09 - Binary Converter.js
function BinaryConverter(str) { 

  str = str.split("").reverse();
  var sum = 0;
  if (str[0]==1) {
  sum += 1;
  }
  
  for(i=1;i<str.length;i++) {
    if (str[i]==1){    
    sum += Math.pow(2,i);
    }
    }
    
  return sum; 
         
}
// Medium - 10 - Letter Count.js
function LetterCount(str) { 

  var wordArr = str.split(" ");
  var currentDif = 0;
  var largestDif = 0;
  var answer;
  var currentWord;
  var currentWordLength;
  var currentWordR;
  var currentWordRLength;
  
  for (i=0;i<wordArr.length;i++) {
  currentWord = wordArr[i].split("").sort();
  currentWordLength = currentWord.length;
    for (j=0;j<currentWordLength-1;j++) {
      if (currentWord[j]===currentWord[j+1]) {
      currentWord.splice(j,1);
      }
    }
  currentWordR = currentWord;
  currentWordRLength = currentWordR.length;
  currentDif = (currentWordLength - currentWordRLength);
  
    if (currentDif>largestDif) {
    largestDif = currentDif;
    answer = wordArr[i];
    }
  
  }
  if (largestDif>0) {
  return answer;
  }
  else {
  return -1;
  }
         
}
// Medium - 11 - Caesar Cipher.js
function CaesarCipher(str, num) {

    var alphaStrLow = "abcdefghijklmnopqrstuvwxyz";
    var alphaStrUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var currentLetterInd = 0;
    var newLetterInd = 0;
    var answer = "";
    var lowerTest = /[a-z]/;
    var upperTest = /[A-Z]/;

    for (i = 0; i < str.length; i++) {
        if (upperTest.test(str[i])) {
            currentLetterInd = alphaStrUpp.indexOf(str[i]);
            newLetterInd = (currentLetterInd + num) % 26;
            answer += alphaStrUpp[newLetterInd];
        } 
      else if (lowerTest.test(str[i])) {
            currentLetterInd = alphaStrLow.indexOf(str[i]);
            newLetterInd = (currentLetterInd + num) % 26;
            answer += alphaStrLow[newLetterInd];
        } 
      else {
            answer += str[i];
        }
    }

    return answer;

} 
//  Medium - 12 - Simple Mode.js
function SimpleMode(arr) {

    var map = {};
    var mode = 0;
    var highestFreq = 0;

    for (i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    
    for (i = 0; i < arr.length; i++) {
        if (map[arr[i]] > highestFreq) {
            highestFreq = map[arr[i]];
            mode = arr[i];
        }
    }
    
    if (highestFreq !== 1) {
        return mode;
    } else {
        return -1;
    }
    
    return mode;
}

// Medium - 13 - Consecutive.js
function Consecutive(arr) { 

  arr = arr.sort(function(a,b){return a-b});
  var diffArr = [];
  var diffArrSum = 0;
  for(i=0;i<arr.length-1;i++) {
  diffArr.push((arr[i+1]-arr[i])-1);
  }
  for(i=0;i<diffArr.length;i++) {
  diffArrSum+=diffArr[i];
  }
  return diffArrSum;     
}

// Medium - 14 - Formatted Division.js
function FormattedDivision(num1,num2) { 

  result = (num1/num2).toFixed(4);
  if (result >=1000) {
    result = result.split("");
    for (i=result.length-8;i>0;i-=3) {
      result.splice(i,0,",");
      }
    result = result.join("");
    }
  return result;
}

// Medium - 15 - Counting Minutes.js
function CountingMinutes(str) { 

  str = str.split("-");
  var startTime = str[0].split(":");
  var endTime = str[1].split(":");
  var startHour = parseInt(startTime[0]);
  var startMinutes = parseInt(startTime[1].replace(/[^0-9]/g,""));
  var startAMPM = startTime[1].replace(/[^a-zA-Z]/g,"");
  var endHour = parseInt(endTime[0]);
  var endMinutes = parseInt(endTime[1].replace(/[^0-9]/g,""));
  var endAMPM = endTime[1].replace(/[^a-zA-Z]/g,"");

  if ((startHour != 12) &&  (startAMPM == "pm")) {
  startHour += 12;
  }
  if ((startHour == 12) && (startAMPM == "am")) {
  startHour -= 12;
  }    
  if ((endHour != 12) &&  (endAMPM == "pm")) {
  endHour += 12;
  }
  if ((endHour == 12) && (endAMPM == "am")) {
  endHour -= 12;
  }   

  var timeDif = ((endHour - startHour) * 60) + (endMinutes - startMinutes);
  
  if (timeDif < 0) {
  return 1440 + timeDif;
  }
  else {
  return timeDif;
  }
} 

// Medium - 16 - Permutation Step.js
// Solution by Matt Larsh
// https://github.com/MattLarsh

function PermutationStep(num) {
    var permArr = [];
    var usedChars = [];

    function permute(numArr) {
        var i, ch;
        for (i = 0; i < numArr.length; i++) {
            ch = numArr.splice(i, 1)[0];
            usedChars.push(ch);
            if (numArr.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(numArr);
            numArr.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    }
    permute(String(num).split(""));

    for (var i = 0; i < permArr.length; i++) {
        permArr[i] = Number(permArr[i].join(''));
    }

    permArr = permArr.sort(function (a, b) {
        return a - b;
    });

    for (var j = 0; j < permArr.length; j++) {
        if (permArr[j] > num) {
            return permArr[j];
        }
    }

    return -1;
}

// Medium - 17 - Prime Checker.js
function PrimeChecker(num) {

    function permute(num) {

        num = num.toString().split("");
        var answerArr = [];
        var outerLength = num.length;
        var innerLength = 1;
        var startItem;
        var moveItem;
        for (i = 1; i < num.length; i++) {
            innerLength *= i;
        }

        for (i = 0; i < outerLength; i++) {
            startItem = num[i];
            num.splice(i, 1);

            for (j = 0; j < innerLength+1; j++) {

                moveItem = num.shift();
                num.splice(j, 0, moveItem);
            if (j<innerLength) {
            answerArr.push(parseInt(startItem + num.join("")));
        }
            }
            num.splice(i, 0, startItem);
        }
        return answerArr;
    }

    function isPrime(num) {
        
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
      if (num == 1) {
      return false;
      }
      else {
        return true;
      }
    }


    var possibleCombos = permute(num);
    var foundPerms = 0;
    
    for (k = 0; k < possibleCombos.length; k++) {

        if (isPrime(possibleCombos[k])) {
            foundPerms = 1;
        }

    }

return foundPerms;
}

// Medium - 18 - Dash Insert II.js

function DashInsertII(num) { 

  num = num.toString().split("");
  var answer = "";
  for (i=0;i<num.length;i++) {
    if ((num[i]%2===1) && (num[i+1]%2===1)) {
    answer += num[i] + "-";
    }
    else if ((num[i]!=0) && (num[i+1]!=0) && (num[i]%2===0) && (num[i+1]%2===0)) {
    answer += num[i] + "*";
    }
    else {
    answer += num[i];
    }
  }
  return answer; 
         
}

// Medium - 19 - Swap II.js
function SwapII(str) { 

  var testChar = /[a-zA-Z]/;
  var testSwap = /[0-9][a-zA-Z]+[0-9]/g;
  var answer = "";
  for (i=0;i<str.length;i++) {
    if (testChar.test(str[i])) {
      if (str[i] == str[i].toUpperCase()) {
      answer += str[i].toLowerCase();
      }
      else if (str[i] == str[i].toLowerCase()) {
      answer += str[i].toUpperCase();
      }
      }
    else {
    answer += str[i];
    }
  }
  var numSwaps = answer.match(testSwap);
  if (numSwaps !== null) {
    for (i=0;i<numSwaps.length;i++) {
    answer = answer.replace(numSwaps[i],numSwaps[i][numSwaps[i].length-1]+numSwaps[i].substr(1,numSwaps[i].length-2)+numSwaps[i][0]);
    }
  }
  return answer; 
         
}

// Medium - 20 - Number Search.js
function NumberSearch(str) { 

  var notAlpha = /[^a-zA-Z]/g;
  var notNum = /[^0-9]/g;
  var sum = 0;
  var alphaCount = 0;
  
  var strAlpha = str.replace(notAlpha, "");
  var strNum = str.replace(notNum, "");
  
  for (i=0;i<strAlpha.length;i++) {
    alphaCount++;
  }
 
  for (i=0;i<strNum.length;i++) {
    sum += parseInt(strNum[i]);
  }
  
  return Math.round(sum/alphaCount);
         
}

// Medium - 21 - Triple Double.js
function TripleDouble(num1, num2) {

    num1 = num1.toString();
    num2 = num2.toString();
    var triples = [];
    var doubles = [];

    for (var i = 0; i < num1.length; i++) {
        if ((num1[i] == num1[i + 1]) && (num1[i] == num1[i + 2])) {
            triples.push(num1[i] + num1[i + 1]);
        }
    }
    for (var j = 0; j < num2.length; j++) {
        if (num2[j] == num2[j + 1]) {
            doubles.push(num2[j] + num2[j + 1]);
        }
    }

    for (var k = 0; k < triples.length; k++) {
        if (triples.indexOf(doubles[k]) != -1) {
            return 1;
        }
    }
    return 0;
}

// Medium - 22 - Bracket Matcher.js
function BracketMatcher(str) {

    var leftCount = 0;
    var rightCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            leftCount++;
        } else if (str[i] == ")") {
            rightCount++;
        }
        if (rightCount > leftCount) {
            return 0;
        }
    }

    if (leftCount == rightCount) {
        return 1;
    } else {
        return 0;
    }

}

// Medium - 23 - String Reduction.js
function StringReduction(str) { 
  
  str = str.split("");
  
  function notAllSame (arr) {
    for (i=0;i<str.length;i++) {
      if (str[0] == str[i]) {
        continue;
      }
      else {
        return true;
      }
    }
    return false;
  }
  while (notAllSame(str)) {
  

  for (i=0;i<str.length;i++) {
    if (str[i] + str[i+1] == "ab") {
    str.splice(i,2,"c");
    }
    if ((str[i] == "a") && (str[i+1] == "c")) {
    str.splice(0,2,"b");
    }
    if ((str[i] == "b") && (str[i+1] == "c")) {
    str.splice(i,2,"a");
    }
    if ((str[i] == "b") && (str[i+1] == "a")) {
    str.splice(i,2,"c");
    }
    if ((str[i] == "c") && (str[i+1] == "b")) {
    str.splice(i,2,"a");
    }
    if ((str[i] == "c") && (str[i+1] == "a")) {
    str.splice(i,2,"b");
    }
  }
  
  }
  return str.length;
         
}
// Medium - 24 - Three Five Multiples.js
function ThreeFiveMultiples(num) { 
  var sum = 0;
  for (var i = 0; i < num; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  } 
  return sum; 
}

// Medium - 26 - Fibonacci Checker.js

function FibonacciChecker(num) { 
  var fibSeq = [0,1];
  for (i=0;i<=100000;i++) {
  fibSeq.push(fibSeq[i]+fibSeq[i+1]);
    
  }
  if (fibSeq.indexOf(num) != -1) {
  return "yes";
  } 
  else  {
  return "no";
  }
    
         
}

// Medium - 27 - Multiple Brackets.js
function MultipleBrackets(str) {

    var leftPCount = 0;
    var rightPCount = 0;
    var leftBCount = 0;
    var rightBCount = 0;

    for (var i = 0; i <= str.length; i++) {
        if (str[i] == "(") {
            leftPCount++;
        } else if (str[i] == ")") {
            rightPCount++;
        }
        if (rightPCount > leftPCount) {
            return 0;
        }

        if (str[i] == "[") {
            leftBCount++;
        } else if (str[i] == "]") {
            rightBCount++;
        }
        if (rightBCount > leftBCount) {
            return 0;
        }

    }

    if ((leftPCount == rightPCount) && (leftBCount == rightBCount)) {
        return "1 " + (leftPCount + leftBCount);
    }
    return 0;

}
// Medium - 30 - Distinct List.js
function DistinctList(arr) { 

  arr = arr.sort(function(a,b){return a-b});
  var startLength = arr.length;
    for (i=arr.length-1;i>0;i--) {
      if (arr[i] === arr[i-1]) {
      arr.splice(i,1);
      }
    }
  var endLength = arr.length;
  
  return startLength - endLength; 
         
}
