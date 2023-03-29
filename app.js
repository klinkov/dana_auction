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

