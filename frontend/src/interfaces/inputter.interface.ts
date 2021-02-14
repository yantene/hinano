/**
 * avatarの操作インターフェース.
 */
export interface IAvatarControlInputter {
  /**
   * 入力を取得し,内部情報を更新する.
   */
  update():void;

  /**
   * X位置を取得.
   */
  getPosX(oldx:number):number;

  /**
   * Y位置を取得.
   */
  getPosY(oldy:number):number;
}