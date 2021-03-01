import {
  AvatarControlPositionUpdateMode,
  IAvatarControlInputter,
} from "../interfaces/inputter.interface";
import "phaser";
import { KeybordInput } from "./keybordInput";

/**
 * keybord入力をavatar操作に変換.
 */
export class KeybordAvatarControlInputter implements IAvatarControlInputter {
  private addXPos = 0;
  private addYPos = 0;
  private velocityX = 0;
  private velocityY = 0;
  private rotation = 0;

  public getPositionUpdateMode(): AvatarControlPositionUpdateMode {
    return "Velocity";
  }
  public getVelocityX(_oldx: number): number {
    return this.velocityX;
  }
  public getVelocityY(_oldy: number): number {
    return this.velocityY;
  }

  public getRotation(): number {
    return this.rotation;
  }

  public update(): void {
    const velocityScale = 500;
    const directScale = 10;

    this.addXPos = 0;
    this.addYPos = 0;
    this.velocityX = 0;
    this.velocityY = 0;

    if (KeybordInput.Instance.Keys.get("left")?.IsKeysDown) {
      this.addXPos = -directScale;
      this.velocityX = -velocityScale;
    } else if (KeybordInput.Instance.Keys.get("right")?.IsKeysDown) {
      this.addXPos = directScale;
      this.velocityX = velocityScale;
    }

    if (KeybordInput.Instance.Keys.get("up")?.IsKeysDown) {
      this.addYPos = -directScale;
      this.velocityY = -velocityScale;
    } else if (KeybordInput.Instance.Keys.get("down")?.IsKeysDown) {
      this.addYPos = directScale;
      this.velocityY = velocityScale;
    }
  }

  public getPosX(oldx: number): number {
    return oldx + this.addXPos;
  }
  public getPosY(oldy: number): number {
    return oldy + this.addYPos;
  }
}
