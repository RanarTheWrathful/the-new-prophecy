const { 
  combineStats, 
  skillSet,
  makeAuto, 
  addAura, 
  LayeredBoss,
       makeHybrid,
       makeOver, 
       makeDeco, 
       makeGuard,
       makeBird, 
       makeMulti,
} = require('../facilitators.js');
const {
  base,  
  statnames,
  gunCalcNames,
  dfltskl,
  smshskl,
  basePolygonDamage, 
  basePolygonHealth
} = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
//Projectiles
Class.blade = {
    PARENT: ["bullet"],
    LABEL: "Blade",
    ALPHA: 0,
};
Class.corruptchip = {
    PARENT: "sunchip",
  LABEL: "Corrupted Polygon",
    NECRO: [0, 3, 4, 5],
    SHAPE: -2
}
Class.afterimage = {
  PARENT: ["genericTank"],
  LABEL: "After-Image",
  TYPE: "none",
  MIRROR_MASTER_ANGLE: true,
  IGNORED_BY_AI: true,
  ALPHA: 0.35,
  DRAW_HEALTH: false,
  DIE_AT_RANGE: true,
  GIVE_KILL_MESSAGE: false,
  HITS_ITS_OWN_TYPE: "never",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
    },
  ],
};
Class.ranarspikeball = { 
   PARENT: ["genericTank"],
   LABEL: 'Spiked Ball',
   TYPE: "bullet",
  CONTROLLERS: ["alwaysFire"],
  FACING_TYPE: "turnWithSpeed",
   COLOR: 3,
   BODY: {
      ACCELERATION: base.ACCEL * 5,
      SPEED: base.SPEED * 2,
      HEALTH: base.HEALTH * 0.5,
      PENETRATION: base.PENETRATION * 2,
      SHIELD: base.SHIELD * 0,
      REGEN: base.REGEN * 0,
      FOV: base.FOV,
     RANGE: 1350,
   },
  DIE_AT_RANGE: true,
  GUNS: [ {
         POSITION: [ 25, 15, 0.001, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, -52.5, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, -105, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, -157.5, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, 150, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, 97.5, 0, ],
         }, {
         POSITION: [ 25, 15, 0.001, 0, 0, 48.5, 0, ],
         }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -157.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
   
         POSITION: [ 20, 15, 0.001, 0, 0, 48, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -79.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, -130.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 175.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 120.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 72, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, {
         POSITION: [ 20, 15, 0.001, 0, 0, 21, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
         }, }, 
     ],
};

Class.experimenterTurret = {
  PARENT: ["genericTank"],
  LABEL: "Stationed Turret",
  TYPE: "minion",
  HITS_OWN_TYPE: "hard",
  FACING_TYPE: "smoothToTarget",
  HAS_NO_RECOIL: true,
  BODY: {
    FOV: 1,
    SPEED: 0,
    ACCELERATION: 0,
    HEALTH: 7.5,
    SHIELD: 0,
    DAMAGE: 1.55,
    RESIST: 1,
    PENETRATION: 1,
    RANGE: 100,
    DENSITY: 0.4,
    PUSHABILITY: 0,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 361, 0],
      TYPE: "dominationBody",
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },

    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.scientistTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, -5.5, 0, 0],
      
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },

    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },
    {
      POSITION: [5.45, 16.65, -1.25, 6.25, 0, 0, 0],
    },
  ],
};
Class.physicistTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
    
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.single]),
                TYPE: ["trap", {PERSISTS_AFTER_DEATH: true}],
            },
        },
    
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.researcherTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.single]),
                TYPE: ["swarm", {PERSISTS_AFTER_DEATH: true}],
            },
        },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
//Turrets
Class.bounce = {
  PARENT: ["genericTank"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          {recoil: 75},
          {reload: 0.1},
        ]),
        TYPE: ["bullet", { ALPHA: 0 }],
      },
    },
  ],
};
//Decorative Turrets

