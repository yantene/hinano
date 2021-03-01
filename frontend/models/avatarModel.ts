import {
  AvatarControlPositionUpdateMode,
  IAvatarControlInputter,
} from "../interfaces/inputter.interface";
import { AvatarData } from "./avatarData";

/*
  アバター(キャラ)のロジック.
  オブジェクトとして存在するAvatarはこれを参照して動作する.
 */
export class AvatarModel {
  private iInputter?: IAvatarControlInputter;
  private data: AvatarData;

  constructor(inputter?: IAvatarControlInputter, data?: AvatarData) {
    this.iInputter = inputter;

    //空データが飛んで来たら、デフォで作成.
    if (data == undefined) {
      this.data = new AvatarData({});
    } else {
      this.data = data;
    }
  }

  get IInputter(): IAvatarControlInputter | undefined {
    return this.iInputter;
  }

  set IInputter(value: IAvatarControlInputter | undefined) {
    this.iInputter = value;
  }

  get Data(): AvatarData {
    return this.data;
  }

  set Data(data: AvatarData) {
    this.data = data;
  }

  public updatePosition(): void {
    if (this.data === null || this.IInputter === undefined) {
      return;
    }

    this.IInputter.update();
    if (this.IInputter.getPositionUpdateMode() == "Direct") {
      this.data.x = this.IInputter.getPosX(this.data.x);
      this.data.y = this.IInputter.getPosY(this.data.y);
    } else {
      this.data.velocityX = this.IInputter.getVelocityX(this.data.velocityX);
      this.data.velocityY = this.IInputter.getVelocityY(this.data.velocityY);
    }

    this.data.rotation = this.IInputter.getRotation();

    return;
  }

  get GetPositionUpdateMode(): AvatarControlPositionUpdateMode | undefined {
    return this.iInputter?.getPositionUpdateMode();
  }
}
