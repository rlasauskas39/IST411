async function getBaconIpsum(){
  //Beginning of api string call
  var apiString = "https://baconipsum.com/api/";

  //Get value from dropdown selection and add onto api call
  var eachParagraph = document.getElementById("newParagraphs").value;

  var content = document.getElementById("usableWords").value;

  apiString = apiString + "?type=" + content + "&paras=" + eachParagraph;
  
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
  //Define the alphabet array used in the ciphers
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];
  console.log(alphabet);    //Show alphabet used in dev tools in browser *** new JS element
  if(document.getElementById("algoSelect").value === "option1"){
    //Cipher #1  
    //Shift the letter by +7 in the given alphabet array
    //Array to build the encrypted text
    let cipher = [];

    //Loops through each paragraph within the json
    for(let para = 0; para < json.length; para++){

      //Loops through each letter of a paragraph
      for(let i = 0; i < json[para].length; i++){

        //Spaces and periods remain the same *** "||" new JS element
        if(json[para][i] == " " || json[para][i] == "."){
          cipher[i] = json[para][i];    //Copies the space or period to final array
        } else{
          let letter = json[para][i];   //pulls the letter from the json
          letter = letter.toLowerCase();    //lowercases the letter to be able to compare
          let place = alphabet.indexOf(letter);   //finds index of letter within alphabet array *** new JS element
          place += 7;   //Does the shifting so plus 7 in this case

          //Check to ensure it does not go out of bounds
          if(place > 26){
            place -= alphabet.length;   //Keeps in the array by subtracting the out of bounds number by the length
          }
          cipher[i] = alphabet[place];    //Puts the shifted letter into the final array
        }
      }
      cipher = cipher.join("");   //Creates a string from the array *** new JS element
      document.getElementById("encrypted").innerHTML += "<p>" + cipher + "</p>";    //Puts the final string into HTML
      cipher = [];    //Resets the array
    }
  }

  else{
    //Cipher #2
    //reverses cipher
    
    //Empty array to hold the encrypted version
    let cipher = [];

    //Initial loop to go through the json and go through the correct number of paragraphs
    for(let para = 0; para < json.length; para++){

      //Loop through each of the letters of an individual paragraph
      for(let i = 0; i < json[para].length; i++){

        //Keep the spaces and periods so that it at least still looks like a sentence *** "||" new JS element
        if(json[para][i] == " " || json[para][i] == "."){
          cipher[i] = json[para][i];    //places the space or period into the final array
        } else{
          let letter = json[para][i];   //pulls the letter from the json
          letter = letter.toLowerCase();    //lowercases the letter to be able to compare
          let place = alphabet.indexOf(letter);   //finds index of letter within alphabet array *** new JS element
          alphabet.reverse();   //reverses alphabet to get the letter starting from the end
          cipher[i] = alphabet[place];    //grabs the reversed letter and places in final array
          alphabet.reverse();   //reverses alphabet again to get it back to the normal arrangement *** new JS element
        }
      }
      cipher = cipher.join("");   //Makes the array a string *** new JS element
      document.getElementById("encrypted").innerHTML += "<p>" + cipher + "</p>";    //Prints the encrypted paragraphs
      cipher = [];    //Resets the array
    }
  }
  return true;
}