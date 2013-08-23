exports.BattleScripts = {
  init: function() {
    for (var i in this.data.Pokedex) {
      if (this.data.Pokedex.types[0] === 'Water') {
        return this.data.Pokedex.types[0] = 'Grass';
      } else if (this.data.Pokedex.types[1] === 'Water') {
        return this.data.Pokedex.types[1] = 'Grass';
      }
    }
  }
};
