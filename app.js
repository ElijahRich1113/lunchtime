//console.log("Was good B")
var image = document.getElementById("image");
var text = document.getElementById("words");
var button = document.getElementById("button");


var lunch1 = {
    imagesrc: "https://quagliata.files.wordpress.com/2013/06/hawaiian-pizza-recipe.jpg",
    name: "Hawaiian Pizza",
    adjective: "Round",
    verb: "Surfing"
};

var lunch2 = {
    imagesrc: "https://images-gmi-pmc.edge-generalmills.com/c9a2b6a5-60cc-4c4e-b456-f7f6f5a0ce04.jpg",
    name: "Cheeseburger",
    adjective: "Juicy",
    verb: "Flipping"
};

var lunch3 = {
    imagesrc: "http://areachops.com/wp-content/uploads/2017/10/hot-dog.jpg",
    name: "Hotdog",
    adjective: "Steaming",
    verb: "Rolling"
};

var lunch4 = {
    imagesrc: "http://www.audion.com/system/public/categories/125/images/.thumb1_bread-sandwich.jpg",
    name: "Sandwich",
    adjective: "Foot Long",
    verb: "Toasting"
};

var lunch5 = {
    imagesrc: "https://media2.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
    name: "Tacos",
    adjective: "Crunchy",
    verb: "Dancing"
};

var lunchOptions = [lunch1, lunch2, lunch3, lunch4, lunch5];

button.addEventListener("click", function(){
    var random = Math.round(((Math.random() * 4)))
    console.log(random);
    text.innerHTML = lunchOptions[random].adjective+lunchOptions[random].verb+lunchOptions[random].name
    image.src = lunchOptions[random].imagesrc;
})