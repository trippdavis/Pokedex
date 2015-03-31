Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  this.$pokeList.append("<li class='poke-list-item' data-id='" + pokemon.get("id") + "'>" + pokemon.get("name") + ": " + pokemon.get("poke_type") + "</li>")
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    data: {
      sort_by: "id"
    },
    success: function (){
      this.pokes.each(function (pokemon) {
        this.addPokemonToList(pokemon);
      }.bind(this))
    }.bind(this)
  });
};
