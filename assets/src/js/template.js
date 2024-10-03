function getMenuToHtml(indexMenu) {
    return `<div class="menu_box">
                            <h3>${mainMenu[indexMenu].name}</h3>
                            <p>${mainMenu[indexMenu].description}</p>
                            <h3>${mainMenu[indexMenu].price.toFixed(2).replace(".", ",")}€</h3>
                            <button onclick="addToCartMenu(${indexMenu})" class="add_to_cart_button">In den Warenkorb</button>
                        </div>`;
}

function getDessertToHtml(indexDessert) {
    return `<div class="menu_box">
                            <h3>${desserts[indexDessert].name}</h3>
                            <p>${desserts[indexDessert].description}</p>
                            <h3>${desserts[indexDessert].price.toFixed(2).replace(".", ",")}€</h3>
                            <button onclick="addToCartDessert(${indexDessert})" class="add_to_cart_button">In den Warenkorb</button>
                        </div>`;
}

function getDrinksToHtml(indexDrink) {
    return `<div class="menu_box">
                                <h3>${drinks[indexDrink].name}</h3>
                                <p>${drinks[indexDrink].description}</p>
                                <h3>${drinks[indexDrink].price.toFixed(2).replace(".", ",")}€</h3>
                                <button onclick="addToCartDrink(${indexDrink})" class="add_to_cart_button">In den Warenkorb</button>
                            </div>`;
}

function getMenuToCartTemplate(indexCart) {
    return `<div class="menu_box_shoppingcart">
                                <h3>${shoppingcart[indexCart].name}</h3>
                                <h3>${shoppingcart[indexCart].price.toFixed(2).replace(".", ",")}€</h3>
                                <h3>${shoppingcart[indexCart].amount}<br>
                                <button class="shoppingcart_button" onclick="increaseNumberAndPrice(${indexCart})"><img src="./assets/icon/plus.png" alt=""></button>
                                <button class="shoppingcart_button" onclick="reduceNumberAndPrice(${indexCart})"><img src="./assets/icon/minus.png" alt=""></button>
                                <button class="shoppingcart_button" onclick="removeFromCart(${indexCart})"><img src="./assets/icon/trash.png" alt=""></button>
                            </div>`;
}

function getPayPriceToHtml(indexCart) {
    return `<div class="pay_price_box">${shoppingcart[indexCart].toPay}</div>`
    
}