async function getAccountInfo(){
  var apiString = "https://api.github.com/users/";
  var username = document.forms["userForm"]["user"].value;

  apiString = apiString + username +"/repos";
  var response = await fetch(apiString);

  document.getElementById("repos").innerHTML = "";

  var jsonRepos = await response.json();

  //document.getElementById("repos").innerHTML = JSON.stringify(jsonRepos);

  alert("1");
  var repoArr = [];
  for(let i = 0; i < jsonRepos.length; i++){
    repoArr.push(jsonRepos[i].name);
  }
  alert("2");

  document.getElementById("repos").innerHTML = repoArr;
  alert("Done");
}