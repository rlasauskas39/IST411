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

    
  }

  //Algorithm 2
  else{
    
  }

  document.forms["myForm"]["newWord"].value = "";
  document.forms["myForm"]["algoNum"].value = "";
}