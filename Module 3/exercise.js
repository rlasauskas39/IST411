//Function to validate if a word is typed into the corresponding box as well as validate if a 1 or 2 is typed in to see what list to go to. Also if everything is correct it will add it to the designated list
function validateANDadd(){

  //Variables to hold the values typed by user
  var theNewWord = document.forms["myForm"]["newWord"].value;
  var theNewNumber = document.forms["myForm"]["newNumber"].value;

  //Check if anything is typed into the word box
  if(theNewWord == ""){
    alert("Please Enter a Word to Check");
    return false;
  }

  //Check if the number is a 1 or 2 and then assigns what to do in the case of a 1 and in the case of a 2
  else if((theNewNumber != 1) && (theNewNumber != 2)){
    alert("Please Enter a 1 or 2 For The List");
    document.forms["myForm"]["newNumber"].value = "";
    return false;
  }

  //Adds the word to the correct list designated by the user
  else{
    if(theNewNumber==1){
      var tableRef = document.getElementById("myList1");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
    } else{
      var tableRef = document.getElementById("myList2");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
    }

    //Resets the inputs to blank boxes
    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["newNumber"].value = "";
    return true;
  }
}

//Clears out all the words from list 1
function clearList1(){
  var tableRef = document.getElementById("myList1");
  tableRef.innerHTML = " ";
}

//Clears out all the words from list 2
function clearList2(){
  var tableRef = document.getElementById("myList2");
  tableRef.innerHTML = " ";
}