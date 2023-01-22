/*Ronald Mercado H.
Description: Web-Client Final Project
Date:November 9 2022
*/

// main document Js


function openform(){
  document.getElementById('myform').style.display = 'block';
  hiddeBtn();
}

function closeform(){
  document.getElementById('myform').style.display = 'none';
  showBtn();
  
}

function hiddeBtn(){  
  document.getElementById('div-callform').style.display = 'none';
}

function showBtn(){  
  document.getElementById('div-callform').style.display = 'block';
}


function mylogout(){
  closeform()
  hideContent();
  showBtn();   
}


let login_username="ronald@proj.ca";
let login_password="123";

function mylogin(){
  
  $(document).ready(function(){     
 
    let vUser, vPassword;
    vUser = document.getElementById("userName").value;  
    vPassword = document.getElementById("userPassword").value;

       
    if ((vUser == login_username) && (vPassword == login_password))
    { 
        setCookie('uName',vUser,1);
        $(".main-content").show();        
    }
    else
    {
      alert('Subscribe or use a free account (user: admin passw: 123)');
      document.getElementById("userPassword").value="";
      document.getElementById("userPassword").focus();	  
    }
    
});
}

function hideContent(){
  $(".main-content").hide();
}

function showContent(){
  $(".main-content").show();
}


//Cookies

function setCookie(cname, cvalue, exdays) {
  
  const d = new Date();

  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";  
  
  const user = document.getElementById('welcome');
  user.innerHTML = "Welcome " + getCookie('uName') + "!";

}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function use cookie to keep or not login
function checkCookie(){
  if(getCookie('uName')!=="")
{
  $(".main-content").show();
}
else
{
  hideContent();
}
}


// function to search Teams


function checkTeams()
{

  let arrNames = ["mercedes", "alpine", "haas", "mclaren", "alfa romeo", "red bull", "aston martin", "ferrari", "alphatauri", "williams"]

  let arrImgs = ["../02-images/Teams/mercedes.jpg","../02-images/Teams/alpine.jpg","../02-images/Teams/haas.jpg","../02-images/Teams/mclaren.jpg","../02-images/Teams/alfa-romeo.jpg","../02-images/Teams/red-bull.jpg", "../02-images/Teams/aston-martin.jpg","../02-images/Teams/ferrari.jpg", "../02-images/Teams/alphatauri.jpg","../02-images/Teams/williams.jpg"]

  let arrPilots = ["Hamilton - Russel", "Gasly - Ocon", "Magnussen - Schumacher", "Norris - Piastri", "Bottas - Zhou", "Verstappen - Perez", "Stroll - Alonso", "Leclerc - Sainz", "Tsunoda - Devries", "Albon - Latifi" ]

  let arrTeamChief = ["Toto Wolff", "Otmar Szafnauer","Guenther Steiner","Andreas Seidl","Frédéric Vasseur","Christian Horner","Mike Krack","Mattia Binotto","Franz Tost","Jost Capito"]

  let arrFirstTeamEntry = ["1970","1986","2016","1966","1993","1997","2018","1950","1985","1978"]


  let teamName, imgTeam, resultName, drivers, chief, firstYear;

  teamName = document.getElementById("teamName").value.toLowerCase();

  let index = -1;

  for (let i = 0; i < 11; i++)
  {
      if (arrNames[i] == teamName)
      {
      index = i;
      resultName = arrNames[index].toUpperCase();
      imgTeam = arrImgs[index];
      drivers = arrPilots[index];
      chief = arrTeamChief[index];
      firstYear = arrFirstTeamEntry[index];
      }
  }

  if (index == -1)  //no planet name was found
  {
      resultName = "Team does not exist, please try again !";
      imgTeam = "./Img/none.jpg";
  }

  document.getElementById("team").innerHTML = resultName;
  document.getElementById("drivers").innerHTML = drivers;
  document.getElementById("chief").innerHTML = chief;
  document.getElementById("firstEntry").innerHTML = firstYear;
  document.getElementById("readImg").src = imgTeam;

}


/* Function to search team using Map*/

function setTeams(teamName){

  document.getElementById("teamName").value = teamName;
  checkTeams();
}


/* Display content map car */

function showContentArea1(){
  
  $("#area1").show();
}

function showContentArea2(){
  
  $("#area2").show();
}

function showContentArea3(){
  
  $("#area3").show();
}


function showContentArea4(){
  
  $("#area4").show();
}


function showContentArea5(){
  
  $("#area5").show();
}


function showContentArea6(){
  
  $("#area6").show();
}

function showContentArea7(){
  
  $("#area7").show();
}

function showContentArea8(){
  
  $("#area8").show();
}


/* Subscribe Page scripts*/

//Validation functions
let nameR = document.getElementByid('title');

function setValue() {

nameR.value = "Ronald";


} 
  


function valtitle(){

  let title = document.getElementById("title")
  if(title.value === ""){
    alert("Enter a valid title Mr / Ms");
  }
  else if(title !== ""){
    title = document.getElementById("title").value.toLowerCase();
    
  }
}

function valname(){

  let name = document.getElementById("fname")
  if(name.value === ""){
    alert("Enter a valid name");
  }
  else if(title !== ""){
    name = document.getElementById("fname").value.toLowerCase();
    
  }
}

function valcountry(){

  let country = document.getElementById("country")
  if(country.value === ""){
    alert("Enter a country");
  }
  else if(title !== ""){
    country = document.getElementById("country").value.toLowerCase();
    
  }
}

function valemail(){

  let email = document.getElementById("email")
  if(email.value === ""){
    alert("Enter a email");
  }
  else if(email !== ""){
    email = document.getElementById("email").value.toLowerCase();
    
  }
}

function valForm(){    
  valtitle();
  valname();
  valcountry();
  valemail();
  calcTime();
}


/*function time filling form*/
let time1;

function setTime(){  
    time1 = new Date();  
}
    
function calcTime(){      
    let time2 = new Date();
    let timeTot = time2.getTime() - time1.getTime()
    let min = Math.floor((timeTot/1000/60) << 0), sec = Math.floor((timeTot/1000) % 60);    
    alert("You filled out this form in = " + min + " min : " + sec + " secs" );    
}

