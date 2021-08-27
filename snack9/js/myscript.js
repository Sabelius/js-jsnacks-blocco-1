var firstList = ["0", "1", "2", "3", "4", "5"];
var secondList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var newList = ["0", "1", "2", "3", "4", "5"];

for(var i = 0; i < 4; i++){ 
  newList.push(Math.floor(Math.random() * secondList.length));
}


document.getElementById("first").innerHTML = firstList;
document.getElementById("second").innerHTML = newList;

