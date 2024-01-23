window.onload = function() {
    var applicantName = prompt("Please enter your first name", "");
    if (applicantName !=null && applicantName != "") {
      alert("Welcome to my portfolio, " + applicantName);
    } else {
      alert("Well, okey then :/");
    }
  }

  function myFunction(element, clr) {
    element.style.color = clr;
}

  
document.getElementById("div").addEventListener("mouseover", function() {
    document.getElementById("div").style.backgroundColor = "#ffff";
});
    
document.getElementById("div").addEventListener("mouseout", function() {
    document.getElementById("div").style.backgroundColor = "#003c1837";
});


document.getElementById("myintro").addEventListener("mouseover", function() {
    document.getElementById("myintro").style.backgroundColor = "#ffff";
});
    
document.getElementById("myintro").addEventListener("mouseout", function() {
    document.getElementById("myintro").style.backgroundColor = "#c7bcad";
});