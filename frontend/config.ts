import { MainScene } from "./scenes/main-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "hinano",
  url: "https://github.com/yantene/hinano",
  version: "0.1.0",
  width: 800,
  height: 600,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [MainScene],
};
