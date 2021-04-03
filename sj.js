function funcNav() {
    var fn = document.getElementById("myTopnav");
    if (fn.className === "topnavbarright") {
      fn.className += "responsive";
    } else {
      fn.className = "topnavbarright";
    }
  }
