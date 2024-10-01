let shoppingcart = [];

function addToCart(indexMenu) {
    let menuName = mainMenu[indexMenu].name;
    let menuPrice = mainMenu[indexMenu].price;
    let menuAmount = mainMenu[indexMenu].amount;

    let found = false;
    for (let i = 0; i < shoppingcart.length; i++) {
        if (shoppingcart[i].name === menuName) {
            shoppingcart[i].amount++;
            shoppingcart[i].price += menuPrice;
            found = true;
            break;
        }
    }

    if (!found) {
        menuAmount = 1;

        shoppingcart.push({ name: menuName, price: menuPrice, amount: menuAmount });
    }
    renderShoppingcart();
}