Class.flingsymbol = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: -3,
  CONTROLLERS: ["onlyAcceptInArc"],
  COLOR: 16,
};
//Modified Projectiles
Class.flungTrap = {
    LABEL: "Flung Trap",
    PARENT: ["trap"],
  CONTROLLERS: ["nearestDifferentMaster"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: "bounce",
    },
    ],
};
Class.slungSetTrap = {
    LABEL: "Slung Trap",
    PARENT: ["flungTrap", "setTrap"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: "bounce",
    },
    ],
};
//Classes

//EXPERIMENTER BRANCH(new)
Class.experimenter = {
  PARENT: ["genericTank"],
  LABEL: "Experimenter",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  TOOLTIP: 'Right click to spawn a turret, then left click to control their aim!',
  MAX_CHILDREN: 3, 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25}
          
        ]),
        TYPE: ["experimenterTurret"],
        ALT_FIRE: true,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
Class.scientist = {
  PARENT: ["genericTank"],
  LABEL: "Scientist",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN:  3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25},
          
        ]),
        TYPE: ["scientistTurret"],
        ALT_FIRE: true,
        DESTROY_OLDEST_CHILD: true,
        SYNCS_SKILLS: true,
      },      
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
//POUNDER BRANCH
Class.autoFlankGuard = makeAuto(Class.flankGuard, "Auto-Flank Guard")
//auto-flank guard branch
Class.fullAuto = makeAuto(Class.auto3, "Full-Auto")
Class.autoTrapGuard = makeAuto(Class.trapGuard, "Auto-Trap Guard") 
Class.autoHexaTank = makeAuto(Class.hexaTank, "Auto-Hexa Tank")
Class.star = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Star")
//star branch
Class.pulsar = makeMulti({
    PARENT: "genericTank",
    BODY: {
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Pulsar")
Class.deathStar = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20.5, 12, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20.5, 12, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}, 2, "Death Star")

Class.neutronStar = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder, g.destroyer]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Neutron Star")
Class.autoStar = makeAuto(Class.star, "Auto-Star")
//destroyer branch
Class.retaliator = {
    PARENT: ["genericTank"],
    LABEL: "Retaliator",
  SKILL_CAP: [
  4, //reload
  10, //Penetration
  10, //bullet hp
  10, //bullet dmg
  10, //bullet spd
  9, //shield
  9, //body dmg
  9, // body hp
  9, //shield regen
  9, //body speed
],
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                g.basic,
                g.pounder,
                g.destroyer,
          {reload: 1.75},
                ]),
                TYPE: "bullet",
                MAX_CHILDREN: 1,
            },
        },
    {
      POSITION: [20, 20, 0.001, 0, 0, 0, 0],
    },
    ],
};
//TRAPPER BRANCH

Class.flinger = {
    PARENT: ["genericTank"],
    LABEL: "Flinger",
    STAT_NAMES: statnames.trap,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: ["flingsymbol", { INDEPENDENT: true, COLOR: 16 }],
    },
  ],
    GUNS: [
        { 
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "flungTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
Class.slinger = {
    PARENT: ["genericTank"],
    LABEL: "Slinger",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: ["flingsymbol", { INDEPENDENT: true, COLOR: 16 }],
    },
  ],
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "slungSetTrap",
            },
        },
    ],
};
//Legendary Classes

Class.reaper = {
  PARENT: ["genericTank"],
  LABEL: "Reaper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.5,
    HEALTH: base.HEALTH * 2,
    DAMAGE: base.DAMAGE,
    SHIELD: base.SHIELD * 1.5,
    REGEN: base.REGEN * 2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 10, 1.2, 5.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {size: 2}, {spray: 2}]),
        TYPE: ["afterimage"],
        AUTOFIRE: true,
        MAX_CHILDREN: 3,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    {
      POSITION: [5, 12, -1.3, 7, 0, 0, 0],
    },
  ],
};

Class.necroTyrant = {
  PARENT: ["genericTank"],
  LABEL: "Necro-Tyrant",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 2,
    HEALTH: base.HEALTH * 1.33,
    DAMAGE: base.DAMAGE * 1.33,
    SHIELD: base.SHIELD * 1.34,
    REGEN: base.REGEN * 2,
  },

  SHAPE: 0,
  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9, 1.3, 8, 0, 35, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9, 1.3, 8, 0, 179, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9, 1.3, 8, 0, 107, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9, 1.3, 8, 0, 323, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9, 1.3, 8, 0, 251, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9.5, 1.3, 8, 0, 60, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9.5, 1.3, 8, 0, 180, 0.5],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9.5, 1.3, 8, 0, 300, 1],

    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],

    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
    },

    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13.2, 5.2, 1.4, 0, -5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, 5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, -5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
