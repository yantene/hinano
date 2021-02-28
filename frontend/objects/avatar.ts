import { AvatarData } from "../models/avatarData";
import { AvatarModel } from "../models/avatarModel";
import { SpriteData } from "../models/spriteData";
import { AnimData } from "../models/animData";
import { AvatarSprite1 } from "../configs/avatarSprite1";
import { AvatarSprite1Anims } from "../configs/avatarSprite1";
import { KeybordAvatarControlInputter } from "../utl/keybordAvatarControlInputter";

export class Avatar {
  private model: AvatarModel;
  private sprite: Phaser.GameObjects.Sprite;
  private anims?: AnimData[];

  constructor(
    scene: Phaser.Scene,
    model: AvatarModel,
    spriteData: SpriteData,
    anims?: AnimData[]
  ) {
    this.sprite = scene.physics.add.sprite(
      spriteData.frameWidth,
      spriteData.frameHeight,
      spriteData.key,
      spriteData.frameNo
    );
    scene.add.existing(this.sprite);

    this.model = model;
    this.anims = anims;
  }

  public update(): void {
    const oldX = this.model.Data.x;
    const oldY = this.model.Data.y;
    this.model.updatePosition();

    this.SpriteUpdate(oldX, oldY);
  }

  private SpriteUpdate(oldX: number, oldY: number): void {
    this.sprite.x = this.model.Data.x;
    this.sprite.y = this.model.Data.y;

    //アニメが設定されているなら、上下左右移動でplay.
    if (this.anims != null) {
      //上下左右の順で入ってると仮定.
      ///TODO : dataにangle追加.座標移動か入力からangleを計算する処理をmodelへ.
      if (oldY > this.model.Data.y) {
        this.sprite.anims.play(this.anims[0].key, true);
      } else if (oldY < this.model.Data.y) {
        this.sprite.anims.play(this.anims[1].key, true);
      }
      if (oldX < this.model.Data.x) {
        this.sprite.anims.play(this.anims[2].key, true);
      } else if (oldX > this.model.Data.x) {
        this.sprite.anims.play(this.anims[3].key, true);
      }

      if (oldX == this.model.Data.x && oldY == this.model.Data.y) {
        this.sprite.anims.stop();
      }
    }
  }

  get Sprite(): Phaser.GameObjects.Sprite {
    return this.sprite;
  }

  /* このクライアントの持ち主のアバターをシーンに生成する. */
  static InstantiateOwnPlayerAvatar(scene: Phaser.Scene): Avatar {
    const keybordInputter = new KeybordAvatarControlInputter();

    const avatarData = new AvatarData();
    avatarData.x = 400;
    avatarData.y = 300;

    const spriteData = new SpriteData(AvatarSprite1);
    const avatarModel = new AvatarModel(keybordInputter, avatarData);

    return new Avatar(scene, avatarModel, spriteData, AvatarSprite1Anims);
  }

  /* inputter == null でアバターをシーンに生成. */
  static InstantiateTestAvatar(scene: Phaser.Scene): Avatar {
    const avatarData = new AvatarData();
    avatarData.x = 400;
    avatarData.y = 300;

    const spriteData = new SpriteData(AvatarSprite1);
    const avatarModel = new AvatarModel(undefined, avatarData);

    return new Avatar(scene, avatarModel, spriteData);
  }
}
