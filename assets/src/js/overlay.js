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

function openOverlay() {
    document.getElementById("aboutUsOverlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("aboutUsOverlay").style.display = "none";
}

function openReviewsOverlay() {
    document.getElementById("reviewsOverlay").style.display = "block";
}

function closeReviewsOverlay() {
    document.getElementById("reviewsOverlay").style.display = "none";
}
