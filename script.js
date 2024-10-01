let orderType = "pickup";

function init() {
    renderMenus();
    renderDesserts();
    renderDrinks();
    checkingShoppingCart()
}

function renderMenus() {
    let menuContentRef = document.getElementById("sushiContent");
    menuContentRef.innerHTML = "";

    for (let indexMenu = 0; indexMenu < mainMenu.length; indexMenu++) {
        menuContentRef.innerHTML += getMenuToHtml(indexMenu);
    }
}

function renderDesserts() {
    let dessertContentRef = document.getElementById("dessertContent");
    dessertContentRef.innerHTML = "";

    for (let indexDessert = 0; indexDessert < desserts.length; indexDessert++) {
        dessertContentRef.innerHTML += getDessertToHtml(indexDessert);
    }
}

function renderDrinks() {
    let drinkContentRef = document.getElementById("drinkContent");
    drinkContentRef.innerHTML = "";

    for (let indexDrink = 0; indexDrink < drinks.length; indexDrink++) {
        drinkContentRef.innerHTML += getDrinksToHtml(indexDrink);
    }
}

function renderShoppingcart() {
    let shoppingcartContentRef = document.getElementById("shoppingcartContent");
    shoppingcartContentRef.innerHTML = "";

    for (let index = 0; index < shoppingcart.length; index++) {
        shoppingcartContentRef.innerHTML += getMenuToCartTemplate(index);
    }
}

function checkingShoppingCart() {
    let shoppingcartContentRef = document.getElementById("shoppingcartContent");

    if (shoppingcartContentRef.innerHTML.trim() === "") {
        shoppingcartContentRef.innerHTML = `<div> Dein Warenkorb ist noch leer :(</div>`;
    }
}












function updateOrderType(type) {
    orderType = type;
    updateSlider();
}

function updateSlider() {
    let pickup = document.getElementById("pickup");
    let delivery = document.getElementById("delivery");
    if (orderType === "delivery") {
        pickup.classList.remove("selected");
        delivery.classList.add("selected");
    } else {
        pickup.classList.add("selected");
        delivery.classList.remove("selected");
    }
}

function toggleOrderType() {
    orderType = orderType === "pickup" ? "delivery" : "pickup";
    updateOrderType(orderType);
}
