//Array holds numbers
var list = [];

//Clears all values
function clearList(){
  var tableRef = document.getElementById("numberList");
  tableRef.innerHTML = "";
  list = [];
  document.getElementById("currentMean").innerHTML = "";
  document.getElementById("currentMedian").innerHTML = "";
  document.getElementById("currentMode").innerHTML = "";
  document.getElementById("currentLow").innerHTML = "";
  document.getElementById("currentHigh").innerHTML = "";
}

//Add a Low Range value
function addLowRange(){
  document.getElementById("currentLow").innerHTML = document.forms["lowRange"]["lowNumber"].value;
}

//Add new number and update statistics
function addNewNumber(){
  var mean;
  var median;
  var number = parseInt(document.forms["newNumber"]["addNumber"].value);
  var low = parseInt(document.forms["lowRange"]["lowNumber"].value);
  var high = parseInt(document.forms["highRange"]["highNumber"].value);

  //If lower than range send error
  if(number < low){
    alert("Please enter a number within the range");
    return false;
  }
  //If higher than range send error
  else if(number > high){
    alert("Please enter a number within the range");
    return false;
  }

  //Update running list of numbers
  var tableRef = document.getElementById("numberList");
  (tableRef.insertRow(tableRef.rows.length)).innerHTML = number;

  //Update array of numbers and sort numerically
  list.push(number); 
  list.sort(function(a,b){return a-b});
  
  //MEDIAN
  //When list is 1 median is the number
  if(list.length == 1){
    median = list[0];
  }
  //When list is odd compute median
  else if(list.length%2 == 1){
    var med = (list.length/2) - 0.5;
    median = list[med]
  } 
  //When list is even compute median
  else{
    var x = parseInt(list[list.length/2]);
    var holder = parseInt((list.length/2)-1);
    var y = parseInt(list[holder]);
    median = (x+y)/2;
  }
  
  //Update statistic for median
  document.getElementById("currentMedian").innerHTML = median;

  //MODE
  var streak = 1;
  var best = 0;
  var modes=[];

  //loop through array
  for(let i = 0; i <= list.length-1;i++){
    //If one value and the next are the same add to the streak;
    if(list[i] == list[i+1]){
      streak++;
    }

    else{
      //If streak is greater than or equal to best streak then it adds the number to the list of modes
      if(streak == best){
        best = streak;
        modes.push(list[i]);
        streak = 1;
      }
      //When it beats the best it erases current modes array and adds the new leader
      else if(streak > best){
        modes = [];
        best = streak;
        streak = 1;
        modes.push(list[i]);
      }
      //If streak is less than best reset streak
      else{
        streak = 1;
      }
    }
  }

  //Update mode
  document.getElementById("currentMode").innerHTML = modes;

  //MEAN
  var z = 0;

  //Calculates total for the array
  for(var i = 0; i < list.length; i++){
    z += parseInt(list[i]);
  }

  //Averages the array and displays the mean
  mean = z/list.length;
  document.getElementById("currentMean").innerHTML = mean;
  
  //Erases the number field so user doesnt need to erase
  document.forms["newNumber"]["addNumber"].value = "";
}

//Adds high range
function addHighRange(){
  document.getElementById("currentHigh").innerHTML = document.forms["highRange"]["highNumber"].value;
}