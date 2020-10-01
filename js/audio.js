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
    }
  } 
function unmutefunction(){
    superhotfire.src = "audio/fire.mp3"
    spotify.childNodes[1].src = currentsong
    if (unmute.style.display === "block") {
      unmute.style.display = "none";
    } else {
      unmute.style.display = "block";
    }
  } 

