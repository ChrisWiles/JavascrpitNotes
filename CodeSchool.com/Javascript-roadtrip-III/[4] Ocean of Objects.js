// [4] Ocean of Objects.js
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  for(var i = 1; i <= location.numRangers; i++){
    list += location["ranger" + i].name + ", man the " + location.weaponBulbs[location["ranger" + i].station -1 ][0] + "!\n";
  }
  alert(list);
}
dontPanic(lighthouseRock);
// Avast, me hearties!
// There be Pirates nearby! Stations!
// Nick Walsh, man the Solar Death Ray!
// Drew Barontini, man the Supernova!
// Christine Wong, man the Firestorm!

// Object Functionality
// "This" keyword always refers to the owner Objec tof the function in whitch the "this" is used

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};


function relieveDuty(vehicle,day) {
  var offDuty = [];
  var onDuty = [];
  var num = vehicle.numRangers;
  for(var i = 1; i <= num; i++) {
    if(vehicle["ranger" + i].dayOff == day) {
    	offDuty.push(vehicle["ranger" + i]);
      delete vehicle["ranger" + i];
      vehicle.numRangers--;
    } else {
      onDuty.push(vehicle["ranger" + i]);
      delete vehicle["ranger" + i];
    }
  }
  for(var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger" + j] = onDuty[j-1];
  }
  return offDuty;
}
var offToday = relieveDuty(vehicle3,"Friday");

// Enumeration with the for-in loop
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

rockSpearguns["listGuns"] = function() {
  for (var property in this) {
    if (this[property]["heft"] != undefined) {
      console.log("Behold! " + property + ", with " +
                  this[property]["heft"] + " heft!");
    }
  }
};

rockSpearguns["listGuns"]();
