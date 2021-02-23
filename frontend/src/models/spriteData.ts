/*
  スプライトの実行時データ.
*/
export class SpriteData {
  constructor(init?: Partial<SpriteData>) {
    Object.assign(this, init);
  }

  key: string; //スプライト名.
  filePass: string; //スプライトのパス.

  frameWidth: number; //フレーム幅.
  frameHeight: number; //フレーム高さ.
  frameNo?: number; //フレーム番号.
}
