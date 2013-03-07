/*****************************************************************************

    SectorMap.js
    ------------

    ...

*****************************************************************************/


// constructor
GAMEWORLD.SectorMap = function (args) {
	// initialize variables
	this.sectors = [];

	// process parsed arguments
	this.parseArgs(args);
};


GAMEWORLD.SectorMap.prototype.parseArgs = function (args) {
	if (args.sectors) {
		for (var i = 0; i < args.sectors.length; i++) {
			this.addSector(args.sectors[i]);
		}
	}
};


GAMEWORLD.SectorMap.prototype.addSector = function (sector) {
	this.sectors.push(sector);
};


// game logic update loop
GAMEWORLD.SectorMap.prototype.updateFrameLogic = function () {
	for (var i = 0; i < sectors.length; i++) {
		sectors[i].updateFrameLogic();
	}
};


// add each map sector to the scene
GAMEWORLD.SectorMap.prototype.addToScene = function (scene) {
	for (var i = 0; i < sectors.length; i++) {
		sectors[i].addToScene(scene);
	}
};


