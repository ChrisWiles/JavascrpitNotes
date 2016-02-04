// [3] Hoisting Hills.js
// Function Expressions are never hoisted

function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}

// Analyzing Load Order II
function theBridgeOfHoistingDoom() {
  function balrog() {
    return "fire";
  }
  var ring;
  function elf() {
    return "pointy ears";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  var power = ring();
  return elf();
  function elf() {
    return "immortal";
  }
}
// Reorder the statements as they would be interpreted by a JavaScript interpreter
function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  function elf() {
    return "immortal";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
}

function theBridgeOfHoistingDoom() {
  function fellowship() {
    return "friends";
  }
  var sword = "sting";
  var dwarf = function() {
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  var ring = function() {
    return "precious";
  };
}

function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
}
