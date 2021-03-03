var list = [];

function clearList(){
  var tableRef = document.getElementById("numberList");
  tableRef.innerHTML = "";
  list = [];
  document.getElementById("currentMean").innerHTML = "";
  document.getElementById("currentMedian").innerHTML = "";
  document.getElementById("currentMode").innerHTML = "";
}

function addLowRange(){
  document.getElementById("currentLow").innerHTML = document.forms["lowRange"]["lowNumber"].value;
}

function addNewNumber(){
  var mean;
  var median;
  var number = parseInt(document.forms["newNumber"]["addNumber"].value);
  var low = parseInt(document.forms["lowRange"]["lowNumber"].value);
  var high = parseInt(document.forms["highRange"]["highNumber"].value);

  if(number < low){
    alert("Please enter a number within the range");
    return false;
  }

  else if(number > high){
    alert("Please enter a number within the range");
    return false;
  }

  var tableRef = document.getElementById("numberList");
  (tableRef.insertRow(tableRef.rows.length)).innerHTML = number;

  list.push(number); 
  list.sort(function(a,b){return a-b});
  
  //MEDIAN
  if(list.length == 1){
    median = list[0];
  }
   
  else if(list.length%2 == 1){
    var med = (list.length/2) - 0.5;
    median = list[med]
  } 
  
  else{
    var x = parseInt(list[list.length/2]);
    var holder = parseInt((list.length/2)-1);
    var y = parseInt(list[holder]);
    median = (x+y)/2;
  }
  
  document.getElementById("currentMedian").innerHTML = median;

  //MODE
  var streak = 1;
  var best = 0;
  var modes=[];

  for(let i = 0; i <= list.length-1;i++){
    if(list[i] == list[i+1]){
      streak++;
    }
    else{
      if(streak >= best){
        best = streak;
        modes.push(list[i]);
        streak = 1;
      }
      else{
        streak = 1;
      }
    }
  }
  
  document.getElementById("currentMode").innerHTML = modes;

  //MEAN
  var z = 0;
  for(var i = 0; i < list.length; i++){
    z += parseInt(list[i]);
  }
  mean = z/list.length;
  document.getElementById("currentMean").innerHTML = mean;
  

  
  
}

function addHighRange(){
  document.getElementById("currentHigh").innerHTML = document.forms["highRange"]["highNumber"].value;
}