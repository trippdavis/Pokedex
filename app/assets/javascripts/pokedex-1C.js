Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon();
  pokemon.save(attrs, {
    success: function(model){
      this.pokes.add(model);
      this.addPokemonToList(model);
      callback(model);
    }.bind(this),
    error: function(model){

    }
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  this.createPokemon($(event.currentTarget).parent().serializeJSON(), this.renderPokemonDetail.bind(this));
};
