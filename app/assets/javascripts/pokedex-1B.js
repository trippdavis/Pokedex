Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var divDetail = $("<form class='detail' data-pokemon-id='" + pokemon.get("id") + "'></form>");
  divDetail.append("<h2>" + pokemon.get("id") + "</h2>");
  divDetail.append("<img src='" + pokemon.get('image_url') + "'>");
  // divDetail.append("<h4>" + pokemon.get('name') + "</h4>");
  // divDetail.append("Type: " + pokemon.get('poke_type') + "<br>");
  // divDetail.append("Attack: " + pokemon.get('attack') + "<br>");
  // divDetail.append("Defense: " + pokemon.get('defense') + "<br>");

  divDetail.append("<input type='text' name='pokemon[name]' value='" + pokemon.get("name") + "'><br>");
  divDetail.append("<input type='text' name='pokemon[type]' value='" + pokemon.get("type") + "'><br>");
  divDetail.append("<input type='number' name='pokemon[attack]' value='" + pokemon.get("attack") + "'><br>");
  divDetail.append("<input type='number' name='pokemon[defense]' value='" + pokemon.get("defense") + "'><br>");
  divDetail.append("<input type='text' name='pokemon[image_url]' value='" + pokemon.get("image_url") + "'><br>");
  divDetail.append("<ul class='moves'></ul>");

  var moves = "";

  $.each(pokemon.get("moves"), function (index, move) {
    moves += "<li><input type='text' name='pokemon[moves][]' value='" + pokemon.get("moves")[index] + "'></li>";
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
  divDetail.append("<button>Update</button>");
  divDetail.append("<ul class='toys'></ul>");

  this.$pokeDetail.html(divDetail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data('id');
  this.renderPokemonDetail(this.pokes.get(id));
};
