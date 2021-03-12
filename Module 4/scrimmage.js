async function getAccountInfo(){
  var apiString = "https://api.github.com/users/";
  var username = document.forms["userForm"]["user"].value;

  apiString = apiString + username +"/repos";
  var response = await fetch(apiString);

  document.getElementById("repos").innerHTML = "";

  var jsonRepos = await response.json();
  jsonRepos = JSON.stringify(jsonRepos);

  var obj = await JSON.parse(jsonRepos);
  document.getElementById("repos").innerHTML = obj.name;
  //document.getElementById("repos").innerHTML = jsonRepos;

  //alert(Object.getOwnPropertyNames(obj));
  alert("Done");
}