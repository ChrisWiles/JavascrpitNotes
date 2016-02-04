// format Date function using Javascript prototype
// Add an argument that specifies how the dates should be written
// YYYY/MM/DD or MM/DD/YYYY e
Date.prototype.formatDate = function() {

  var date = this,
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return month + "/" + month + "/" + year;
};

var date = new Date();
date.formatDate(); // // YYYY/MM/DD
