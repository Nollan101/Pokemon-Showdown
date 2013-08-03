function clampIntRange(num, min, max) {
	num = Math.floor(num);
	if (num < min) num = min;
	if (typeof max !== 'undefined' && num > max) num = max;
	return num;
}
exports.BattleStatuses = {
  hail: {
  	inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (pokemon.hasType('Ice')) {
				stats.def *= 3/2;
			}
		}
	},
   lockedmove: {
	inherit: true,
	durationCallback: function() {
		return 3;
	}
   },
   tox: {
	effectType: 'Status',
	onStart: function(target) {
		this.add('-status', target, 'tox');
		this.effectData.stage = 0;
	},
	onSwitchIn: function() {
		this.effectData.stage = 0;
	},
	onResidualOrder: 9,
	onResidual: function(pokemon, effect) {
		if (this.effectData.stage < 15) {
			this.effectData.stage++;
		}
		if (effect && effectType === 'Weather' && this.effectData.stage >= 4) {
			return this.effectData.stage = 4;
		}
		this.damage(clampIntRange(pokemon.maxhp/16, 1)*this.effectData.stage);
	}
   },
   poisonfog: {
   	effectType: 'Weather',
	duration: 5,
	onBasePower: function(basePower, attacker, defender, move) {
		if (move.type === 'Poison') {
			this.debug('Poison Boost');
			return basePower * 1.5;
		}
	},
	onStart: function(battle, source, effect) {
		if (effect && effect.effectType === 'Ability') {
			this.effectData.duration = 0;
			this.add('-weather', 'PoisonFog', '[from] ability: '+effect, '[of] '+source);
		} else {
			this.add('-weather', 'PoisonFog');
		}
	},
	onResidualOrder: 1,
	onResidual: function() {
		this.add('-weather', 'PoisonFog', '[upkeep]');
		this.eachEvent('Weather');
	},
	onWeather: function(pokemon) {
		pokemon.trySetStatus('tox');
	},
	onEnd: function() {
		this.add('-weather', 'none');
	}
   }	
};
