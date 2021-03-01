/*
  アバター(キャラ)のデータ.
  このデータがゲームオブジェクトとして存在するかは問わない.
 */
export class AvatarData {
  constructor(init?: Partial<AvatarData>) {
    this.x = 0;
    this.y = 0;
    this.velocityX = 0;
    this.velocityY = 0;
    this.rotation = 0;

    Object.assign(this, init);
  }

  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
}
