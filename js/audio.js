let spotify = document.querySelector(".spotify")

let unmute = document.querySelector(".btn-unmute")

let superhotfire = document.querySelector("#superhotfire")

let currentsong =  spotify.childNodes[1].src


function mutefunction(){
    superhotfire.src = "about:blank"
    spotify.childNodes[1].src = "about:blank"
    if (unmute.style.display === "none") {
      unmute.style.display = "block";
    } else {
      unmute.style.display = "none";
      setCookie("Sound","Muted", 365)
    }
  } 
function unmutefunction(){
    superhotfire.src = "audio/fire.mp3"
    spotify.childNodes[1].src = currentsong
    if (unmute.style.display === "block") {
      unmute.style.display = "none";
    } else {
      unmute.style.display = "block";
      setCookie("Sound","Unmuted", 365)
    }
  } 

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
  var soundcheck = getCookie("Sound");
  if (soundcheck == "Muted") {
  mutefunction()
  } else {
    unmutefunction()
    if (soundcheck != "" && soundcheck != null) {
      setCookie("Sound", "Unmuted", 365);
    }
  }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

checkCookie()