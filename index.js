let buttonHamburger = window.document.getElementById('button-hamburger');
let hamburgerMenu = window.document.getElementById('hamburger-menu')
let menuActive = false;

let shopField = window.document.querySelectorAll('#shop-field > div');

let firstPrice = window.document.getElementById('first-price');
let firstTitle = window.document.getElementById('first-title');

let secondPrice = window.document.getElementById('second-price');
let secondTitle = window.document.getElementById('second-title');

let items = [
    {img: 'img-1.png', price: 15, title: 'Dog Food'}, 
    {img: 'img-2.png', price: 15, title: 'Bird Water'},
    {img: 'img-3.png', price: 20, title: 'Dog Food'},
    {img: 'img-8.png', price: 20, title: 'Cat Food'},
    {img: 'img-16.png', price: 15, title: 'Cat Food'},
    {img: 'img-17.png', price: 20, title: 'Cat Food'},
    {img: 'img-18.png', price: 15, title: 'Dog Water'},
    {img: 'img-20.png', price: 15, title: 'Dog Water'},
    {img: 'img-21.png', price: 10, title: 'Dog Water'},
    {img: 'img-22.png', price: 10, title: 'Dog Water'},
    {img: 'img-23.jpg', price: 20, title: 'Bird Food'},
    {img: 'img-24.jpg', price: 25, title: 'Fish Food'},
    {img: 'img-25.jpg', price: 25, title: 'Fish Food'}
];

buttonHamburger?.addEventListener("click", () => {
    menuActive = !menuActive;
    if (hamburgerMenu && menuActive == true){
        hamburgerMenu.style.display = 'flex';
        hamburgerMenu.style.flexDirection = 'column';
    } else {
        hamburgerMenu.style.display = 'none';
    }
})

let buttons = window.document.querySelectorAll('#shop-button button');

function randomImg() {
    let product1, product2;

    do {
        product1 = Math.floor(Math.random() * items.length);
        product2 = Math.floor(Math.random() * items.length);
    } while (product1 === product2);  

    shopField[0].style.backgroundImage = `url('assets/imgs/${items[product1].img}')`;
    shopField[1].style.backgroundImage = `url('assets/imgs/${items[product2].img}')`;

    firstTitle.innerHTML = items[product1].title;
    firstPrice.innerHTML = `₦ ${items[product1].price},00`;

    secondTitle.innerHTML = items[product2].title;
    secondPrice.innerHTML = `₦ ${items[product2].price},00`;
}

function handleButtonClick(event) {
    buttons.forEach((button) => {
        button.classList.remove("botao-selecionado");
    });
    const clickedButton = event.target;
    clickedButton.classList.add("botao-selecionado");
    let selectedTopic = clickedButton.textContent;

    if(selectedTopic == 'Random'){ 
        randomImg();  
    }

    if(selectedTopic == 'Cat'){
        shopField[0].style.backgroundImage = "url('assets/imgs/img-16.png')";
        shopField[1].style.backgroundImage = "url('assets/imgs/img-17.png')";

        firstTitle.innerHTML = 'Cat Food';
        firstPrice.innerHTML = '₦ 15.00'

        secondTitle.innerHTML = 'Cat Food';
        secondPrice.innerHTML = '₦ 20.00'
    }

    if(selectedTopic == 'Dogs'){
        shopField[0].style.backgroundImage = "url('assets/imgs/img-1.png')";
        shopField[1].style.backgroundImage = "url('assets/imgs/img-21.png')";

        firstTitle.innerHTML = 'Dog Food';
        firstPrice.innerHTML = '₦ 15.00'

        secondTitle.innerHTML = 'Dog Water';
        secondPrice.innerHTML = '₦ 10.00'
    }

    if(selectedTopic == 'Fish'){
        shopField[0].style.backgroundImage = "url('assets/imgs/img-24.jpg')";
        shopField[1].style.backgroundImage = "url('assets/imgs/img-25.jpg')";

        firstTitle.innerHTML = 'Fish Food';
        firstPrice.innerHTML = '₦ 25.00'

        secondTitle.innerHTML = 'Fish Food';
        secondPrice.innerHTML = '₦ 25.00'
    }

    if(selectedTopic == 'Birds'){
        shopField[0].style.backgroundImage = "url('assets/imgs/img-2.png')";
        shopField[1].style.backgroundImage = "url('assets/imgs/img-23.jpg')";

        firstTitle.innerHTML = 'Bird Water';
        firstPrice.innerHTML = '₦ 15.00'

        secondTitle.innerHTML = 'Bird Food';
        secondPrice.innerHTML = '₦ 20.00'
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});


document.addEventListener('DOMContentLoaded', function() {
    randomImg();
});


let firstValue = window.document.getElementById('first-value');
let secondValue = window.document.getElementById('second-value');

function modificarValor(item, metodo){
    if (item == 'first'){
        if (metodo == 'add'){
            firstValue.innerHTML = parseInt(firstValue.innerHTML) + 1;
        }
        if (metodo == 'sub' && firstValue.innerHTML != 0){
            firstValue.innerHTML = parseInt(firstValue.innerHTML) - 1;
        }
    }

    if (item == 'second'){
        if (metodo == 'add'){
            secondValue.innerHTML = parseInt(secondValue.innerHTML) + 1;
        }
        if (metodo == 'sub' && secondValue.innerHTML != 0){
            secondValue.innerHTML = parseInt(secondValue.innerHTML) - 1;
        }
    }
}