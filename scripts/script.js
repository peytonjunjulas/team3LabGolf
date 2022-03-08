function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const games = [
  {
    title: " ",
    link: " ", 
    author: "Koby Ingram"
  },
  {
    title: "hOw Much woW you hAs?",
    link: "https://cgooch99.github.io/charliecode/",
    author: "Cameron Gooch"
    },
  {
    title: "awesome little name facts :)",
    link: "https://gavinraney.github.io/raney-lab-delta/", 
    author: "Gavin Raney"
  }
];

$.each(games, function (index, item) {
  console.log("title: " + item.title);
  console.log("link: " + item.link);
  console.log("creator: " + item.author);

});
