import "phaser";
import { DefaultKeybordConfig } from "../configs/keybordInputConfig";

/**
 * keybord入力を管理.
 */
export class KeybordInput {
  keyInputs: Map<InputType, KeyInput>;
  private static singletoneInstance: KeybordInput;

  constructor(scene: Phaser.Scene, keyconfig: KeyInputData[]) {
    this.keyInputs = new Map(
      keyconfig.map((x) => [x.inputType, new KeyInput(scene, x)])
    );
  }

  static Instantiate(scene: Phaser.Scene): void {
    this.singletoneInstance = new KeybordInput(scene, DefaultKeybordConfig);
  }

  static get Instance(): KeybordInput {
    return this.singletoneInstance;
  }

  get Keys(): Map<InputType, KeyInput> {
    return this.keyInputs;
  }

  public Update(): void {
    this.keyInputs.forEach((x) => x.Update());
  }
}

/**
 * keybord入力 キー入力を管理.
 */
export class KeyInput {
  data: KeyInputData;
  private keyList: Array<Phaser.Input.Keyboard.Key>;
  private keyDownFirst = false;
  private preDown = false;
  private nowDown = false;

  constructor(scene: Phaser.Scene, data: KeyInputData) {
    this.data = data;
    this.keyList = this.data.keycodeList.map((x) =>
      scene.input.keyboard.addKey(x)
    );
  }

  public Update(): void {
    this.preDown = this.nowDown;
    this.nowDown = this.keyList.reduce((acc, x) => acc || x.isDown, false);

    if (this.nowDown == true && this.preDown == false) {
      this.keyDownFirst = true;
    } else {
      this.keyDownFirst = false;
    }
  }

  /**
   * このキー群が、押されている状態かどうか.
   */
  get IsKeysDown(): boolean {
    return this.nowDown;
  }

  /**
   * このキー群が、今まさに押された瞬間かどうか.
   */
  get IsKeysDownFirst(): boolean {
    return this.keyDownFirst;
  }
}

/**
 * keybord入力 静的データ.
 */
export class KeyInputData {
  constructor(init?: Partial<KeyInputData>) {
    Object.assign(this, init);
  }

  keycodeList: Array<number>;
  inputType: InputType;
}

/**
 * ゲーム内で取得するときの概念.
 */
export type InputType = "down" | "up" | "left" | "right";
