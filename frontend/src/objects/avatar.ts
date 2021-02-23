import { AvatarData } from "../models/avatarData";
import { AvatarModel } from "../models/avatarModel";
import { SpriteData } from "../models/spriteData";
import { AvatarSprite1 } from "../assets/configs/avatarSprite1"
import { KeybordInputter } from "../utl/keybordInputter";

export class Avatar {
  private model : AvatarModel;
  private sprite : Phaser.GameObjects.Sprite;

  constructor(scene : Phaser.Scene, model : AvatarModel ,spriteData : SpriteData) {
    this.sprite = scene.add.sprite( spriteData.frameWidth,spriteData.frameHeight,spriteData.key,spriteData.frameNo );
    scene.add.existing(this.sprite);

    this.model = model;
  }

  public update(): void {
    this.model.updatePosition();

    this.sprite.x = this.model.Data.x;
    this.sprite.y = this.model.Data.y;
  }

  /* このクライアントの持ち主のアバターをシーンに生成する. */
  static InstantiateOwnPlayerAvatar(scene : Phaser.Scene): Avatar{
    var keybordInputter = new KeybordInputter(
      scene.input.keyboard.createCursorKeys()
    );
    
    var avatarData = new AvatarData();
    avatarData.x = 400;
    avatarData.y = 300;

    var spriteData = new SpriteData(AvatarSprite1);
    var avatarModel = new AvatarModel(keybordInputter,avatarData);

    return new Avatar(scene,avatarModel,spriteData);
  }
}
