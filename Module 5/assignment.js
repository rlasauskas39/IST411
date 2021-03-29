async function getQuote(){
  var minLength = "";
  var maxLength = "";
  var quote;
  var author;
  var length = document.getElementById("lengthChosen").value;
  var tag = document.getElementById("tags").value;
  document.getElementById("alertLocation").innerHTML = "";

  if(length === "short"){
    minLength = "?minLength=0";
    maxLength = "&maxLength=50";
  } else if(length === "medium"){
    minLength = "?minLength=50",
    maxLength = "&maxLength=150";
  } else if(length === "long"){
    minLength = "?minLength=150";
    maxLength = "";
  }

  var apiString = "https://api.quotable.io/random" + minLength + maxLength + tag;
  var response = await fetch(apiString);
  var json = await response.json();

  if(json.statusCode === 404){
    quote = json.statusMessage;
    author = "";
    document.getElementById("alertLocation").innerHTML = "<div class='alert alert-danger'>Sorry, Could not find a quote for the selected parameters. Please Try a different combination.</div>";
  } else{
    quote = json.content;
    author = json.author;
  }

  document.getElementById("quoteLocation").innerHTML = quote;
  document.getElementById("authorLocation").innerHTML = author;
}