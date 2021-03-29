async function getQuote(){
  var minLength;
  var maxLength;
  var length = document.getElementById("lengthChosen").value;

  if(length === "short"){
    minLength = 0;
    maxLength = 50;
  } else if(length === "medium"){
    minLength = 50,
    maxLength = 150;
  } else{
    minLength = 150;
    maxLength = 300;
  }

  var apiString = "https://api.quotable.io/random?minLength=" + minLength + "&maxLength=" + maxLength;

  var response = await fetch(apiString);
  var json = await response.json();

  var quote = json.content;
  var author = json.author;

  alert(json.length);

  document.getElementById("quoteLocation").innerHTML = quote;
  document.getElementById("authorLocation").innerHTML = author;

}