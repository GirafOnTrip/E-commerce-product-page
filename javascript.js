// VARIABLES

const cartOpen        = document.querySelector(".nav__end__cart");
const cartMenu        = document.querySelector(".cart-menu");
const cartNotif       = document.querySelector(".nav__end__notif");
const msgEmpty        = document.querySelector(".cart-menu__txt");
const addCartProduct  = document.querySelector(".cart-menu__content");
const cartCounter     = document.querySelector(".cart-menu__content__active-details-counter");
const cartTotal       = document.querySelector(".cart-menu__content__active-details-total");
const cartBtnDelete   = document.querySelector(".cart-menu__content__active-delete");

const btnPlus         = document.querySelector(".plus");
const btnLess         = document.querySelector(".less");
const itemNumber      = document.querySelector(".product__button__number");
const addCart         = document.querySelector(".product__button__cart");

const heroImg         = document.querySelector(".product__carrousel__hero");
const thumbnail       = document.querySelectorAll(".thumbnail");

const btnNext         = document.querySelector(".next");
const btnPrevious     = document.querySelector(".previous");  

const overlay         = document.querySelector(".overlay");
const productCarrousel= document.querySelector(".product__carrousel");  
const closeOverlay    = document.querySelector(".btnClose"); 

const mobileMenu      = document.querySelector(".mobileNav");  
const mobileMenuOpen  = document.querySelector(".nav__mobile-menu");
const mobileMenuClose = document.querySelector(".mobileNav__close");


let overlayGallery;
let overlayHeroImg; 


// LISTENERS

mobileMenuOpen.addEventListener("click", openMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);

btnLess.addEventListener("click", less);
btnPlus.addEventListener("click", plus);

cartOpen.addEventListener("click", openCart);
addCart.addEventListener("click", updateCart);
cartBtnDelete.addEventListener("click", cartDelete);

heroImg.addEventListener("click", onHeroImgClick);
closeOverlay.addEventListener("click", closeLightbox);

btnNext.addEventListener('click', btnClickNext);
btnPrevious.addEventListener('click', btnClickPrevious);

thumbnail.forEach(img => {

    img.addEventListener('click', onThumbClick);

})


// FUNCTIONS 

function openCart(){

    cartMenu.classList.toggle("active");
}

function onThumbClick(event){
 
    heroImg.src = event.target.src;
}

function btnClickNext(){
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4){
        imageIndex = 1;
    }

    setHeroImage(imageIndex);
} 

function btnClickPrevious(){

    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1){
        imageIndex = 4;
    }

    setHeroImage(imageIndex);
}

function getCurrentImageIndex() {

    const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-',''));
    return imageIndex;
}

function setHeroImage(imageIndex){

    heroImg.src = `./images/image-product-${imageIndex}.jpg`;    
}

function less(){
    
    if(itemNumber.value > 0){
        itemNumber.value--;
    }
}

function plus(){
    
    if(itemNumber.value < 5){
        
        itemNumber.value++;
    }
}


function updateCart(){

    if(itemNumber.value > 0){

        msgEmpty.classList.add('hidden');
        addCartProduct.classList.remove('hidden');
        cartNotif.style.visibility = "visible";
        cartNotif.textContent = `${itemNumber.value}`;
        cartCounter.textContent = `${itemNumber.value}`;
        cartTotal.textContent = `$ ${125 * itemNumber.value}.00`;
        
        } else{
    
            msgEmpty.classList.remove('hidden')
            addCartProduct.classList.add('hidden');
            cartNotif.style.visibility = "hidden";
            cartCounter.textContent = `${itemNumber.value}`;
        }
}

function cartDelete(){

    msgEmpty.classList.remove('hidden')
    addCartProduct.classList.add('hidden');
    cartNotif.style.visibility = "hidden";
}

function onHeroImgClick(){

    if(window.innerWidth >= 1200) {

        if(overlay.childElementCount == 1) {

            const newNode = productCarrousel.cloneNode(true);
            overlay.appendChild(newNode);

            thumbnailGallery = overlay.querySelectorAll(".thumbnail");
            overlayHeroImg   = overlay.querySelector(".product__carrousel__hero");
    
            thumbnailGallery.forEach(img => {
                img.addEventListener('click', onThumbClickOverlay);
            });

            const btnOverlayNext        = overlay.querySelector(".next");
            const btnOverlayPrevious    = overlay.querySelector(".previous");
            btnOverlayNext.addEventListener('click', btnClickNextOverlay);
            btnOverlayPrevious.addEventListener('click', btnClickPreviousOverlay);
        }

        overlay.classList.remove('hidden');
    }
}

function closeLightbox(){

    overlay.classList.add('hidden'); 
}

function onThumbClickOverlay(event){
 
    overlayHeroImg.src = event.target.src;
}

function btnClickNextOverlay(){
    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4){
        imageIndex = 1;
    }

    setOverlayHeroImage(imageIndex);
} 

function btnClickPreviousOverlay(){

    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1){
        imageIndex = 4;
    }

    setOverlayHeroImage(imageIndex);
}

function getOverlayCurrentImageIndex() {

    const imageIndex = parseInt(overlayHeroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-',''));
    return imageIndex;
}

function setOverlayHeroImage(imageIndex){

    overlayHeroImg.src = `./images/image-product-${imageIndex}.jpg`;    
}

// MOBILE / TABLET MINI FUNCTION

function openMobileMenu(){

    mobileMenu.classList.remove('hidden'); 
};

function closeMobileMenu(){

    mobileMenu.classList.add('hidden');
}













