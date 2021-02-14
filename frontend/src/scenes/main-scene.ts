import { Redhat } from "../objects/redhat";
import { Avatar } from "../objects/avatar";
import { KeybordInputter } from "../utl/keybordInputter";

export class MainScene extends Phaser.Scene {
  private myRedhat: Redhat;
  private myAvatar: Avatar;
  private keybordInputter: KeybordInputter;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.image("redhat", "./assets/redhat.png");
    this.load.image("redParticle", "./assets/red.png");
  }

  create(): void {
    const particles = this.add.particles("redParticle");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: "ADD"
    });

    this.myRedhat = new Redhat({
      scene: this,
      x: 400,
      y: 300,
      texture: "redhat"
    });

    emitter.startFollow(this.myRedhat);

    this.myAvatar = new Avatar({
      scene: this,
      x: 300,
      y: 200,
      texture: "redhat"
    })
    
    this.keybordInputter = new KeybordInputter(this.input.keyboard.createCursorKeys());
    this.myAvatar.setInputter(this.keybordInputter);
  }

  update(): void{
    this.keybordInputter.update();
    
    this.myAvatar.updatePosition();
  }
}
