import "phaser";
import { GameConfig } from "./config";

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  // eslint-disable-next-line
  const game = new Game(GameConfig);
});
