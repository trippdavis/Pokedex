Pokedex.RootView.prototype.addToyToList = function (toy) {
  var li = $("<li class='toy' data-toy-id='" + toy.get("id") + "' data-pokemon-id='" + toy.get("pokemon_id") + "'></li>");

  li.append("<h5>Toy: " + toy.get("name") + "</h5>");
  li.append("Happiness: " + toy.get("happiness") + "<br>");
  li.append("Price: " + toy.get("price"));

  this.$pokeDetail.find("ul.toys").append(li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var divDetail = $("<div class='detail'></div>");

  divDetail.append("<img src='" + toy.get('image_url') + "'>");
  divDetail.append("<h4>" + toy.get('name') + "</h4>");
  divDetail.append("Happiness: " + toy.get('happiness') + "<br>");
  divDetail.append("Price: " + toy.get('price') + "<br>");

  var select = $("<select name='toy[pokemon_id]' data-pokemon-id='" + toy.get("pokemon_id") + "' data-toy-id='" + toy.get("id") + "'></select>");

  this.pokes.each(function (pokemon) {
    if (pokemon.get("id") === toy.get("pokemon_id")){
      select.append("<option value='" + pokemon.get("id") + "' selected='selected'>" + pokemon.get("name") + "</option>");
    } else {
      select.append("<option value='" + pokemon.get("id") + "'>" + pokemon.get("name") + "</option>");
    }
  });

  divDetail.append(select);

  this.$toyDetail.html(divDetail);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var pokemon_id = $(event.currentTarget).data("pokemon-id");
  var toy_id = $(event.currentTarget).data("toy-id");
  var toy = this.pokes.get(pokemon_id).toys().get(toy_id);

  this.renderToyDetail(toy);
};
