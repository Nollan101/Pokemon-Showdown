exports.BattleMovedex = {
  "paleowave": {
    accuracy: 100,
    basePower: 85,
    category: "Special",
    desc: "Deals damage to one adjacent target with a 20% chance to lower its Attack by 1 stage.",
    shortDesc: "20% chance to lower the target's Attack by 1.",
    id: "paleowave",
    isNonstandard: false,
    isViable: true,
    name: "Paleo Wave",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 20,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Rock"
  },
  "shadowstrike": {
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    desc: "Deals damage to one adjacent target with a 50% chance to lower its Defense by 1 stage. Makes contact.",
    shortDesc: "50% chance to lower the target's Defense by 1.",
    id: "shadowstrike",
    isNonstandard: false,
    isViable: true,
    name: "ShadowStrike",
    pp: 10,
    priority: 0,
    isContact: true,
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Ghost"
  }
};
