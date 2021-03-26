import { MainScene } from "./scenes/main-scene";
import { UIScene } from "./scenes/ui-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "hinano",
  url: "https://github.com/yantene/hinano",
  version: "0.1.0",
  width: window.outerWidth,
  height: window.outerHeight,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  parent: "body",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "boby",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.outerWidth,
    height: window.outerHeight,
  },
  dom: {
    createContainer: true,
  },
  scene: [MainScene, UIScene],
};
