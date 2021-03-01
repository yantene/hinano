import { KeyInputData } from "../utl/keybordInput";
import "phaser";

/**
 * keybord入力 デフォルトの
 */
export const DefaultKeybordConfig: KeyInputData[] = [
  {
    keycodeList: [
      Phaser.Input.Keyboard.KeyCodes.S,
      Phaser.Input.Keyboard.KeyCodes.DOWN,
    ],
    inputType: "down",
  },
  {
    keycodeList: [
      Phaser.Input.Keyboard.KeyCodes.W,
      Phaser.Input.Keyboard.KeyCodes.UP,
    ],
    inputType: "up",
  },
  {
    keycodeList: [
      Phaser.Input.Keyboard.KeyCodes.A,
      Phaser.Input.Keyboard.KeyCodes.LEFT,
    ],
    inputType: "left",
  },
  {
    keycodeList: [
      Phaser.Input.Keyboard.KeyCodes.D,
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
    ],
    inputType: "right",
  },
];
