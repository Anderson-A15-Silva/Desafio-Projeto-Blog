let buttonHamburger = window.document.getElementById('button-hamburger');
let hamburgerMenu = window.document.getElementById('hamburger-menu')
let menuActive = false;

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

function handleButtonClick(event) {
    buttons.forEach((button) => {
        button.classList.remove("botao-selecionado");
    });
    const clickedButton = event.target;
    clickedButton.classList.add("botao-selecionado");
    let selectedTopic = clickedButton.textContent;
    let shopField = window.document.querySelectorAll('#shop-field img');

    if(selectedTopic == 'Random'){
        let imgs = [
            'img-1.png', 
            'img-2.png', 
            'img-3.png', 
            'img-8.png',
            'img-16.png', 
            'img-17.png', 
            'img-1.png', 
            'img-18.png', 
            'img-20.png', 
            'img-21.png', 
            'img-22.png', 
            'img-23.jpg', 
            'img-24.jpg', 
            'img-25.jpg'
        ];
        
        function randomImg() {
            let img1, img2;
        
            do {
                img1 = Math.floor(Math.random() * imgs.length);
                img2 = Math.floor(Math.random() * imgs.length);
            } while (img1 === img2);  
        
            shopField[0].setAttribute('src', `assets/imgs/${imgs[img1]}`);
            shopField[1].setAttribute('src', `assets/imgs/${imgs[img2]}`);
        }
        
        randomImg();
        
    }

    if(selectedTopic == 'Cat'){
        shopField[0].setAttribute('src', 'assets/imgs/img-16.png');
        shopField[1].setAttribute('src', 'assets/imgs/img-17.png');
    }

    if(selectedTopic == 'Dogs'){
        shopField[0].setAttribute('src', 'assets/imgs/img-1.png');
        shopField[1].setAttribute('src', 'assets/imgs/img-21.png');
    }

    if(selectedTopic == 'Fish'){
        shopField[0].setAttribute('src', 'assets/imgs/img-24.jpg');
        shopField[1].setAttribute('src', 'assets/imgs/img-25.jpg');
    }

    if(selectedTopic == 'Birds'){
        shopField[0].setAttribute('src', 'assets/imgs/img-2.png');
        shopField[1].setAttribute('src', 'assets/imgs/img-23.jpg');
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});


document.addEventListener('DOMContentLoaded', function() {

    let imgs = [
        'img-1.png', 
        'img-2.png', 
        'img-3.png', 
        'img-8.png',
        'img-16.png', 
        'img-17.png', 
        'img-1.png', 
        'img-18.png', 
        'img-20.png', 
        'img-21.png', 
        'img-22.png', 
        'img-23.jpg', 
        'img-24.jpg', 
        'img-25.jpg'
    ];

    function preencherImagens() {
        let imagesFromShopField = document.querySelectorAll('#shop-field');

        imagesFromShopField.forEach(image => {

            let randomImage = imgs[Math.floor(Math.random() * imgs.length)];

            image.src = randomImage;
        });
    }

    preencherImagens();
});