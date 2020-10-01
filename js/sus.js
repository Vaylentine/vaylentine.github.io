const WomenExist = true;
let video = document.querySelector("#video");
let source = document.querySelector("#source");
let umad = document.querySelector("#mad");

function Refresh() {
  video.load();
  video.play();
}

function MenSexist() {
  umad.innerHTML = "RPH in a nutshell🤔";
  source.setAttribute("src", "video/incel.mp4");
  Refresh();
}

if (WomenExist === true) {
  setTimeout(MenSexist, 5000);
}
