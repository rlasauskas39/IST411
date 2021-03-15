async function getBaconIpsum(){
  //Beginning of api string call
  var apiString = "https://baconipsum.com/api/";

  //Get value from dropdown selection and add onto api call
  var eachParagraph = document.getElementById("newParagraphs").value;
  apiString = apiString + "?type=all-meat&paras=" + eachParagraph;
  
  //Stores what is returned from the api
  var response = await fetch(apiString);

  //Clear previous data
  document.getElementById("raw").innerHTML = "";
  document.getElementById("formatted").innerHTML = "";

  //JSON formatting for response
  var json = await response.json();

  //Make it a string to print
  document.getElementById("raw").innerHTML = JSON.stringify(json);

  //loop through and print each formatted paragraph
  for(var para in json){
    document.getElementById("formatted").innerHTML += "<p>" + json[para] + "</p>";
  }
  return true;
}