Class.rebel = {
  PARENT: ["genericTank"],
  LABEL: "Rebel",
  STAT_NAMES: statnames.mixed,
    BODY: {
        ACCELERATION: base.ACCEL * 1.1,
        SPEED: base.SPEED * 1.75,
        HEALTH: base.HEALTH * 1.55,
        DAMAGE: base.DAMAGE * 1.55,
        PENETRATION: base.PENETRATION * 1.04,
        SHIELD: base.SHIELD * 1.55,
        REGEN: base.REGEN * 1.55,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8.5, 0.6, 5, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 1.5}, {damage: 1.1}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [10, 8.5, 0.6, 5, -6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 1.5}, {damage: 1.1}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          {damage: 1.1},
          {health: 1.1},
          {penetration: 1.1},
          {damage: 1.5},
          {health: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, -4, 152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 4, -152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      }, 
    },
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 0, 0, 0, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 90, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 180, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 270, 360, 0],
      TYPE: "spikeBody",
    },
  ],
};
//Misc

Class.unknown0 = {
   PARENT: ["genericTank"],
   LABEL: 'Unknown Class-0',
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 20, 1, 1, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator]),
            TYPE: "setTrap",
         }, }, {
         POSITION: [ 3, 20, 1.5, 16, 0, 180, 0, ],
         }, {
         POSITION: [ 6, 15, 1.5, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.drone]),
            TYPE: "drone",
            MAX_CHILDREN: 8,
         }, }, {
         POSITION: [ 6, 7, -1.5, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm]),
            TYPE: "bee",
            MAX_CHILDREN: 10,
         }, }, {
         POSITION: [ 6, 7, -1.5, 8, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm]),
            TYPE: "bee",
            MAX_CHILDREN: 10, 
         }, }, {
         POSITION: [ 6, 7, -1.5, 8, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm]),
            TYPE: "bee",
            MAX_CHILDREN: 10,
         }, }, 
     ],
};
//Enemies

//Bosses
Class.ranarDiscipleForm = {
  PARENT: ["rebel", "miniboss"],
  NAME: "Ranar",
  LABEL: "Disciple",
  STAT_NAMES: statnames.mixed,
  BODY: {
    FOV: 3.25,
    HEALTH: base.HEALTH * 200,
    REGEN: 0,
  },
  FACING_TYPE: "looseToTarget",
  DANGER: 8,
  SIZE: 15,
  VALUE: 2000000,
  AI: { STRAFE: true },
  COLOR: 34,
  SKILL: skillSet({
    rld: 0.25, //reload
    dam: 0.5, //bullet damage
    pen: 0.5, //bullet penetration
    str: 0.5, //bullet health
    spd: 0.5, //bullet speed
    atk: 1, //body damage
    hlt: 32, //max health 
    shi: 1, //shield capacity
    rgn: 1, //shield regeneration
    mob: 0.1, //movement speed
  }),
  };
