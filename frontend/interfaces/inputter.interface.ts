/**
 * avatarの操作インターフェース.
 */
export interface IAvatarControlInputter {
  /**
   * 入力を取得し,内部情報を更新する.
   */
  update(): void;

  /**
   * 位置更新モード取得.
   */
  getPositionUpdateMode(): AvatarControlPositionUpdateMode;

  /**
   * X位置を取得.
   */
  getPosX(oldx: number): number;

  /**
   * Y位置を取得.
   */
  getPosY(oldy: number): number;

  /**
   * X速度を取得.
   */
  getVelocityX(oldx: number): number;

  /**
   * Y速度を取得.
   */
  getVelocityY(oldy: number): number;

  /**
   * 角度を取得.
   * 奥が0,手前が180.
   */
  getRotation(): number;
}

/**InputerのPositionUpdateの方法.
 * Direct : getPosX,getPosYで直に位置を更新.コリジョン無視.
 * Velocity : getVelocityX,Yで速度を更新.実座標はコリジョンの位置による.
 */
export type AvatarControlPositionUpdateMode = "Direct" | "Velocity";
