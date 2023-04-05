document.addEventListener("DOMContentLoaded", () => {

    let popUp =  document.getElementById('popUp');
    let closeBtn = document.getElementById('closeBtn');

    if(document.location.search == '?sacses'){
        popUp.classList.add('block');
    }

    function hiddenPopUp () {
        popUp.classList.remove('block')
    }

    setTimeout(hiddenPopUp, 3000)
});