Class.ranarAscendantForm = {
  PARENT: ["genericTank"],
  NAME: "Ranar",
  LABEL: "Ascendant",
  STAT_NAMES: statnames.mixed,
  BODY: {
    FOV: 3.25,
    HEALTH: base.HEALTH * 3500,
    REGEN: -1,
    SPEED: 1.5,
  },
  FACING_TYPE: "looseToTarget",
  DANGER: 8,
  SIZE: 27.5,
  VALUE: 5000000,
  AI: { STRAFE: true },
  COLOR: 3,
  SKILL: skillSet({
    rld: 0.05, //reload
    dam: 0.5, //bullet damage 
    pen: 0.5, //bullet penetration
    str: 0.5, //bullet health
    spd: 0.25, //bullet speed
    atk: 1, //body damage
    hlt: 32, //max health
    shi: 1, //shield capacity
    rgn: 1, //shield regeneration
    mob: 0.03, //movement speed
  }),
 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8.5, 0.6, 2, 6, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 1.5}, {damage: 1.15}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [10, 8.5, 0.6, 2, -6, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 1.5}, {damage: 1.15}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8.5, 0.6, 5, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 2}, {damage: 1.15}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [10, 8.5, 0.6, 5, -6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, {reload: 2}, {damage: 1.15}]),
        TYPE: "swarm",
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14.55, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.pounder, 
          g.destroyer, 
          {speed: 1.5}, 
          {health: 1.15}, 
          {damage: 1.15}, 
          {penetration: 1.15}, 
          {range: 2},
        ]),
        TYPE: "bullet",
      },
    },
  
    {
      POSITION: [20, 9, 1, 0, -4, 152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          g.pounder,
          g.destroyer,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 9, 1, 0, 4, -152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          g.pounder,
          g.destroyer,
        ]),
        
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          g.pounder,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          g.thruster,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          g.pounder,
        ]),
        TYPE: "bullet",
      },
    },
  ],
  };
  
Class.ranar = {
   PARENT: ["miniboss"],
   LABEL: 'Retaliator',
  FACING_TYPE: "looseToTarget",
   SHAPE: 0,
   SIZE: 80,
   NAME: "Ranar, Valrayvn's Ascendant",
   COLOR: 3,
   GUNS: [ {
         POSITION: [ 15, 6, 1, 0, 0, -216, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, 217, 0],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, -210, 0],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, 210, 0],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, -202.5, 0],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, 202.5, 0],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([
         g.basic,
          g.pounder,
          g.artillery,
          g.skimmer,
            ]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 20, 13, 0.001, 0, 0, 252.5, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
           ALWAYS_FIRE: true,
         }, }, {
         POSITION: [ 20, 13, 0.001, 0, 0, -251.5, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lancer]),
            TYPE: "blade",
           ALWAYS_FIRE: true,
         }, }, {
         POSITION: [ 15, 11, 1, 0, 0, 180, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
          g.trap,
          g.setTrap,
            ]),
            TYPE: "pillbox",
            MAX_CHILDREN: 4,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 3, 7, 1.7, 15, 0, 0, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.destroyer, {reload: 10}]),
            TYPE: "ranarspikeball",
           MAX_CHILDREN: 2,
           DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 15, 7, 1, 0, 0, 0, 0],
         }, {
         POSITION: [ 13, 7, 0.3, 0, 4, 0, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "autoswarm",
         }, }, {
         POSITION: [ 13, 7, 0.3, 0, -4, 0, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "autoswarm",
         }, }, {
         POSITION: [ 13, 7, 0.3, 0, 0, 0, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "autoswarm",
         }, }, 
     ],
};
Class.customBosses = {
    PARENT: ["menu"],
    LABEL: "Custom Bosses",
    COLOR: "red",
    UPGRADE_COLOR: "red",
    SHAPE: 8,
};
Class.pounder.UPGRADES_TIER_2.push("star")
Class.flankGuard.UPGRADES_TIER_2.push("star", "autoFlankGuard")
Class.star.UPGRADES_TIER_3 = ["deathStar", "autoStar", "neutronStar", "pulsar", "mega3"]
Class.autoFlankGuard.UPGRADES_TIER_3 = ["fullAuto", "autoStar", "autoTrapGuard", "autoHexaTank"]
Class.destroyer.UPGRADES_TIER_3.push("neutronStar", "retaliator")
Class.hexaTank.UPGRADES_TIER_3.push("deathStar", "autoHexaTank")
Class.trapGuard.UPGRADES_TIER_3.push("autoTrapGuard")
Class.auto3.UPGRADES_TIER_3.push("fullAuto")
Class.hunter.UPGRADES_TIER_3.push("pulsar")
        Class.flinger.UPGRADES_TIER_3 = ["slinger"]
        Class.builder.UPGRADES_TIER_3.push("slinger")
    Class.customBosses.UPGRADES_TIER_0 = ["unknown0", "ranar", "ranarDiscipleForm", "ranarAscendantForm",]
