// Convert HTML Entities.js

// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
function convert(str) {

  //map of key:value pairs
  var html = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;"
  };
  str = str.replace(/&|<|>|"|'/gi, function(matched) {
    return html[matched];
  });

  return str;
}

function convert(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}
convert("Dolce & Gabbana");

// 	non-breaking space	&nbsp;
// <	less than	&lt;
// >	greater than	&gt;
// &	ampersand	&amp;
// ¢	cent	&cent;
// £	pound	&pound;
// ¥	yen	&yen;
// €	euro	&euro;
// ©	copyright	&copy;
// ®	registered trademark	&reg;
