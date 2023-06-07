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
const video = document.getElementById('mainVideo');
const playBtn = document.querySelector('mainVideo > div.playBtn');
const isVideoPlay = () => (video.currentTime > 0 && !video.paused && video.readyState > 2);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

document.getElementById('mainVideo').oncanplaythrough = function () {
  if (!isVideoPlay()) {

    playBtn.style.display = 'flex';

    setTimeout(() => {
      playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        if (!isVideoPlay())
          document.getElementById('mainVideo').play();
        playBtn.removeEventListener('click', null);
      });
    }, 1000);
  }
};

document.getElementById('mainVideo').onended = function () {
  if (!video.hasAttribute('controls')) {
    video.setAttribute('controls', 'controls');
  }
};
