// Add js here.
var video=document.getElementById("videoplayer");
video.autoplay=false;
video.loop=false;
video.load();

var progress = document.getElementById("progress");
var timer = document.getElementById("timer");
var button = document.getElementById("play");

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / video.duration) * 100);
    timer.innerHTML = Math.round(video.currentTime) + " s";
  });
}

function playPause() {
  if (video.paused) {
    video.play();
    button.innerHTML = "&#10073;&#10073;";
  } else {
    video.pause();
    button.innerHTML = "►";
  }
}

button.addEventListener("click", playPause);
video.addEventListener("play", progressLoop);
