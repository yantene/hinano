import { IImageConstructor } from "../interfaces/image.interface";
import { IAvatarControlInputter } from "../interfaces/inputter.interface";

export class Avatar extends Phaser.GameObjects.Image {
  private iInputter: IAvatarControlInputter;

  constructor(aParams: IImageConstructor) {
    super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

    this.initSprite();
    this.scene.add.existing(this);
  }

  private initSprite() {
    this.setScale(0.5);
  }

  public setInputter(iInputter: IAvatarControlInputter) {
    this.iInputter = iInputter;
  }

  public updatePosition() {
    if (this.iInputter == null) {
      return;
    }

    this.x = this.iInputter.getPosX(this.x);
    this.y = this.iInputter.getPosY(this.y);
  }
}
