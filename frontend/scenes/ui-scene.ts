export class UIScene extends Phaser.Scene {
  private titleText?: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "UIScene", active: true });
  }

  create(): void {
    this.titleText = this.add
      .text(window.innerWidth / 2, window.innerHeight / 2, "Hinano", {
        font: "100px Arial",
        color: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
  }

  update(): void {
    if (this.titleText == undefined) return;

    this.titleText.x = window.innerWidth / 2;
    this.titleText.y = window.innerHeight / 2;
  }
}
