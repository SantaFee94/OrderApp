function toggleOverlay(id, display) {
    document.getElementById(id).style.display = display;
}

function openOverlay() {
    document.getElementById("aboutUsOverlay").style.display = "block";
    document.getElementById("reviewsOverlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("aboutUsOverlay").style.display = "none";
    document.getElementById("reviewsOverlay").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function showShoppingCart() {
    document.getElementsByClassName("section_right_side")[0].style.display = "block";
    document.getElementsByClassName("section_left_side")[0].style.display = "none";
    document.getElementsByClassName("shopping_cart")[0].style.display = "block";
}

function closeShoppingcard() {
    document.getElementsByClassName("section_right_side")[0].style.display = "none";
    document.getElementsByClassName("section_left_side")[0].style.display = "block";
    document.getElementsByClassName("shopping_cart")[0].style.display = "block";
}

function showOverlay(message) {
    document.getElementById("overlay-message").innerText = message;
    document.getElementById("overlay").style.display = "flex";
}
