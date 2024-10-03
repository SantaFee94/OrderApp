let shoppingcart = [];

function addToCart(item) {
    let itemName = item.name;
    let itemPrice = item.price;

    let found = false;
    for (let i = 0; i < shoppingcart.length; i++) {
        if (shoppingcart[i].name === itemName) {
            shoppingcart[i].amount++;
            shoppingcart[i].price += itemPrice;
            found = true;
            break;
        }
    }
    if (!found) {
        shoppingcart.push({ name: itemName, price: itemPrice, amount: 1 });
    }
    renderShoppingcart();
}

function addToCartMenu(indexMenu) {
    addToCart(mainMenu[indexMenu], "mainMenu");
}

function addToCartDessert(indexDessert) {
    addToCart(desserts[indexDessert], "desserts");
}

function addToCartDrink(indexDrink) {
    addToCart(drinks[indexDrink], "drinks");
}

function increaseNumberAndPrice(indexCart) {
    if (indexCart >= 0 && indexCart < shoppingcart.length) {
        let cartItem = shoppingcart[indexCart];
        cartItem.amount++;
        let unitPrice = getItemPrice(cartItem.name);
        cartItem.price += unitPrice;
    }
    renderShoppingcart();
}

function reduceNumberAndPrice(indexCart) {
    if (indexCart >= 0 && indexCart < shoppingcart.length) {
        let cartItem = shoppingcart[indexCart];
        if (cartItem.amount <= 1) {
            removeFromCart(indexCart);
        } else {
            cartItem.amount--;
            let unitPrice = getItemPrice(cartItem.name);
            cartItem.price -= unitPrice;
        }
    }
    renderShoppingcart();
}

function removeFromCart(indexCart) {
    if (indexCart >= 0 && indexCart < shoppingcart.length) {
        shoppingcart.splice(indexCart, 1);
    }
    renderShoppingcart();
}

function getItemPrice(itemName) {
    let item = mainMenu.find((item) => item.name === itemName) || desserts.find((item) => item.name === itemName) || drinks.find((item) => item.name === itemName);
    return item ? item.price : 0;
}

function updateCartItemCount(count) {
    const cartItemCountElement = document.getElementById('cartItemCount');
    cartItemCountElement.textContent = count;
}
