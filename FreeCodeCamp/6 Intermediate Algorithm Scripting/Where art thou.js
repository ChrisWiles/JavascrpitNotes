// Write an algorithm that will take an array for the first argument and return an array with
// all the objects that matches all the properties and values in the Object passed as second parameter.

// The Object.keys() method returns an array of a given object's own enumerable properties,
// in the same order as that provided by a for...in loop
// (the difference being that a for-in loop enumerates properties in the prototype chain as well).
function where(collection, source) {

  var key0 = Object.keys(source)[0];
  var value0 = source[key0];
  var key1 = Object.keys(source)[1];
  var value1 = source[key1];

  //console.log("source: ", value0, value1);

  var arr = [];
  for (var keys in collection) {
    // check if value0 & value1 is in object
    console.log(collection[keys][key0], value0) // collection[keys].key0 == undefined

    if (collection[keys][key0] == value0 &&
      collection[keys][key1] == value1) {
      arr.push(collection[keys]);
    }
  }
  return arr;
}

function where(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      // check if obj in collection doesn't have the key
      // or if it does have the key,
      // then check if the property value doesn't match the value in source
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

function where(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    // return a Boolean value for `filter` method
    return srcKeys.every(function(key) {
      // reduce to Boolean value to be returned for `every` method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

function where(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    // return a Boolean value for filter callback using reduce method
    return srcKeys.reduce(function(res, key) {
      // reduce to Boolean value to be returned by reduce method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

function where(collection, source) {
  //Array for storing the matched objects
  var arr = [];
  //For maintaining the number of key-value matches
  var count;
  collection.forEach(function(collObj) {
    //Initialize to zero for each object in collection
    count = 0;
    for (var prop in source) {
      //Check whether the key exists and the key-value is matched
      if (collObj.hasOwnProperty(prop) && collObj[prop] === source[prop])
      //Increase the count if matched
        count++;
    }
    //Check whether all key-value pairs in source are matched
    if (count >= Object.keys(source).length) {
      arr.push(collObj);
    }

  });
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// should return [{ first: "Tybalt", last: "Capulet" }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// should return [{ "a": 1, "b": 2, "c": 2 }].
