"use strict";



$(document).ready(() => {
let inCart =[];

const productList = [{
    name: "Devil's Kiss",
    category: "vigor",
    description: "Throws flaming projectile",
    price: 10
},
{
    name: "Murder of Crows",
    category: "vigor",
    description: "a flock of crows will descend upon your enemy",
    price: 12
},
{
    name: "Return to Sender",
    category: "vigor",
    description: "reflecting shield",
    price: 10
},
{
    name: "Eletro-Bolt",
    category: "vigor",
    description: "Electrocute a target",
    price: 10
},
{
    name: "Peeping Tom",
    category: "plasmid",
    description: "X-Ray vision",
    price: 10
},
{
    name: "Chameleon",
    category: "plasmid",
    description: "Invisiblity",
    price: 10
},
{
    name: "Glorious Golfish",
    category: "plasmid",
    description: "Underwater breathing",
    price: 10
},
{
    name: "Winter Blast",
    category: "plasmid",
    description: "freezes a target",
    price: 10
},
{
    name: "Telekinesis",
    category: "plasmid",
    description: "move an object",
    price: 10
}
];

const featuredList = [{
    name: "Adam's Posession",
    category: "potion",
    description: "causes a student to be real smart",
    price: 1000
},
{
    name: "Carly's Transportation",
    category: "potion",
    description: "instantly teleport to another location",
    price: 1000
}
];

const pageSetup = () => {
    // this displays vigors/potion items to html
    for (let i=0; i <= 8; i++) {
        $(".flex-container").append(`
        <div class="vigor">
        <img class="add-to-cart" id="${i}" src="images/outline-exposure_plus_1-24px.svg">
        <img class="product-img" src="images/vigor-0${i}.svg">
        <div class="product-info-box">
            <p class="product-text">${productList[i].name}</p>
            <p class="product-text">${productList[i].category}</p>
            <p class="product-text">${productList[i].description}</p>
            <p class="product-text">${productList[i].price}</p>
        </div>
    </div>
    `)
    }
}

const populateCart = () => {
    const emptyCart= $(".cart-items");
    let total = 0;
    emptyCart.html(""); // clears container

    for (let i=0; i < inCart.length; i++) {
        $(".cart-items").prepend(`
        <section class="item-slot">
        <p class="checkout-item">${inCart[i].name} Price: $${inCart[i].price}</p>
        <img class="delete-item" src="images/delete.png">
        </section>
        `)
        total += inCart[i].price;
        $(".subtotal").html("") //clears previous subtotal
        $(".cart-items").after(`<p class="subtotal" >Subtotal: $${total}</p>
        `)
    }
}

$(document).on("click", ".add-to-cart", (event) => {
    let cartItem = $(event.target).attr("id");
    inCart.push(productList[cartItem]);

    populateCart();
});



// click events for show/hiding pop ups
$(document).on("click", ".cart", (event) => {
    $(".cart-container").show();

});

$(document).on("click", ".cart-x, .checkout-x, .payment-x, .reciept-x", (event) => {

    if ($(event.target).hasClass("cart-x")) {
            $(".cart-container").hide();
        } else if ($(event.target).hasClass("checkout-x")) {
            $(".checkout-container").hide();
        } else if ($(event.target).hasClass("payment-x")) {
            $(".payment-container").hide();
        } else if ($(event.target).hasClass("reciept-x")) {
            $(".receipt-container ").hide();
        }       
});

$(document).on("mouseover", ".material-icons, .cart, button, .add-to-cart, .delete-item", (event) => {
    $(event.target).css("cursor", "pointer");

});


    // add html to page to display specials list
    // for (let i=0; i <= 1; i++) {
    //     $(".flex-container").append(`
    //     <div class="vigor" id="vigor ${i}">
    //     <img class="add-to-cart" src="images/outline-exposure_plus_1-24px.svg">
    //     <img class="product-img" src="images/vigor-0${i}.svg">
    //     <div class="product-info-box">
    //         <p class="product-text">${productList[i].name}</p>
    //         <p class="product-text">${productList[i].category}</p>
    //         <p class="product-text">${productList[i].description}</p>
    //         <p class="product-text">${productList[i].price}</p>
    //     </div>
    // </div>
    // `)
    // }
    

pageSetup();


});