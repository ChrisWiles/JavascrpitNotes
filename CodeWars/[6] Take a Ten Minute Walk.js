// [6] Take a Ten Minute Walk.js

// each letter is 1 min
// must end up were you started
// to end up were you started w == e & s == n
function isValidWalk(walk) {
  if (walk.length < 10) {
    return false;
  }
  var s = 0,
    n = 0,
    w = 0,
    e = 0;
  for (var i = 0; i < walk.length; i++) {
    if (walk[i] == "s") s++;
    if (walk[i] == "n") n++;
    if (walk[i] == "w") w++;
    if (walk[i] == 'e') e++;
  }
  if (s != n || w != e) {
    return false;
  }
  return true;
}
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }

  return dt === 10 && dx === 0 && dy === 0
}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) // true
