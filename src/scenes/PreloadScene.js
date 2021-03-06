import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.tilemapTiledJSON('map', 'assets/crystalworld.json');
    this.load.image('tileset-1', 'assets/main_lev_build_1.png');
    this.load.image('tileset-2', 'assets/main_lev_build_2.png');
    this.load.image('iceball', 'assets/weapons/iceball_001.png');

    this.load.spritesheet('player', 'assets/player/move_sprite_1.png', {
      frameWidth: 32,
      frameHeight: 38,
      spacing: 32
    });

    this.load.spritesheet('player-throw', 'assets/player/throw_attack_sheet_1.png', {
      frameWidth: 32,
      frameHeight: 38,
      spacing: 32
    });

    this.load.spritesheet('birdman', 'assets/enemy/enemy_sheet.png', {
      frameWidth: 32,
      frameHeight: 64,
      spacing: 32
    });

    this.load.spritesheet('snakey', 'assets/enemy/enemy_sheet_2.png', {
      frameWidth: 32,
      frameHeight: 64,
      spacing: 32
    });

    this.load.spritesheet('explosion', 'assets/weapons/hit_effect_sheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('sword_default', 'assets/weapons/sword_sheet_1.png', {
      frameWidth: 52,
      frameHeight: 32,
      spacing: 16
    });
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PlayScene;
