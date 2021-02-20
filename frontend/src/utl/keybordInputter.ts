import { IAvatarControlInputter } from "../interfaces/inputter.interface";
import "phaser";

/**
 * keybord入力をavatar操作に変換.
 */
export class KeybordInputter implements IAvatarControlInputter {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private addXPos = 0;
  private addYPos = 0;

  constructor(keybordCursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    this.cursors = keybordCursors;
  }

  public update(): void {
    if (this.cursors.left.isDown) {
      this.addXPos = -10;
    } else if (this.cursors.right.isDown) {
      this.addXPos = 10;
    } else {
      this.addXPos = 0;
    }

    if (this.cursors.up.isDown) {
      this.addYPos = -10;
    } else if (this.cursors.down.isDown) {
      this.addYPos = 10;
    } else {
      this.addYPos = 0;
    }
  }

  public getPosX(oldx: number): number {
    return oldx + this.addXPos;
  }
  public getPosY(oldy: number): number {
    return oldy + this.addYPos;
  }
}
