function showPokemon(pokemon) {

    if (pokemon.types[0]==="normal") {
        var color_type = "#EAEAE9";
    }else if (pokemon.types[0]==="water") {
        var color_type = "#BCE8F9";
    }else if (pokemon.types[0]==="electric") {
        var color_type = "#FCFF9F";
    }else if (pokemon.types[0]==="fighting") {
        var color_type = "#FFAEA9";
    }else if (pokemon.types[0]==="ground") {
        var color_type = "#CDCDAC";
    }else if (pokemon.types[0]==="psychic") {
        var color_type = "#FFD4FC";
    }else if (pokemon.types[0]==="rock") {
        var color_type = "#D8E09A";
    }else if (pokemon.types[0]==="dark") {
        var color_type = "#9FA380";
    }else if (pokemon.types[0]==="steel") {
        var color_type = "#E9E9E9";
    }else if (pokemon.types[0]==="fire") {
        var color_type = "#FF9F5D";
    }else if (pokemon.types[0]==="grass") {
        var color_type = "#CAFF9C";
    }else if (pokemon.types[0]==="ice") {
        var color_type = "#95FFFD";
    }else if (pokemon.types[0]==="poison") {
        var color_type = "#D1B8FF";
    }else if (pokemon.types[0]==="flying") {
        var color_type = "#E2FFFF";
    }else if (pokemon.types[0]==="bug") {
        var color_type = "#BDFFB1";
    }else if (pokemon.types[0]==="ghost") {
        var color_type = "#8B91FF";
    }else if (pokemon.types[0]==="dragon") {
        var color_type = "#8E7CBD";
    }else if (pokemon.types[0]==="fairy") {
        var color_type = "#FFE1FE";
    }

var card = document.createElement('div');
card.className = "card col-2 bordes shadow-lg p-3 mb-5 bg-white rounded";
card.onmouseover = function() {mouseOver()};
card.onmouseout = function() {mouseOut()};

var cardContainer = document.getElementById('card-container');
cardContainer.appendChild(card);

var titileCard = document.createElement('div');
titileCard.className = "card-header bg-transparent text-center";
titileCard.innerHTML = pokemon.name;
card.appendChild (titileCard);

var img_pokemon = document.createElement('img');
img_pokemon.className = "card-img-top";
img_pokemon.src = pokemon.art_url;
card.appendChild (img_pokemon);
img_pokemon.onmouseover = function() {mouseOver()};
img_pokemon.onmouseout = function() {mouseOut()};

$(document).ready(function(){
    $(img_pokemon).click(function(){
      $(mymodal).modal();
    });
  });

function mouseOver() {
    card.style.color = color_type;
    card.style.borderColor = color_type;
    img_pokemon.style.backgroundColor = color_type;
}
function mouseOut() {
    card.style.color = "gray";
    card.style.borderColor = "gray";
    img_pokemon.style.backgroundColor = "white";
}


var mymodal = document.createElement('div');
mymodal.className = "modal fade";

var dialog_modal = document.createElement('div');
dialog_modal.className = "modal-dialog";
mymodal.appendChild (dialog_modal);

var content_modal = document.createElement('div');
content_modal.className = "modal-content";
dialog_modal.appendChild (content_modal);

var header_modal = document.createElement('div');
header_modal.className = "modal-header";
content_modal.appendChild (header_modal);

// var close_button = document.createElement('button');
// close_button.className="close";
// header_modal.appendChild(close_button);
// close_button.innerHTML="close";

var title_modal = document.createElement('h5');
title_modal.className = "modal-title";
header_modal.appendChild (title_modal);
title_modal.innerHTML = pokemon.name;

var body_model = document.createElement('div');
body_model.className = "modal-body";
content_modal.appendChild(body_model);
body_model.innerHTML = pokemon.description;

var modal_foot = document.createElement ('div');
modal_foot.className="modal-footer";
content_modal.appendChild(modal_foot);

var button_foot = document.createElement ('img');
button_foot.className = "card-img-top";
button_foot.src = pokemon.art_url;
content_modal.appendChild(button_foot);

// var search_input = document.getElementById ('form_search');
// var searhc_button = document.getElementById ('but_search');
// searhc_button.click = function_search(search_input);


// console.log(mymodal);
//console.log (cardContainer);
//console.log (bdpokemon[3].types[0]);

}

for (var i = 0; i < bdpokemon.length; i++) {
    showPokemon(bdpokemon[i]);
}



