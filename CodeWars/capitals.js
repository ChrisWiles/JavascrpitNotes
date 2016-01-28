function capitals(word) {
   var split = word.toString().split('');
   var capitalsIndex = [];

   for (var i = 0, j = split.length; i < j; i++) {
      if (isCapital(split[i])) { // found Capital
         capitalsIndex.push(split[i]);
      }
   }

   function isCapital(index) {
      var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
         'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
         'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
      for (var i = 0; i < capitalized.length; i++) {
         if (index === capitalized[i]) {
            return true;
         }
      }
   }
   return capitalsIndex;
}


function randomLetterGen() {
   var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
   ];
   var lowerCase = [];
   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   for (var i in capitalized) {
      lowerCase.push(capitalized[i].toLowerCase());
   }
   var characters = numbers.concat(capitalized, lowerCase);
   var randomIndex = Math.floor(Math.random() * characters.length);
   var randomChar = characters[randomIndex];
   return (randomChar);
}

function createRandomArry(length) {
   var array = [];
   for (var i = 0; i < length; i++) {
      array.push(randomLetterGen());
   }
   return array;
}

console.log("File Loaded");

var obj = {
   capitals: function(word) {
      var split = word.toString().split('');
      var capitalsIndex = [];

      for (var i = 0, j = split.length; i < j; i++) {
         if (isCapital(split[i])) { // found Capital
            capitalsIndex.push(split[i]);
         }
      }

      function isCapital(index) {
         var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
         for (var i = 0; i < capitalized.length; i++) {
            if (index === capitalized[i]) {
               return true;
            }
         }
      }
      return capitalsIndex;
   },

   randomLetterGen: function() {
      var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
         'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
         'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var lowerCase = [];
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (var i in capitalized) {
         lowerCase.push(capitalized[i].toLowerCase());
      }
      var characters = numbers.concat(capitalized, lowerCase);
      var randomIndex = Math.floor(Math.random() * characters.length);
      var randomChar = characters[randomIndex];
      return (randomChar);
   },

   createRandomArry: function(length) {
      var array = [];
      for (var i = 0; i < length; i++) {
         array.push(randomLetterGen());
      }
      return array;
   }
};