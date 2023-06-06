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

document.getElementById('mainVideo').oncanplaythrough = function () {
  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

//   if (!isSafari) {
    setTimeout(() => {
      document.addEventListener('click', () => {
        let video = document.getElementById('mainVideo');
        if (!(video.currentTime > 0 && !video.paused && video.readyState > 2))
          document.getElementById('mainVideo').play();
        document.removeEventListener('click', null);
      });
    }, 500);
//   }
};

document.getElementById('mainVideo').onended = function () {
//   if (!isSafari) {
    function toggleControls() {
      if (video.hasAttribute('controls')) {
        video.removeAttribute('controls');
      } else {
        video.setAttribute('controls', 'controls');
      }
    }
    var video = document.getElementById('mainVideo');
    if (!video.hasAttribute('controls')) {
      video.setAttribute('controls', 'controls');
    }
//   }
};
