var firstList = ["0", "1", "2", "3", "4", "5"];
var secondList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var longArr;
var shortArr;

if( firstList.length < secondList.length){
  shortArr = firstList;
  longArr = secondList;
} else{
  shortArr = secondList;
  longArr = firstList;
}

var difference = longArr.length - shortArr.length;


for( var i = 0; i < difference; i++){
  shortArr.push(Math.floor(Math.random() * 10));
}


document.getElementById("first").innerHTML = shortArr;
document.getElementById("second").innerHTML = secondList;


