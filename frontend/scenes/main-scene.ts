import { Avatar } from "../objects/avatar";
import { AvatarSprite1 } from "../configs/avatarSprite1";
import { AvatarSprite1Anims } from "../configs/avatarSprite1";
import { KeybordInput } from "../utl/keybordInput";

export class MainScene extends Phaser.Scene {
  private myAvatar: Avatar;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.spritesheet(AvatarSprite1.key, AvatarSprite1.filePass, {
      frameWidth: AvatarSprite1.frameWidth,
      frameHeight: AvatarSprite1.frameHeight,
    });

    //タイルマップの読み込み.
    this.load.tilemapTiledJSON("map", "assets/tilemaps/demoMap/demo.json");
    this.load.image("tileset", "assets/tilemaps/demoMap/pipoya_mapchip.png");
  }

  create(): void {
    AvatarSprite1Anims.forEach((element) => {
      this.anims.create({
        key: element.key,
        frames: this.anims.generateFrameNumbers(element.targetSpriteKey, {
          start: element.startFlameNo,
          end: element.endFlameNo,
        }),
        frameRate: element.frameRate,
        repeat: element.repeat,
      });
    });

    //キーコンフィグ設定.
    KeybordInput.Instantiate(this);

    //タイルマップの読み込み.
    const map = this.make.tilemap({ key: "map" });
    const tiles = map.addTilesetImage("pipoya_mapchip", "tileset");
    //レイヤーのロード.
    const layer1 = map.createLayer("ground", tiles); // eslint-disable-line
    const layer2 = map.createLayer("objects", tiles); // eslint-disable-line
    layer2.setCollisionByExclusion([-1], true);

    this.myAvatar = Avatar.InstantiateOwnPlayerAvatar(this);
    this.cameras.main.startFollow(this.myAvatar.Sprite);

    this.physics.add.collider(this.myAvatar.Sprite, layer2);

    Avatar.InstantiateTestAvatar(this);
  }

  update(): void {
    KeybordInput.Instance.Update();
    this.myAvatar.update();
  }
}
