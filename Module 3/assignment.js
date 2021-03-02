function clearListOne(){
  var tableRef = document.getElementById("algoOne");
  tableRef.innerHTML = "";
}

function clearListTwo(){
  var tableRef = document.getElementById("algoTwo");
  tableRef.innerHTML = "";
}

function checkPalindrome(){
  var choice = document.forms["myForm"]["algoNum"].value;

  //Algorithm 1
  if(choice == 1){
    var result;
    var word = document.forms["myForm"]["newWord"].value;
    var revWord = word.split("").reverse().join("");
    
    if(word == revWord){
      result = true;
    } else{
      result = false;
    }

    var tableRef = document.getElementById("algoOne");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + ":" + result;

    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["algoNum"].value = "";
  }

  //Algorithm 2
  else if(choice == 2){
    var result;
    var word = document.forms["myForm"]["newWord"].value;
    var str = "";

    for(var i = word.length -1; i >= 0; i--){
      str += word[i];
    }
    
    if(word == str){
      result = true;
    } else{
      result = false;
    }
    
    var tableRef = document.getElementById("algoTwo");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + ":" + result;

    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["algoNum"].value = "";
  }
}