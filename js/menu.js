function changeStyle(){
    var element = document.getElementById("nav");
    var nav = document.getElementById("navnav");
    if (element.style.height == '160px') {
      element.style.height = "0px";
      element.style.backgroundColor = "rgba(255,255,255,0.7)"
      nav.style.backgroundColor = "rgba(255,255,255,0.7)"
    }
    else if (element.style.height == '0px') {
      element.style.height = "160px";
      element.style.backgroundColor = "rgba(255,255,255,1)"
      nav.style.backgroundColor = "rgba(255,255,255,1)"
    }
  }