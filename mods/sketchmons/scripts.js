exports.BattleScripts = {
  init: function() {
    for (var i in this.data.Learnsets) {
      this.modData('Learnsets', i).learnset.sketch = ['5E'];
    }
  }
};
