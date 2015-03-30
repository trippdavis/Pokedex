Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var divDetail = $("<div class='detail'></div>");
  divDetail.append("<img src='" + pokemon.get('image_url') + "'>");
  divDetail.append("<h4>" + pokemon.get('name') + "</h4>");
  divDetail.append("Type: " + pokemon.get('poke_type') + "<br>");
  divDetail.append("Attack: " + pokemon.get('attack') + "<br>");
  divDetail.append("Defense: " + pokemon.get('defense') + "<br>");
  divDetail.append("<ul class='moves'></ul>");
  divDetail.append("<ul class='toys'></ul>");

  var moves = "";

  $.each(pokemon.get("moves"), function (index, move) {
    moves += "<li>" + move + "</li>";
  });

  var that = this;

  pokemon.fetch({
    success: function (poke) {
      that.renderToysList(poke.toys());
    }
  });

  var toysStr = "";

  // $.each(toysArray, function (index, toy) {
  //   toysStr += "<li>" + toy.get("name") + "</li>";
  // });

  divDetail.find("ul.moves").append(moves);
  // divDetail.find("ul.toys").append(toysStr);

  this.$pokeDetail.html(divDetail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data('id');
  this.renderPokemonDetail(this.pokes.get(id));
};
