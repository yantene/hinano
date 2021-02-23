/*
 * ぴぽやのキャラスプライトの設定定数定義.
 */

import { SpriteData } from "../../models/spriteData";
import { AnimData } from "../../models/animData";

export const AvatarSprite1: SpriteData = {
  key: "AvatarSprite1",
  filePass: "./assets/textures/pipo-charachip001.png",

  frameWidth: 32,
  frameHeight: 32,
  frameNo: 0,
};

export const AvatarSprite1Down: AnimData = {
  key: "down", //アニメーションのキー名.
  targetSpriteKey: AvatarSprite1.key, //このアニメーションが対応するスプライトのキー.
  startFlameNo: 0,
  endFlameNo: 2,
  frameRate: 3, //フレームレート.
  repeat: -1, //アニメーション繰り返し回数.
};

export const AvatarSprite1Right: AnimData = {
  key: "right", //アニメーションのキー名.
  targetSpriteKey: AvatarSprite1.key, //このアニメーションが対応するスプライトのキー.
  startFlameNo: 3,
  endFlameNo: 5,
  frameRate: 3, //フレームレート.
  repeat: -1, //アニメーション繰り返し回数.
};

export const AvatarSprite1Left: AnimData = {
  key: "left", //アニメーションのキー名.
  targetSpriteKey: AvatarSprite1.key, //このアニメーションが対応するスプライトのキー.
  startFlameNo: 6,
  endFlameNo: 8,
  frameRate: 3, //フレームレート.
  repeat: -1, //アニメーション繰り返し回数.
};

export const AvatarSprite1Up: AnimData = {
  key: "up", //アニメーションのキー名.
  targetSpriteKey: AvatarSprite1.key, //このアニメーションが対応するスプライトのキー.
  startFlameNo: 9,
  endFlameNo: 11,
  frameRate: 3, //フレームレート.
  repeat: -1, //アニメーション繰り返し回数.
};

//定数アニメーションデータの配列.
export const AvatarSprite1Anims: AnimData[] = [
  AvatarSprite1Up,
  AvatarSprite1Down,
  AvatarSprite1Left,
  AvatarSprite1Right,
];
