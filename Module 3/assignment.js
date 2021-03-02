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
  var word = document.forms["myForm"]["newWord"].value;

  if(word == ""){
    alert("Please Enter a Word to Check");
    return false;
  }

  //Algorithm 1
  if(choice == 1){
    var result;
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
    return true;
  }

  //Algorithm 2
  else if(choice == 2){
    var result;
    var str = "";

    for(var i = word.length - 1; i >= 0; i--){
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
    return true;
  }

  else{
    alert("Please Enter 1 or 2 to Select an Algorithm");
    document.forms["myForm"]["algoNum"].value = "";
    return false;
  }
}