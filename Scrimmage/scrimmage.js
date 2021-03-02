var list = [];

function clearList(){
  var tableRef = document.getElementById("numberList");
  tableRef.innerHTML = "";
  list = [];
}

function addLowRange(){
  document.getElementById("currentLow").innerHTML = document.forms["lowRange"]["lowNumber"].value;
}

function addNewNumber(){
  var mean;
  var median;
  var mode;
  var number = document.forms["newNumber"]["addNumber"].value;

  var tableRef = document.getElementById("numberList");
  (tableRef.insertRow(tableRef.rows.length)).innerHTML = number;

  //var list = [];
  list.push(number); 
  list.sort();
  
  //MEDIAN
  if(list.length == 1){
    median = list[0];
  }
   else if(list.length%2 == 1){
    var med = (list.length/2) - 0.5;
    median = list[med]
    //alert("odd");
  } else{
    var x = parseInt(list[list.length/2]);
    var holder = parseInt((list.length/2)-1);
    var y = parseInt(list[holder]);
    median = (x+y)/2;
    //alert("even");
  }
  
  document.getElementById("currentMedian").innerHTML = median;

  //MODE

  //MEAN
  var z = 0;
  for(var i = 0; i < list.length; i++){
    z += parseInt(list[i]);
  }
  alert(z);
  mean = z/list.length;
  document.getElementById("currentMean").innerHTML = mean;
  

  
}

function addHighRange(){
  document.getElementById("currentHigh").innerHTML = document.forms["highRange"]["highNumber"].value;
}