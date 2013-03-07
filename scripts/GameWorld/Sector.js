/*****************************************************************************

    Sector.js
    ---------

    A sector is a 2D area defined by a set of enclosing points.

*****************************************************************************/

// default values for setting up sector if no arguments provided
GAMEWORLD.DEFAULT_SECTOR_HEIGHT = 10;			// all sectors start at 0, specifies height of top int: 0-X
GAMEWORLD.DEFAULT_SECTOR_TYPE = 'WALL';			// string: FLOOR, WALL, LIQUID
GAMEWORLD.DEFAULT_SECTOR_MOVETYPE = 'NONE';		// string: NONE, DOOR, LIFT
GAMEWORLD.DEFAULT_SECTOR_MOVESPEED = 0;			// rate sector moves each game frame. int: 0-X
GAMEWORLD.DEFAULT_SECTOR_MOVETO = 10;			// height top of sector moves to. int: 0-X


// constructor
GAMEWORLD.Sector = function (args) {
	this.points = [];
	this.material = undefined;
	this.geometry = undefined;
	this.mesh = undefined;

	this.parseArgs(args);
	this.setupSector();
};


GAMEWORLD.Sector.prototype.parseArgs = function (args) {
	// initialize variables to arguments if provided, or defaults if not

	try {
		if (args.height) {
			this.height = args.height;
		} else {
			this.height = DEFAULT_SECTOR_HEIGHT;
		}

		if (args.sectorType) {
			this.sectorType = args.sectorType;
		} else {
			this.sectorType = DEFAULT_SECTOR_TYPE;
		}

		if (args.moveType) {
			this.moveType = args.moveType;
		} else {
			this.moveType = DEFAULT_SECTOR_MOVETYPE;
		}

		if (args.moveSpeed) {
			this.moveSpeed = args.moveSpeed;
		} else {
			this.moveSpeed = DEFAULT_SECTOR_MOVESPEED;
		}

		if (args.moveTo) {
			this.moveTo = args.moveTo;
		} else {
			this.moveTo = DEFAULT_SECTOR_MOVETO;
		}

		if (args.texture) {
			this.material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(args.texture) });
		} else {
			this.material = undefined;
		}
	} catch (exception) {
		throw 'Error in Sector.parseArgs(): ' + exception;
	}
};


GAMEWORLD.Sector.prototype.setupSector = function () {
	// setup points
	// setup texture/material
	// construct geometry and mesh
	//this.material = undefined;	 // material manager? asset manager? leave as basic texture for now

	try {
		this.setupPoints();
		this.setupMaterial();
		this.createGeometry();
		this.createMesh();
	} catch (exception) {
		throw 'Error in Sector.setupSector(): ' + exception;
	}
};


GAMEWORLD.Sector.prototype.setupPoints = function () {
	this.addPoint(0, 0);
	this.addPoint(10, 0);
	this.addPoint(10, 10);
	this.addPoint(0, 10);

	this.shape = new THREE.Shape(this.points);
};


// add a point to the sector. note that a Z point is not required
GAMEWORLD.Sector.prototype.addPoint = function (pointX, pointY) {
	if ((pointX) && (pointY)) {
		var newPoint = new THREE.Vector2(pointX, pointY);
		this.points.push(newPoint);
	} else {
		throw 'Invalid data supplied';
	}
};


GAMEWORLD.Sector.prototype.setupMaterial = function () {
	// ...
};


GAMEWORLD.Sector.prototype.createGeometry = function () {
	this.extrusionSettings = {
		size: 30,
		height: this.height,
		curveSegments: 3,
		bevelThickness: 1,
		bevelSize: 2,
		bevelEnabled: false,
		material: 0,
		extrudeMaterial: 1
	};

	this.geometry = new THREE.ExtrudeGeometry(this.shape, this.extrusionSettings);
};


GAMEWORLD.Sector.prototype.createMesh = function () {
	this.mesh = new THREE.Mesh(this.geometry, this.texture);
};


// game logic update loop
GAMEWORLD.Sector.prototype.updateFrameLogic = function () {
	if ((this.moveType) && (this.moveType !== 'NONE')) {

	}
};


// add the existing geometry to the given scene
GAMEWORLD.Sector.prototype.addToScene = function (scene) {
	if (scene) {
		scene.add(this.mesh);
	}
};	