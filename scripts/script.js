function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function(){
  
  //Alpha arrays
  const echoLinks = [
    "https://peytonjunjulas.github.io/labEchoDeployment/",
    "https://cgooch99.github.io/echo-lab/",
    "https://gavinraney.github.io/raney-lab-echo/",
    "https://github.com/kobyingram11/cautious-octo-umbrella",
    

  ];

  const echoNames = [
    "peytonjunjulas Lab Echo",
    "cgooch99 Lab Echo",
    "gavinraney Lab Echo",
    "koobyingram11 Lab Echo",
  ];

  let eLen = echoLinks.length;
  let textEcho = "<ul>";
  for (let j = 0; j < eLen; j++) {
    textEcho += "<li>" + "<a href = " + echoLinks[j] + ">" + echoNames[j] + "<a/>" + "</li>";
  }
  textEcho += "</ul>";
  
  document.getElementById("echoLinks").innerHTML = textEcho;


  //Charlie arrays
  const charlieLinks = [
    "https://cgooch99.github.io/CharlieCode/",
    "https://peytonjunjulas.github.io/labCharlie/",
    "https://cdman814.github.io/fuzzy-computing-machine/",
    "https://gatordj98.github.io/upgraded-bassoon/",
    "https://lterwilliger.github.io/friendly-computing-machine/",
    "https://laurenmalone01.github.io/shiny-shinee/",
    "https://errorless-stone.github.io/edgy-bourbon/",
    "https://kobyingram11.github.io/scaling-palm-tree/",
    "https://colintate24.github.io/lab-charlie/",
    "https://jacobsanders7.github.io/verbose-guacamolem/",
  ];

  const charlieNames = [
    "Cgooch99 Lab Charlie",
    "peytonjunjulas Lab Charlie",
    //AlmostHeaven52 did not have a charlie deployment 
    "CDman814 Lab Charlie",
    //StudentZilla did not have a charlie deployment
    //Frosty9424 did not have a charlie deployment
    "GatorDJ98 Lab Charlie",
    //Natalie-Daniel did not have a charlie deployment
    "lterwilliger Lab Charlie",
    "laurenmalone01 Lab Charlie",
    "errorless-stone Lab Charlie",
    //Akennemer did not have a Lab Charlie deployment 
    //gavinraney did not have a Lab Charlie deployment
    "kobyingram11 Lab Charlie",
    //KhoiUna did not have a Lab Charlie deployment
    "ColinTate24 Lab Charlie",
    //Garner-Jaiden did not have CHarlie deployment
    "jacobsanders7 Lab Charlie"
  ];

  let cLen = charlieLinks.length;
  let text = "<ul>";
  for (let i = 0; i < cLen; i++) {
    text += "<li>" + "<a href = " + charlieLinks[i] + ">" + charlieNames[i] + "<a/>" + "</li>";
  }
  text += "</ul>";
  
  document.getElementById("charlieLinks").innerHTML = text;
  
  //delta arrays 
  const deltaLinks = [
    "https://peytonjunjulas.github.io/lab-Delta/",
    "https://cgooch99.github.io/juicy-fruit/",
    "https://gavinraney.github.io/raney-lab-delta/",
    "https://github.com/kobyingram11/legendary-meme"
  ];

  const deltaNames = [
    "peytonjunjulas Lab Delta",
    "cgooch99 Lab Delta",
    "gavinraney Lab Delta",
    "kobuyingram11 Lab Delta"
  ];

  let dLen = deltaLinks.length;
  let textDelta = "<ul>";
  for (let v = 0; v < dLen; v++) {
    textDelta += "<li>" + "<a href = " + deltaLinks[v] + ">" + deltaNames[v] + "<a/>" + "</li>";
  }
  textDelta += "</ul>";
  
  document.getElementById("deltaLinks").innerHTML = textDelta;

});


