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
  document.getElementById("encrypted").innerHTML = "";

  //JSON formatting for response
  var json = await response.json();

  //Make it a string to print
  document.getElementById("raw").innerHTML = JSON.stringify(json);

  //loop through and print each formatted paragraph
  for(var para in json){
    document.getElementById("formatted").innerHTML += "<p>" + json[para] + "</p>";
  }
 


  //Ciphers

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];

  if(document.getElementById("algoSelect").value === "option1"){
    //Cipher #1
    let rawData = json

    let lower = rawData.toLowerCase();

    
    //let lowerArr = lower.split("");
    

    
    /*for(let i = 0; i < lowerArr.length; i++){
      let a = alphabet.indexOf(lowerArr[i]);
      let shift = a + 7;
      lowerArr[i] = alphabet[shift];
    }

    let encryption = lowerArr.toString();

    document.getElementById("encrypted").innerHTML = encryption;

*/
  }

  else{
    //Cipher #2
    //random number generator for 0-26
    
    //Empty array to hold the encrypted version
    var cipher = [];

    //Initial loop to go through the json and go through the correct number of paragraphs
    for(let para = 0; para < json.length; para++){

      //Loop through each of the letters of an individual paragraph
      for(let i = 0; i < json[para].length; i++){

        //Keep the spaces and periods so that it at least still looks like a sentence
        if(json[para][i] == " " || json[para][i] == "."){
          cipher[i] = json[para][i];    //places the space or period into the final array
        } else{
          let ran = Math.floor(Math.random() * 27);   //generate a new number 0-26
          cipher[i] = alphabet[ran];    //put the random letter into the final array
        }
      }
      cipher = cipher.join("");   //Makes the array a string
      document.getElementById("encrypted").innerHTML += cipher + "<br><br>";    //Prints the encrypted paragraphs
      cipher = [];    //Resets the array
    }
  }
  return true;
}