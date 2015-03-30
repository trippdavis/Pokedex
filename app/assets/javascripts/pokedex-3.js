Pokedex.RootView.prototype.reassignToy = function (event) {
  // console.log($(event.currentTarget).data("pokemon-id"));
  // console.log($(event.currentTarget).data("toy-id"));
  // console.log($(event.currentTarget).val());
  var pokedex = this;
  var oldPokemon = this.pokes.get($(event.currentTarget).data("pokemon-id"));
  var toy = oldPokemon.toys().get($(event.currentTarget).data("toy-id"));
  toy.set("pokemon_id", $(event.currentTarget).val());
  toy.save({}, {
    success: function () {
      oldPokemon.toys().remove(toy);
      pokedex.renderToysList(oldPokemon.toys());
      pokedex.$toyDetail.empty();
    }
  });
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
  var toyList = this.$pokeDetail.find(".toys")
  toyList.empty();

  toys.each(function (toy) {
    this.addToyToList(toy);
  }.bind(this));

};
