import { Avatar } from "../objects/avatar";
import { AvatarSprite1 } from "../configs/avatarSprite1";
import { AvatarSprite1Anims } from "../configs/avatarSprite1";

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

    this.myAvatar = Avatar.InstantiateOwnPlayerAvatar(this);
    this.cameras.main.startFollow(this.myAvatar.Sprite);

    Avatar.InstantiateTestAvatar(this);
  }

  update(): void {
    this.myAvatar.update();
  }
}
