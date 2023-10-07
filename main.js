
var nightMode = document.getElementById('nightmode');
var slider = document.querySelector('.slider')
var nightText = document.getElementById('night-text')
var wrapper = document.querySelector('.wrapper');
var title = document.querySelector('.title');
var textsWrapper = document.querySelector('.texts-wrapper');
var bankCode = document.querySelector('.bank-list');

document.body.style.backgroundColor = 'rgb(255, 255, 255)';

function changeColor() {
    var body = document.body;
    var currentColor = getComputedStyle(body).backgroundColor;
    if (currentColor === 'rgb(255, 255, 255)') {
        body.style.background = "#212121"
        body.style.transition = '0.5s'
        slider.style.background = '#4edf00 '
        nightText.style.color = '#fff'
        wrapper.style.background = '#343434'
        wrapper.style.border = '5px solid #6e6e6e'
        textsWrapper.style.border = '5px solid #6e6e6e'
        title.style.color = 'white'
        textsWrapper.style.background = "#343434"
        textsWrapper.style.transition = '0.5s'
        bankCode.style.color = 'white'
    } else {
        body.style.background = "#fff"
        body.style.transition = '0.5s'
        slider.style.background = '#ccc'
        nightText.style.color = '#000'
        wrapper.style.background = '#e3e3e3'
        wrapper.style.border = '5px solid gray'
        textsWrapper.style.border = '5px solid gray'
        title.style.color = 'black'
        textsWrapper.style.background = "#e3e3e3"
        bankCode.style.color = "black"
    }
}

nightMode.addEventListener('click', changeColor);

var hideBtn = document.querySelector('.hidebutton');
var flipCard = document.querySelector('.flip-card-inner');
var isRotated = false;

hideBtn.addEventListener('click', function () {
    if (!isRotated) {
        flipCard.style.transform = "rotateY(180deg)";
        isRotated = true;
        hideBtn.style.background = '#c84040'
        hideBtn.innerText = 'Show'
        hideBtn.style.transition = '0.5s'
        hideBtn.style.border = 'solid red'
    } else {
        flipCard.style.transform = "rotateY(0deg)";
        isRotated = false;
        hideBtn.style.background = ''
        hideBtn.innerText = 'Hide'
        hideBtn.style.transition = '0.5s'
        hideBtn.style.border = 'solid green'
    }
});

function updateCardInfo() {

    var cardNumber = document.querySelector('.number').value;
    var cardNumbers = document.querySelector('.number');
    var cardLogo = document.querySelector('.logo');
    var cardName = document.querySelector('.heading_8264');
    var userName = document.querySelector('.name');
    var card = document.getElementById('card')
    var valid = document.querySelector('.date_8264');
    var back = document.querySelector('.flip-card-back');

    if (cardNumber === "5477" || cardNumber === "5400" || cardNumber === "5500") {
        var first = document.getElementById("first");
        first.style.display = 'block';
        card.style.background = "black"
        back.style.background = "black"
        var card = document.getElementById('card').style.transition = "background-color 1s"
        var second = document.getElementById("second");
        second.style.display = "none"
        var third = document.getElementById("third");
        third.style.display = "none"
    } else if (cardNumber === "8600") {
        var first = document.getElementById("first");
        first.style.display = 'none';
        var second = document.getElementById("second");
        second.style.display = "block"
        card.style.background = "#0d53a0"
        back.style.background = "#0d53a0"
        var card = document.getElementById('card').style.transition = "background-color 1s"
        var third = document.getElementById("third");
        third.style.display = "none"
    } else if (cardNumber === '9860') {
        var first = document.getElementById("first");
        first.style.display = 'none';
        var second = document.getElementById("second");
        second.style.display = "none"
        var third = document.getElementById("third");
        third.style.display = "block"
        card.style.background = "#006511"
        back.style.background = "#006511"
        var card = document.getElementById('card').style.transition = "background-color 1s"
    } else if (cardNumber === "") {
        var first = document.getElementById("first");
        first.style.display = "none";
        var second = document.getElementById("second");
        second.style.display = "none";
        var third = document.getElementById("third");
        third.style.display = "none";
        card.style.background = "gray"
        back.style.background = "gray"
    } else {
        cardName.textContent = "**Error**"
        userName.innerText = "XXXXX XXXXXX"
        back.style.background = "#171717"
    }

    if (cardNumber.endsWith("1650")) {
        cardName.textContent = "Kapital Bank"
        userName.innerText = "Bruce Wayne";
        valid.innerText = "09 / 28"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber.endsWith("2742")) {
        cardName.textContent = "NBU";
        userName.innerText = "Odil Do'smurodov"
        valid.innerText = "05 / 24"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber.endsWith("3572")) {
        cardName.textContent = "TBC";
        userName.innerText = "Odil Do'smurodov"
        valid.innerText = "10 / 25"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber.endsWith("1660")) {
        cardName.textContent = "OFB";
        userName.innerText = "Odil Do'smurodov"
        valid.innerText = "09 / 26"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber.endsWith("7532")) {
        cardName.textContent = "SQB";
        userName.innerText = "Odil Do'smurodov"
        valid.innerText = "03 / 27"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber.endsWith("3300")) {
        cardName.textContent = "ANORBANK";
        userName.innerText = "Mirakbarov Mirkamol"
        valid.innerText = "10 / 28"
        cardNumbers.style.border = "1.5px solid #02b90b";
    } else if (cardNumber === "") {
        cardNumbers.style.border = "none";
        valid.innerText = "XX / XX"
        cardName.innerText = "Bank Name"
    } else {
        cardName.textContent = "**Error**";
        userName.innerText = "";
        cardNumbers.style.border = "1.5px solid #b00000";
    }
}