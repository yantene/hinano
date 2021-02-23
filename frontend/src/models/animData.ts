/*
  スプライトアニメーションの実行時データ.
  Phaser.Types.Animations.Animationに変換されて使われる.
*/
export class AnimData {
  constructor(init?: Partial<AnimData>) {
    Object.assign(this, init);
  }

  key: string; //アニメーションのキー名.
  targetSpriteKey: string; //このアニメーションが対応するスプライトのキー.
  startFlameNo: number;
  endFlameNo: number;

  frameRate: number; //フレームレート.
  repeat: number; //アニメーション繰り返し回数.
}
