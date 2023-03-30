document.addEventListener("DOMContentLoaded", () => {

    let popUp =  document.getElementById('popUp');
    if(document.location.search == '?sacses'){
        popUp.classList.add('block');
    }
});


let videoSource = new Array();
videoSource[0] = 'https://dana.auction/mov/AndriiPavlov_CDM_014.mp4';
videoSource[1] = 'https://dana.auction/mov/AndriiPavlov_PS_040_1.mp4';
videoSource[2] = 'https://dana.auction/mov/AndriiPavlov_S6_007.mp4';
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");

function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}
document.getElementById('videoPlayer').addEventListener('ended', myHandler, false);

videoPlay(0); // load the first video
ensureVideoPlays(); // play the video automatically

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}

function ensureVideoPlays() {
    const video = document.getElementById('videoPlayer');

    if(!video) return;

    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}