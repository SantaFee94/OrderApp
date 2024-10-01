function getMenuToHtml(indexMenu) {
    return `<div class="menu_box">
                            <h3>${mainMenu[indexMenu].name}</h3>
                            <p>${mainMenu[indexMenu].description}</p>
                            <h3>${mainMenu[indexMenu].price.toFixed(2).replace(".", ",")}€</h3>
                            <button onclick="addToCart(${indexMenu})" class="add_to_cart_button">In den Warenkorb</button>
                        </div>`;
}

function getDessertToHtml(indexDessert) {
    return `<div class="menu_box">
                            <h3>${desserts[indexDessert].name}</h3>
                            <p>${desserts[indexDessert].description}</p>
                            <h3>${desserts[indexDessert].price.toFixed(2).replace(".", ",")}€</h3>
                            <button onclick="addToCart(${indexDessert})" class="add_to_cart_button">In den Warenkorb</button>
                        </div>`;
}

function getDrinksToHtml(indexDrink) {
    return `<div class="menu_box">
                                <h3>${drinks[indexDrink].name}</h3>
                                <p>${drinks[indexDrink].description}</p>
                                <h3>${drinks[indexDrink].price.toFixed(2).replace(".", ",")}€</h3>
                                <button onclick="addToCart(${indexDrink})" class="add_to_cart_button">In den Warenkorb</button>
                            </div>`;
}

function getMenuToCartTemplate(indexCart) {
    return `<div class="menu_box_shoppingcart">
                                <h3>${shoppingcart[indexCart].name}</h3>
                                <h3>${shoppingcart[indexCart].price.toFixed(2).replace(".", ",")}€</h3>
                                <h3>${shoppingcart[indexCart].amount}
                                <button onclick="">+</button>
                                <button onclick="">-</button>
                                <button onclick="">Löschen</button>
                            </div>`;
}
