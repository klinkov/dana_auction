document.addEventListener('DOMContentLoaded', () => {
  let popUp = document.getElementById('popUp');
  // let closeBtn = document.getElementById('closeBtn');

  if (document.location.search == '?success') {
    popUp.classList.add('block');
  }

  function hiddenPopUp() {
    popUp.classList.remove('block');
  }

  setTimeout(hiddenPopUp, 3000);
});

// Fix video issue
let video = document.getElementById('mainVideo');
const isVideoPlay = () => (video.currentTime > 0 && !video.paused && video.readyState > 2);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


document.getElementById('mainVideo').oncanplaythrough = function () {
  console.log(!isSafari, !isVideoPlay(), !isSafari || !isVideoPlay());
  if (!isSafari && !isVideoPlay()) {

    document.querySelector('mainVideo > div.playBtn').style.display = 'flex';

    setTimeout(() => {
      document.addEventListener('click', () => {
        document.querySelector('mainVideo > div.playBtn').style.display = 'none';
        if (!isVideoPlay())
          document.getElementById('mainVideo').play();
        document.removeEventListener('click', null);
      });
    }, 1000);
  }
};

document.getElementById('mainVideo').onended = function () {
  if (!video.hasAttribute('controls')) {
    video.setAttribute('controls', 'controls');
  }
};
