Pokedex.RootView.prototype.updatePokemon = function (event) {
  event.preventDefault();
  var $form = $(event.currentTarget).parent();
  var attrs = $form.serializeJSON();
  var id = $form.data("pokemon-id");

  var pokemon = this.pokes.get(id);
  pokemon.save(attrs, {
    success: function(model){
      this.renderPokemonDetail.bind(this)(model);
    }.bind(this),
    error: function(model){

    }
  });

};

Pokedex.RootView.prototype.updateToy = function (event) {
  event.preventDefault();
  $(event.currentTarget).parent().serializeJSON();
};
