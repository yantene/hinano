import { Avatar } from "../objects/avatar";
import { AvatarSprite1 } from "../assets/configs/avatarSprite1"

export class MainScene extends Phaser.Scene {
  private myAvatar: Avatar;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.spritesheet(
      AvatarSprite1.key,
      AvatarSprite1.filePass,
        {
          frameWidth: AvatarSprite1.frameWidth,
          frameHeight: AvatarSprite1.frameHeight
        }
    );
  }

  create(): void {
    this.myAvatar = Avatar.InstantiateOwnPlayerAvatar(this);
  }

  update(): void {
    this.myAvatar.update();
  }
}
