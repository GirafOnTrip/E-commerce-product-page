// VARIABLES

let cartBtn     = document.querySelector(".nav__end__cart");
let cartMenu    = document.querySelector(".cart-menu");
let cartNotif   = document.querySelector(".nav__end__notif");
let btnPlus     = document.querySelector(".plus");
let btnLess     = document.querySelector(".less");
let itemNumber  = document.querySelector(".product__button__number");
let addCart     = document.querySelector(".product__button__cart");

// LISTENERS

cartBtn.addEventListener("click", function(){

    cartMenu.classList.toggle("active");
});

btnLess.addEventListener("click", function(){
     
        if(itemNumber.value > 0){
            itemNumber.value--;
        }
});

btnPlus.addEventListener("click", function(){

        if(itemNumber.value < 5){
            
            itemNumber.value++;
        }
});

addCart.addEventListener("click", addCartNotif);



// FUNCTIONS 

function addCartNotif(){

    if(itemNumber.value > 0){

    cartNotif.style.visibility = "visible";
    cartNotif.textContent = `${itemNumber.value}`



    } else{

        cartNotif.style.visibility = "hidden";
    }
};





