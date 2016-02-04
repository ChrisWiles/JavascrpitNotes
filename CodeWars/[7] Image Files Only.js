// Image Files Only
// Build a function that will take an array of filenames (as string) and return an array of array. Each array
// will provide 3 informations about the image file: the full filename, its name and the extension. (See the
// example below)

// Detect the image files based on the end of the filename which is their format (extension).
// Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while
// "puppies.html" is not.

// For example:
// Input: ["imgName.extension", "notAnImg"]
// Output: [["imgName.extension", "imgName", "extension"], null]

// So:
// imageFilter(["index.html", "favicon.gif"])
// return [null, ["favicon.gif", "favicon", "gif"]]

// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an imag


function imageFilter(arr) {
  var imgArray = [];

  for (var i = 0; i < arr.length; i++) {
    var filename = arr[i].slice(0, arr[i].indexOf('.'));
    var extension = arr[i].slice(arr[i].indexOf('.') + 1, arr[i].length);
    if (filename === '') {
      imgArray.push(null);
    } else if (!isImage(extension)) {
      imgArray.push(null);
    } else {
      imgArray.push([filename + '.' + extension, filename, extension]);
    }
  }

  function isImage(str) {
    var imgFormats = ['jpg', 'gif', 'png', 'tiff', 'svg', 'bmp'];
    var s = str.toLowerCase();

    // This function returns true if the callback function returns true for any array element; otherwise, false.
    return imgFormats.some(function(element, index, array) {
      return element == s;
    });
  }
  return imgArray;
}

function imageFilter(arr) {
  return arr.map(file => file.match(/^(.+)\.(bmp|gif|jpg|png|tiff)$/i))
}


// null,null,[".tiff","","tiff"]
var a = ["index.html", "favicon.gif", ".tiff"];
imageFilter(a);
