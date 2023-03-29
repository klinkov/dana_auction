document.addEventListener("DOMContentLoaded", () => {

    let popUp =  document.getElementById('popUp');
    if(document.location.search == '?sacses'){
        popUp.classList.add('block');
    }




      
//     function handleFormSubmit(event) {
//         event.preventDefault()
//         serializeForm(applicantForm)
//     }

//     function serializeForm(formNode) {
//         return new FormData(formNode)
//     }
    
//     async function sendData(data) {
//         return await fetch('/api/apply/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'multipart/form-data' },
//           body: data,
//         })
//     }

//     async function handleFormSubmit(event) {
//         event.preventDefault()
      
//         const data = serializeForm(event.target)
//         const response = await sendData(data)
//     }

//     const applicantForm = document.querySelector('.main-btn-group')
//     if (applicantForm) {
//         applicantForm.addEventListener('submit', handleFormSubmit)
//     }
});


let videoSource = new Array();
videoSource[0] = 'https://dana.auction/intro-video.mp4';
videoSource[1] = 'https://dana.auction/intro-video.mp4';
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