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
    //random number generator for 0-27
    
    var cipher = [];
    for(var para in json){
      for(let i = 0; i < json[para].length; i++){
        if(json[para][i] == " " || json[para][i] == "."){
          cipher[i] = json[para][i];
        } else{
          let ran = Math.floor(Math.random() * 27);
          cipher.push(alphabet[ran]);
        }
      }
    }
    cipher = cipher.join("");
    document.getElementById("encrypted").innerHTML = cipher;
  }
  return true;
}