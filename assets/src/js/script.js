let orderType = "pickup";
const deliveryCost = 5;
const deliveryFree = 15;

function init() {
    renderMenus();
    renderDesserts();
    renderDrinks();
    checkingShoppingCart();
}

function renderItems(ContentId, items, getItemToHtml) {
    let contentRef = document.getElementById(ContentId);
    contentRef.innerHTML = "";

    for (let index = 0; index < items.length; index++) {
        contentRef.innerHTML += getItemToHtml(index);
    }
}

function renderMenus() {
    renderItems("sushiContent", mainMenu, getMenuToHtml);
}

function renderDesserts() {
    renderItems("dessertContent", desserts, getDessertToHtml);
}

function renderDrinks() {
    renderItems("drinkContent", drinks, getDrinksToHtml);
}

function renderShoppingcart() {
    let shoppingcartContentRef = document.getElementById("shoppingcartContent");
    shoppingcartContentRef.innerHTML = "";

    for (let indexCart = 0; indexCart < shoppingcart.length; indexCart++) {
        shoppingcartContentRef.innerHTML += getMenuToCartTemplate(indexCart);
    }
    let totalItems = shoppingcart.reduce((sum, item) => sum + item.amount, 0);
    updateCartItemCount(totalItems);
    renderTotalPrice();
}

function checkingShoppingCart() {
    let shoppingcartContentRef = document.getElementById("shoppingcartContent");

    if (shoppingcartContentRef.innerHTML.trim() === "") {
        shoppingcartContentRef.innerHTML = `<div> Dein Warenkorb ist noch leer</div>`;
    }
}

function toggleLike() {
    let likeImage = document.getElementById("likeImg");

    if (likeImage.src.includes("none_like_heart.png")) {
        likeImage.src = "./assets/icon/like_heart.png";
    } else {
        likeImage.src = "./assets/icon/none_like_heart.png";
    }
}
function toggleOrderType() {
    orderType = orderType === "pickup" ? "delivery" : "pickup";
    updateOrderType(orderType);
    updateSlider();
    renderTotalPrice();
}

function renderTotalPrice() {
    let totalPrice = shoppingcart.reduce((acc, item) => acc + item.price, 0);
    if (orderType === "delivery") totalPrice += deliveryCost;
    let formattedPrice = totalPrice.toFixed(2).replace(".", ",");
    document.getElementById("toPay").innerHTML = "Gesamtpreis: " + formattedPrice + "€";
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

function canPlaceOrder() {
    if (shoppingcart.length === 0) {
        showOverlay("Fügen sie erst Produkte in den Warenkorb");
        return false;
    }
    const totalPrice = shoppingcart.reduce((acc, item) => acc + item.price, 0);
    if (orderType === "pickup") {
        showOverlay("Vielen Dank für ihre Bestellung. Sie können ihr Essen in etwa 30 Min. abholen");
    } else if (orderType === "delivery") {
        if (totalPrice < deliveryFree) {
            showOverlay("Der Mindestbestellwert für Lieferungen beträgt 15€ ohne Liefergebühr.");
            return false;
        }
        showOverlay("Vielen Dank für Ihre Bestellung! Wir werden Sie umgehend darüber informieren, wie lange die Lieferzeit beträgt.");
    }
    clearShoppingCart();
    return true;
}

function clearShoppingCart() {
    shoppingcart = [];
    renderShoppingcart();
    renderTotalPrice();
    closeShoppingcard();
}
