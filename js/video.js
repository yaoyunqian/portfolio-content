// Add js here.
var vid=document.getElementById("videoplayer");
vid.autoplay=false;
vid.loop=false;
vid.load();

function slowDown(){
    if (vid.playbackRate==2) vid.playbackRate=1;
    else if (vid.playbackRate==1) vid.playbackRate=0.5;
    else window.alert("Video is at slowest speed!");
}

function speedUp(){
    if (vid.playbackRate==0.5) vid.playbackRate=1;
    else if (vid.playbackRate==1) vid.playbackRate=2;
    else window.alert("Video is at fastest speed!");
}

function skipAhead(){
    if (vid.currentTime+15<vid.duration) vid.currentTime=vid.currentTime+15;
    else vid.currentTime=0;
}

function muteUnmute(){
    var button=document.getElementById("mute")
    if (vid.muted) {
        vid.muted=false;
        button.innerHTML="Mute";
    }
    else {
        vid.muted=true;
        button.innerHTML="Unmute";
    }
}

function volumeControl(){
    var vol=document.getElementById("slider").value;
    vid.volume=vol*0.01;
    document.getElementById("volume").innerHTML=vol+"%";
}

document.getElementById("play").onclick=function(){vid.play()};
document.getElementById("pause").onclick=function(){vid.pause()};
document.getElementById("slower").onclick=slowDown;
document.getElementById("faster").onclick=speedUp;
document.getElementById("skip").onclick=skipAhead;
document.getElementById("mute").onclick=muteUnmute;
document.getElementById("slider").onclick=volumeControl;