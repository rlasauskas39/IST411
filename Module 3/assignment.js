//Clear List for Algorithm 1
function clearListOne(){
  var tableRef = document.getElementById("algoOne");
  tableRef.innerHTML = "";
}

//Clear List for Algorithm 2
function clearListTwo(){
  var tableRef = document.getElementById("algoTwo");
  tableRef.innerHTML = "";
}

//Checks to make sure user input everything correctly, case sensitivity desired, and if the word is a palindrome according to the chosen algorithm
function checkPalindrome(){
  var choice = document.forms["myForm"]["algoNum"].value;
  var word = document.forms["myForm"]["newWord"].value;
  var senseChecker = document.getElementById("caseSense").checked;

  //Checks if anything is typed for the word
  if(word == ""){
    alert("Please Enter a Word to Check");
    return false;
  }

  //Checks if case sensitivity is desired
  if(senseChecker == false){
    word = word.toLowerCase();
  }

  //Algorithm 1
  if(choice == 1){
    let result;

    //Reverses the word to compare
    let revWord = word.split("").reverse().join("");
    
    //If original and reversed word are the same it will result in true
    if(word == revWord){
      result = true;
    } else{
      result = false;
    }

    //Insert information to the list
    let tableRef = document.getElementById("algoOne");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + ":" + result;

    //Clear the text boxes
    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["algoNum"].value = "";
    return true;
  }

  //Algorithm 2
  else if(choice == 2){
    let result;
    let str = "";

    //Reverses the word
    for(let i = word.length - 1; i >= 0; i--){
      str += word[i];
    }
    
    //If the original and reversed words are the same the result will be true
    if(word == str){
      result = true;
    } else{
      result = false;
    }
    
    //Places the information into the list
    let tableRef = document.getElementById("algoTwo");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + " : " + result;

    //Clears the text boxes
    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["algoNum"].value = "";
    return true;
  }

  //If a number besides 1 or 2 are input in the number box it will alert user
  else{
    alert("Please Enter 1 or 2 to Select an Algorithm");
    document.forms["myForm"]["algoNum"].value = "";
    return false;
  }
}