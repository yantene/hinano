/*
  スプライトの実行時データ.
*/
export class SpriteData {
  constructor(init?: Partial<SpriteData>) {
    this.key = "";
    this.filePass = "";
    this.frameWidth = 0;
    this.frameHeight = 0;

    Object.assign(this, init);
  }

  key: string; //スプライト名.
  filePass: string; //スプライトのパス.

  frameWidth: number; //フレーム幅.
  frameHeight: number; //フレーム高さ.
  frameNo?: number; //フレーム番号.
}
