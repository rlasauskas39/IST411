async function getQuote(){

  //Starting values for variables used
  var minLength = "";
  var maxLength = "";
  var quote;
  var author;
  var length = document.getElementById("lengthChosen").value;
  var tag = document.getElementById("tags").value;
  document.getElementById("alertLocation").innerHTML = "";

  //Sets the length parameters based on the user choice
  //If short is selected the it will be between 0 and 50 characters
  if(length === "short"){
    minLength = "?minLength=0";
    maxLength = "&maxLength=50";
  } 
  //If medium is selected the it will be between 50 and 150 characters
  else if(length === "medium"){
    minLength = "?minLength=50",
    maxLength = "&maxLength=150";
  } 
  //If long is selected the it will be over 150 characters
  else if(length === "long"){
    minLength = "?minLength=150";
    maxLength = "";
  }

  //Produces the api call and converts it to a json object
  var apiString = "https://api.quotable.io/random" + minLength + maxLength + tag;
  var response = await fetch(apiString);
  var json = await response.json();

  //If there is an error such as no matching quotes it will relay the message effectively
  if(json.statusCode === 404){
    quote = json.statusMessage;
    author = "";

    //New Bootstrap Element, red alert bar that pops up on an error and informs the user
    document.getElementById("alertLocation").innerHTML = "<div class='alert alert-danger'>Sorry, Could not find a quote for the selected parameters. Please Try a different combination.</div>";
  } 
  //If it worked properly then it will spit out the quote and author
  else{
    quote = json.content;
    author = json.author;
  }

  //Displays the quote and author or an error if it occured
  document.getElementById("quoteLocation").innerHTML = quote;
  document.getElementById("authorLocation").innerHTML = author;
}