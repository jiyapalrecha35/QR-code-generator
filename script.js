let QRbox = document.getElementById('QRbox')
let QRimg = document.getElementById('QRimg')
let userInput = document.getElementById('userInput')

function QRgenerate() {
    if (userInput.value.length > 0) {
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;

        QRbox.classList.add('show-img')
    }
    else {
        userInput.classList.add('error')
        setTimeout(() => {
            userInput.classList.remove('error')
        }, 1500)
    }

}
