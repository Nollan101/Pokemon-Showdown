exports.BattleScripts = {
    init: function() {
        for (var i in this.data.Pokedex) {
            if (this.data.Pokedex[i].types[0] === 'Water') {
                this.modData('Pokedex', i).types[0] = 'Grass';
            } else if (this.data.Pokedex[i].types[1] === 'Water') {
                this.modData('Pokedex', i).types[1] = 'Grass';
            }
            for (var x in this.data.Learnsets) {
                if (this.data.Learnsets[x].waterfall && this.modData('Pokedex', i).types[0] === 'Grass' && x === i || this.data.Learnsets[x].waterfall && this.modData('Pokedex', i).types[1] === 'Grass' && x === i) {
                    this.modData('Learnsets', x).seedbomb = ['5L0'];
                }
            }
        }
    }
};
