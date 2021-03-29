async function getQuote(){
  var minLength;
  var maxLength;
  var length = document.getElementById("lengthChosen").value;

  //Loop through json and += options of each tag to another dropdown for optional tags
  //Link to tags json https://api.quotable.io/tags
  //Find two new bootstrap elements

  if(length === "short"){
    minLength = "";
    maxLength = "maxLength=50";
  } else if(length === "medium"){
    minLength = "minLength=50",
    maxLength = "&maxLength=150";
  } else{
    minLength = "minLength=150";
    maxLength = "";
  }

  var apiString = "https://api.quotable.io/random?" + minLength + maxLength;

  var response = await fetch(apiString);
  var json = await response.json();

  var quote = json.content;
  var author = json.author;

  document.getElementById("quoteLocation").innerHTML = quote;
  document.getElementById("authorLocation").innerHTML = author;
}