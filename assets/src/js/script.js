let orderType = "pickup";

function init() {
    renderMenus();
    renderDesserts();
    renderDrinks();
    checkingShoppingCart();
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
    let likeImage = document.getElementById("likeImg")

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
    renderTotalPrice(); // Preis sofort neu berechnen und anzeigen
}

function renderTotalPrice() {
    let totalPriceContentRef = document.getElementById("toPay");
    totalPriceContentRef.innerHTML = "";

    let totalPrice;
    if (shoppingcart.length == 0) {
        totalPrice = 0;
    } else {
        totalPrice = shoppingcart.reduce((acc, current) => acc + current.price, 0);
    }

    // Überprüfen, ob der Bestelltyp "delivery" ist und die Liefergebühr hinzufügen
    if (orderType === "delivery") {
        totalPrice += 5; // 5€ Liefergebühr hinzufügen
    }

    let formattePrice = totalPrice;
    formattePrice = formattePrice.toFixed(2);
    formattePrice = formattePrice.replace(".", ",");
    document.getElementById("toPay").innerHTML = "Gesamtpreis: " + formattePrice + "€";
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
    let totalPriceWithoutDelivery = 0;

    if (shoppingcart.length > 0) {
        totalPriceWithoutDelivery = shoppingcart.reduce((acc, current) => acc + current.price, 0);
    }

    if (shoppingcart.length == 0) {
        alert("Fügen sie erst Produkte in den Warenkorb");
        return false

    }else if (orderType === "pickup") {
        alert("Vielen Dank für ihre Bestellung. Sie können ihr Essen in etwa 30 Min. abholen");
        clearShoppingCart();
        return true;
    } else if (orderType === "delivery" && totalPriceWithoutDelivery < 15) {
        alert("Der Mindestbestellwert für Lieferungen beträgt 15€ ohne Liefergebühr.");
        return false;
    } else if (orderType === "delivery" && totalPriceWithoutDelivery >= 15) {
        alert("Vielen Dank für die Bestellung! Wir werden uns um die Lieferung kümmern.");
        clearShoppingCart();
        return true;
    }

    return true;

    
}

function clearShoppingCart() {
    shoppingcart = [];
    renderShoppingcart();
    renderTotalPrice();
    closeShoppingcard()
}
