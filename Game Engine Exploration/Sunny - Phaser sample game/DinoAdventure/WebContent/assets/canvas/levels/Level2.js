// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Level2.
 */
function Level2() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level2_proto = Object.create(Phaser.State.prototype);
Level2.prototype = Level2_proto;
Level2.prototype.constructor = Level2;

Level2.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
	
	// from User Code dialog
	this.myInit();
	
};

Level2.prototype.preload = function () {
	
	this.load.pack('preloader', 'assets/pack.json');
	
};

Level2.prototype.create = function () {
	var _background = this.add.group();
	
	this.add.tileSprite(0, 0, 2009, 1962, 'wall-empty', null, _background);
	
	this.add.sprite(74, 1177, 'atlas1', 'musgo', _background);
	
	this.add.sprite(1383, 1646, 'atlas1', 'musgo', _background);
	
	this.add.sprite(1326, 844, 'atlas1', 'musgo', _background);
	
	this.add.sprite(118, 562, 'atlas1', 'musgo', _background);
	
	this.add.sprite(1266, 259, 'atlas1', 'wall-hole', _background);
	
	this.add.sprite(789, 936, 'atlas1', 'wall-hole', _background);
	
	this.add.sprite(1409, 1405, 'atlas1', 'wall-hole', _background);
	
	this.add.sprite(630, 1347, 'window', null, _background);
	
	this.add.sprite(148, 1678, 'atlas1', 'wall-hole', _background);
	
	var _door = new Door(this.game, 225, 83);
	_background.add(_door);
	
	var _platforms = this.add.group();
	
	var _platform = this.add.tileSprite(-17, 1931, 2020, 74, 'atlas1', 'platform2', _platforms);
	
	var _maceta = this.add.sprite(823, 503, 'atlas1', 'maceta', _platforms);
	this.game.physics.arcade.enable(_maceta);
	_maceta.body.setSize(351.0, 37.0, 31.0, 146.0);
	
	this.add.sprite(122, 533, 'atlas1', 'platform2', _platforms);
	
	this.add.sprite(1330, 815, 'atlas1', 'platform2', _platforms);
	
	this.add.sprite(1387, 1617, 'atlas1', 'platform2', _platforms);
	
	this.add.sprite(78, 1148, 'atlas1', 'platform2', _platforms);
	
	var _dino = new Dino(this.game, 154, 1853);
	this.add.existing(_dino);
	
	var _movingPlatforms = this.add.group();
	
	this.add.sprite(536, 1475, 'atlas1', 'platform1', _movingPlatforms);
	
	this.add.sprite(282, 959, 'atlas1', 'platform1', _movingPlatforms);
	
	var _shadows = this.add.group();
	
	this.add.sprite(66, 1213, 'atlas1', 'shadow', _shadows);
	
	this.add.sprite(1375, 1682, 'atlas1', 'shadow', _shadows);
	
	this.add.sprite(1318, 880, 'atlas1', 'shadow', _shadows);
	
	this.add.sprite(110, 598, 'atlas1', 'shadow', _shadows);
	
	var _objects = this.add.group();
	
	this.add.sprite(183, 485, 'atlas1', 'guapen', _objects);
	
	var _zombi_head = this.add.sprite(182, 1119, 'atlas1', 'zombi-head', _objects);
	_zombi_head.angle = 13.241499425611648;
	_zombi_head.scale.setTo(0.688249419675209, 0.6428571716864586);
	_zombi_head.anchor.setTo(0.3790812509523021, 0.5528988213766188);
	
	this.add.sprite(1689, 1508, 'atlas1', 'flor', _objects);
	
	// public fields
	
	this.fDoor = _door;
	this.fPlatforms = _platforms;
	this.fPlatform = _platform;
	this.fDino = _dino;
	this.fMovingPlatforms = _movingPlatforms;
	// from User Code dialog
	this.myCreate();
	
};

/* --- end generated code --- */

Level2.prototype.myInit = function() {
	this.world.resize(2000, 2000);
};

Level2.prototype.myCreate = function() {
	this.behavior = new PlatformerBehavior(this, "Level3", this.fDino, this.fDoor, this.fPlatforms, this.fMovingPlatforms);
};

Level2.prototype.update = function() {
	this.behavior.update();
};

Level2.prototype.render = function() {
	//  this.behavior.debug();
};
